/**
 * server.js
 * Path-Nema backend — Express + Groq API + Khurana Knowledge Base
 * Start: node server.js
 */

require('dotenv').config()

const express = require('express')
const cors    = require('cors')
const Groq    = require('groq-sdk')
const https   = require('https')
const { searchKnowledge, formatKnowledgeForPrompt } = require('./khuranaKnowledge')

const app  = express()
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

app.use(cors({ origin: '*' }))
app.use(express.json())

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/search
// ─────────────────────────────────────────────────────────────────────────────
app.post('/api/search', async (req, res) => {
  const { query } = req.body

  if (!query || query.trim().length < 3) {
    return res.status(400).json({ error: 'Query too short. Please describe the symptoms.' })
  }

  try {
    const relevantEntries = searchKnowledge(query, 8)
    const khuranaContext  = formatKnowledgeForPrompt(relevantEntries)
    const hasKhurana      = relevantEntries.length > 0

    const systemPrompt = `You are Path-Nema, an advanced AI-powered ocular pathology diagnostic assistant used by ophthalmologists, optometrists, pathologists, and medical students.

${khuranaContext}

## Your Task
Analyze the described ocular signs and symptoms and return a comprehensive structured JSON response.

## Response Format
Respond ONLY with valid JSON — no prose, no markdown, no code fences:

{
  "diseases": [
    {
      "id": 1,
      "name": "Disease Name",
      "matchPct": 94,
      "icon": "👁",
      "symptoms": ["Key symptom 1", "Key symptom 2", "Key symptom 3"],
      "severity": "critical",
      "overview": "2-3 sentence clinical overview of the disease.",
      "classification": "Brief clinical classification sentence.",
      "introduction": "Detailed introduction paragraph about this disease, its significance and clinical importance.",
      "epidemiology": "Prevalence, incidence, demographic distribution, geographic patterns.",
      "etiology": "Causes and triggering factors in detail.",
      "pathophysiology": "Detailed explanation of the disease mechanism and how it causes the symptoms.",
      "signsAndSymptoms": {
        "symptoms": ["Symptom 1", "Symptom 2", "Symptom 3", "Symptom 4", "Symptom 5"],
        "signs": ["Sign 1", "Sign 2", "Sign 3", "Sign 4", "Sign 5"]
      },
      "riskFactors": ["Risk factor 1", "Risk factor 2", "Risk factor 3", "Risk factor 4"],
      "diagnosis": {
        "clinical": "Clinical diagnostic criteria and examination findings.",
        "investigations": ["Investigation 1 and expected result", "Investigation 2", "Investigation 3"]
      },
      "differentialDiagnosis": [
        { "name": "Condition 1", "distinguishingFeature": "How to differentiate" },
        { "name": "Condition 2", "distinguishingFeature": "How to differentiate" },
        { "name": "Condition 3", "distinguishingFeature": "How to differentiate" }
      ],
      "treatment": {
        "immediate": "Immediate/emergency management steps.",
        "medical": ["Medical treatment 1", "Medical treatment 2", "Medical treatment 3"],
        "surgical": "Surgical options if applicable, or Not typically required."
      },
      "management": "Comprehensive long-term management and follow-up plan.",
      "complications": ["Complication 1", "Complication 2", "Complication 3"],
      "prognosis": "Expected outcome with and without treatment."
    }
  ],
  "clinicalGuidance": "Detailed clinical guidance paragraph with recommended investigations and immediate management steps.",
  "highlightedTerms": ["term1", "term2", "term3"],
  "confidenceThreshold": 70,
  "source": "${hasKhurana ? "Khurana's Comprehensive Ophthalmology, 7th Ed." : "Groq AI Clinical Knowledge"}"
}

## Icon Guide
👁 = corneal/anterior segment | ☀️ = uveal/inflammatory | ✳️ = glaucoma/pressure
🔴 = vascular/hemorrhagic | 💧 = surface/secretory | 🌫️ = posterior segment
🧬 = infectious/parasitic | ⚡ = neurological | 🔶 = metabolic/systemic | 🏥 = orbital/adnexal

## Rules
- Return 8-10 diseases minimum, ranked by match percentage descending
- Only include diseases with match above 40%
- Severity must be exactly one of: "critical", "moderate", "low"
- Every field must be populated — no null or empty values
- Be clinically precise and comprehensive — used by medical professionals
- Draw primarily from the Khurana reference material provided`

    // Try models in order — fall back if rate-limited (429)
    const MODELS = [
      'qwen/qwen3.8-27b',
      'openai/gpt-oss-120b',
      'groq/compound',
    ]
    let completion
    let lastErr
    for (const model of MODELS) {
      try {
        completion = await groq.chat.completions.create({
          model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user',   content: `Patient presents with: ${query.trim()}` }
          ],
          temperature: 0.3,
          max_tokens:  8000,
        })
        break // success — stop trying
      } catch (e) {
        lastErr = e
        if (e.status === 429 || e.status === 404) {
          console.warn(`⚠️  Model ${model} failed (${e.status}), trying next...`)
          continue
        }
        throw e // non-rate-limit error — bubble up
      }
    }
    if (!completion) throw lastErr

    const rawText   = completion.choices[0]?.message?.content || ''
    const cleanJSON = rawText.replace(/```json\n?/gi, '').replace(/```\n?/gi, '').trim()

    let parsed
    try {
      parsed = JSON.parse(cleanJSON)
    } catch (parseErr) {
      console.error('❌ JSON parse error:', parseErr.message)
      console.error('Raw response:', rawText.slice(0, 500))
      return res.status(500).json({ error: 'Failed to parse AI response. Please try again.' })
    }

    res.json({
      ...parsed,
      searchedKhurana:    hasKhurana,
      khuranaEntriesUsed: relevantEntries.length,
      matchedCategories:  [...new Set(relevantEntries.map(e => e.category))],
      query:              query.trim(),
    })

  } catch (err) {
    console.error('❌ Server error:', err.message)
    if (err.message?.includes('API_KEY') || err.message?.includes('api_key')) {
      return res.status(401).json({ error: 'Invalid Groq API key.' })
    }
    if (err.message?.includes('rate') || err.message?.includes('429')) {
      return res.status(429).json({ error: 'Rate limit reached. Please wait a moment.' })
    }
    res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
})

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/youtube?q=disease+name
// ─────────────────────────────────────────────────────────────────────────────
app.get('/api/youtube', (req, res) => {
  const query  = req.query.q
  const apiKey = process.env.YOUTUBE_API_KEY

  if (!query)  return res.status(400).json({ error: 'Query required' })
  if (!apiKey) return res.status(500).json({ error: 'YouTube API key not configured' })

  const searchQuery = encodeURIComponent(`${query} ophthalmology ocular pathology explained`)
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&maxResults=3&relevanceLanguage=en&key=${apiKey}`

  https.get(url, (ytRes) => {
    let data = ''
    ytRes.on('data', chunk => { data += chunk })
    ytRes.on('end', () => {
      try {
        const parsed = JSON.parse(data)
        if (parsed.error) return res.status(500).json({ error: parsed.error.message })
        const videos = (parsed.items || []).map(item => ({
          videoId:     item.id.videoId,
          title:       item.snippet.title,
          channel:     item.snippet.channelTitle,
          thumbnail:   item.snippet.thumbnails.medium.url,
          description: item.snippet.description,
        }))
        res.json({ videos })
      } catch (e) {
        res.status(500).json({ error: 'Failed to parse YouTube response' })
      }
    })
  }).on('error', (e) => {
    res.status(500).json({ error: e.message })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/images?q=disease+name
// Fetches up to 3 clinical ocular photos via Wikimedia Commons + Wikipedia
// Uses quoted compound searches + strict allow/block filtering
// ─────────────────────────────────────────────────────────────────────────────
app.get('/api/images', async (req, res) => {
  const query = req.query.q
  if (!query) return res.status(400).json({ error: 'Query required' })

  const queryLower = query.toLowerCase().replace(/[^a-z0-9 ]/g, '')

  // Title MUST match at least one allow term (ocular anatomy / clinical photo indicators)
  const ALLOW = [
    queryLower,
    'eye', 'ocul', 'ophthalm', 'retina', 'cornea', 'iris', 'pupil',
    'vitreous', 'sclera', 'conjunctiv', 'macula', 'fundus', 'optic nerve',
    'uvea', 'uveitis', 'glaucoma', 'cataract', 'kerato', 'blephar',
    'eyelid', 'orbit', 'strabismus', 'amblyopia', 'nystagmus', 'choroid',
    'fovea', 'slit.?lamp', 'fluorescein', 'angiograph', 'leukocoria',
    'hyphema', 'pterygium', 'trachoma', 'chalazion', 'papilledema',
    'exophthalm', 'proptosis', 'ectropion', 'entropion', 'ptosis',
    'photo', 'photograph', 'clinical photo', 'histolog', 'patholog',
  ]

  // Title matching ANY block term is immediately rejected
  const BLOCK = [
    // Non-medical objects
    'aircraft', 'airplane', 'aeroplane', 'plane', 'jet', 'fighter', 'bomber',
    'rocket', 'missile', 'tank', 'warship', 'ship', 'boat', 'submarine',
    'car', 'truck', 'vehicle', 'train', 'motorcycle', 'bicycle',
    'building', 'architecture', 'bridge', 'tower', 'stadium', 'church',
    'map', 'flag', 'logo', 'icon', 'symbol', 'badge', 'coat of arms', 'emblem',
    'portrait', 'landscape', 'mountain', 'river', 'forest', 'beach',
    'animal', 'bird', 'insect', 'fish', 'plant', 'flower', 'tree', 'food',
    // Historical illustrations / book scans — NOT clinical photos
    'woodcut', 'engraving', 'lithograph', 'etching', 'drawing', 'sketch',
    'painting', 'artwork', 'wellcome', 'atlas and', 'text.?book of',
    'handbook', 'treatise', 'ediciones', 'mra edicion',
    'fig\\.', 'figure \\d', 'plate \\d', 'plate\\.',
    '\\(\\d{4}\\)',   // titles containing a year in parens like (1905)
  ]

  function isAccepted(title) {
    const t = title.toLowerCase()
    if (BLOCK.some(w => new RegExp(w).test(t))) return false
    return ALLOW.some(w => new RegExp(w).test(t))
  }

  function httpsGet(url, redirectCount = 0) {
    return new Promise((resolve, reject) => {
      if (redirectCount > 5) return reject(new Error('Too many redirects'))
      https.get(url, { headers: { 'User-Agent': 'PathNema/1.0 (educational; contact@pathnema.com)' } }, (r) => {
        if ([301, 302, 307, 308].includes(r.statusCode) && r.headers.location) {
          r.resume()
          return httpsGet(r.headers.location, redirectCount + 1).then(resolve).catch(reject)
        }
        if (r.statusCode !== 200) { r.resume(); return reject(new Error(`HTTP ${r.statusCode}`)) }
        let data = ''
        r.on('data', c => { data += c })
        r.on('end', () => {
          try { resolve(JSON.parse(data)) }
          catch (e) { reject(new Error(`JSON parse failed: ${e.message}`)) }
        })
      }).on('error', reject)
    })
  }

  async function resolveCommonsFiles(fileTitles) {
    if (!fileTitles.length) return []
    const filtered = fileTitles.filter(t => isAccepted(t))
    if (!filtered.length) return []
    const titlesParam = encodeURIComponent(filtered.join('|'))
    const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${titlesParam}&prop=imageinfo&iiprop=url&iiurlwidth=640&format=json&origin=*`
    const infoData = await httpsGet(infoUrl)
    const pages = Object.values(infoData?.query?.pages || {})
    const results = []
    for (const page of pages) {
      const info = page.imageinfo?.[0]
      if (!info?.url) continue
      if (/\.(svg|gif)$/i.test(info.url)) continue
      const title = (page.title || query).replace(/^File:/, '').replace(/\.\w+$/, '')
      if (!isAccepted(title)) continue
      results.push({
        url:     info.thumburl || info.url,
        title,
        source:  'Wikimedia Commons',
        context: `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title || '')}`,
      })
    }
    return results
  }

  async function searchCommons(term, limit = 20) {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(term)}&srnamespace=6&srlimit=${limit}&format=json&origin=*`
    const data = await httpsGet(url)
    return (data?.query?.search || [])
      .map(r => r.title)
      .filter(t => /\.(jpg|jpeg|png|webp)$/i.test(t))
  }

  try {
    const images = []

    // ── Pass 1: Quoted compound searches — most precise, least noise ──
    // Wikimedia full-text search with quoted phrases strongly narrows results
    const compoundTerms = [
      `"${query}" eye`,
      `"${query}" fundus`,
      `"${query}" slit lamp`,
      `"${query}" ocular`,
      `"${query}" ophthalmology`,
      `"${query}" clinical`,
    ]
    for (const term of compoundTerms) {
      if (images.length >= 3) break
      try {
        const titles   = await searchCommons(term, 20)
        const resolved = await resolveCommonsFiles(titles)
        for (const img of resolved) {
          if (images.length >= 3) break
          if (!images.find(x => x.url === img.url)) images.push(img)
        }
      } catch (e) { console.warn(`Pass 1 "${term}" failed:`, e.message) }
    }

    // ── Pass 2: Plain disease name, rely entirely on isAccepted filter ──
    if (images.length < 3) {
      try {
        const titles   = await searchCommons(query, 20)
        const resolved = await resolveCommonsFiles(titles)
        for (const img of resolved) {
          if (images.length >= 3) break
          if (!images.find(x => x.url === img.url)) images.push(img)
        }
      } catch (e) { console.warn('Pass 2 failed:', e.message) }
    }

    // ── Pass 3: Wikipedia article image — only if article is clearly medical ──
    if (images.length < 3) {
      try {
        const wikiSlug = encodeURIComponent(query.replace(/\s+/g, '_'))
        const wikiData = await httpsGet(`https://en.wikipedia.org/api/rest_v1/page/summary/${wikiSlug}`)
        const desc = (wikiData.description || wikiData.extract || '').toLowerCase()
        const isMedical = /eye|ocul|ophthalm|retina|cornea|lens|vision|visual|medical|disease|disorder|condition|syndrome/.test(desc)
        if (isMedical) {
          const imgSrc = wikiData.originalimage?.source || wikiData.thumbnail?.source
          if (imgSrc && isAccepted(wikiData.title || query)) {
            const bigUrl = imgSrc.replace(/\/\d+px-/, '/640px-')
            if (!images.find(x => x.url === bigUrl)) {
              images.push({
                url:     bigUrl,
                title:   wikiData.title || query,
                source:  'Wikipedia',
                context: wikiData.content_urls?.desktop?.page || '',
              })
            }
          }
        }
      } catch (_) { /* silent */ }
    }

    res.json({ images })
  } catch (err) {
    console.error('Images fetch error:', err.message)
    res.status(500).json({ error: 'Failed to fetch images' })
  }
})

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/health
// ─────────────────────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  const { KHURANA_KNOWLEDGE } = require('./khuranaKnowledge')
  res.json({
    status:        'ok',
    model:         'qwen/qwen3.8-27b (fallback: gpt-oss-120b, compound)',
    provider:      'Groq',
    knowledgeBase: KHURANA_KNOWLEDGE.source,
    totalDiseases: KHURANA_KNOWLEDGE.sections.length,
    youtube:       !!process.env.YOUTUBE_API_KEY,
    images:        !!process.env.GOOGLE_CSE_ID,
    timestamp:     new Date().toISOString(),
  })
})



