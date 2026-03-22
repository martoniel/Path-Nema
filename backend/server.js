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

    const completion = await groq.chat.completions.create({
      model:       'meta-llama/llama-4-scout-17b-16e-instruct',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user',   content: `Patient presents with: ${query.trim()}` }
      ],
      temperature: 0.3,
      max_tokens:  8000,
    })

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
// GET /api/images?q=disease+name — Wikipedia (free, no key)
// ─────────────────────────────────────────────────────────────────────────────
app.get('/api/images', (req, res) => {
  const query = req.query.q
  if (!query) return res.status(400).json({ error: 'Query required' })

  const searchQuery = encodeURIComponent(query.replace(/\s+/g, '_'))
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${searchQuery}`

  https.get(url, { headers: { 'User-Agent': 'PathNema/1.0 (educational)' } }, (wRes) => {
    let data = ''
    wRes.on('data', chunk => { data += chunk })
    wRes.on('end', () => {
      try {
        const parsed = JSON.parse(data)
        const images = []

        if (parsed.originalimage?.source) {
          images.push({
            url:     parsed.originalimage.source,
            title:   parsed.title,
            source:  'Wikipedia',
            context: parsed.content_urls?.desktop?.page || '',
          })
        } else if (parsed.thumbnail?.source) {
          images.push({
            url:     parsed.thumbnail.source.replace(/\/\d+px-/, '/640px-'),
            title:   parsed.title,
            source:  'Wikipedia',
            context: parsed.content_urls?.desktop?.page || '',
          })
        }

        res.json({ images })
      } catch (e) {
        res.status(500).json({ error: 'Failed to fetch Wikipedia image' })
      }
    })
  }).on('error', (e) => {
    res.status(500).json({ error: e.message })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/health
// ─────────────────────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  const { KHURANA_KNOWLEDGE } = require('./khuranaKnowledge')
  res.json({
    status:        'ok',
    model:         'meta-llama/llama-4-scout-17b-16e-instruct',
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
  console.log(`🤖 Model: meta-llama/llama-4-scout-17b-16e-instruct (Groq)`)
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