// ─────────────────────────────────────────────────────────────────────────────
// GET /api/proxy-image?url=...  — proxies external images to avoid CORS
// ─────────────────────────────────────────────────────────────────────────────
app.get('/api/proxy-image', (req, res) => {
  const imageUrl = req.query.url
  if (!imageUrl) return res.status(400).send('URL required')

  https.get(imageUrl, { headers: { 'User-Agent': 'PathNema/1.0' } }, (imgRes) => {
    res.setHeader('Content-Type', imgRes.headers['content-type'] || 'image/jpeg')
    res.setHeader('Cache-Control', 'public, max-age=86400')
    imgRes.pipe(res)
  }).on('error', () => res.status(500).send('Failed to fetch image'))
})


// ── Start ──
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  const { KHURANA_KNOWLEDGE } = require('./khuranaKnowledge')
  console.log(`\n🚀 Path-Nema backend running on http://localhost:${PORT}`)
  console.log(`🤖 Model: qwen/qwen3.8-27b → gpt-oss-120b → compound (Groq, with fallback)`)
  console.log(`📚 Knowledge base: ${KHURANA_KNOWLEDGE.source}`)
  console.log(`🔬 Diseases loaded: ${KHURANA_KNOWLEDGE.sections.length}`)
  console.log(`🎥 YouTube API: ${process.env.YOUTUBE_API_KEY ? '✅ configured' : '❌ missing'}`)
  console.log(`🖼️  Image Search: ${process.env.GOOGLE_CSE_ID ? '✅ configured' : '❌ missing'}`)
  console.log(`📡 Frontend: http://localhost:5173`)
  console.log(`\nEndpoints:`)
  console.log(`  POST http://localhost:${PORT}/api/search`)
  console.log(`  GET  http://localhost:${PORT}/api/youtube?q=glaucoma`)
  console.log(`  GET  http://localhost:${PORT}/api/images?q=glaucoma`)
  console.log(`  GET  http://localhost:${PORT}/api/health\n`)
})










