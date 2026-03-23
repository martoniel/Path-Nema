import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState }      from 'react'
import jsPDF                        from 'jspdf'
import { getDiseaseImages }         from '../utils/diseaseImages'

export default function DetailPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const disease  = location.state?.disease

  const [video,        setVideo]        = useState(null)
  const [videoLoading, setVideoLoading] = useState(true)
  const [images,       setImages]       = useState([])
  const [imagesLoading,setImagesLoading]= useState(true)
  const [activeTab,    setActiveTab]    = useState('overview')
  const [lightbox,     setLightbox]     = useState(null)

  // ── Fetch YouTube video ──
  useEffect(() => {
    if (!disease) return
    setVideoLoading(true)
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/youtube?q=${encodeURIComponent(disease.name + ' eye disease')}`)
      .then(r => r.json())
      .then(data => {
        if (data.videos && data.videos.length > 0) setVideo(data.videos[0])
        setVideoLoading(false)
      })
      .catch(() => setVideoLoading(false))
  }, [disease?.name])

  // ── Load images: local first, Wikipedia fallback ──
  useEffect(() => {
    if (!disease) return
    setImagesLoading(true)

    const localImages = getDiseaseImages(disease.name)

    if (localImages.length > 0) {
      setImages(localImages)
      setImagesLoading(false)
    } else {
 fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/images?q=${encodeURIComponent(disease.name)}`)
        .then(r => r.json())
        .then(data => {
          if (data.images && data.images.length > 0) setImages(data.images)
          setImagesLoading(false)
        })
        .catch(() => setImagesLoading(false))
    }
  }, [disease?.name])

  // ── No data ──
  if (!disease) {
    return (
      <div className="min-h-screen pt-[60px] flex items-center justify-center">
        <div className="text-center">
          <p className="font-body text-[#7aad96] mb-4">No disease data found.</p>
          <button onClick={() => navigate(-1)}
            className="px-5 py-2.5 rounded-xl bg-[#2effc0] text-[#071210] font-bold font-body text-sm hover:opacity-85 transition-opacity">
            ← Go Back
          </button>
        </div>
      </div>
    )
  }

  const sev = disease.severity || 'moderate'
  const markerRight = { low: 'calc(90% - 7px)', moderate: 'calc(50% - 7px)', critical: 'calc(15% - 7px)' }
  const severityNote = {
    critical: 'Immediate intervention required to prevent permanent visual loss.',
    moderate: 'Prompt evaluation and treatment recommended.',
    low:      'Monitor and follow up as clinically indicated.',
  }

  // ── Generate PDF ──
  const handleDownloadPDF = () => {
    const doc  = new jsPDF({ unit: 'mm', format: 'a4' })
    const W    = doc.internal.pageSize.getWidth()
    let   y    = 20
    const lm   = 15
    const rm   = W - 15
    const wrap = (text, x, yPos, maxW, lineH = 6) => {
      const lines = doc.splitTextToSize(String(text || ''), maxW)
      lines.forEach(line => {
        if (yPos > 270) { doc.addPage(); yPos = 20 }
        doc.text(line, x, yPos)
        yPos += lineH
      })
      return yPos
    }

    doc.setFillColor(10, 26, 20)
    doc.rect(0, 0, W, 40, 'F')
    doc.setTextColor(46, 255, 192)
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('PATH-NEMA CLINICAL REPORT', lm, 18)
    doc.setFontSize(10)
    doc.setTextColor(122, 173, 150)
    doc.text(`Generated: ${new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}`, lm, 28)
    doc.text(`Source: ${disease.source || "Khurana's Comprehensive Ophthalmology, 7th Ed."}`, lm, 34)

    y = 50
    doc.setTextColor(30, 30, 30)
    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    doc.text(disease.name, lm, y); y += 8
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(46, 160, 100)
    doc.text(`Match Score: ${disease.matchPct}%   |   Severity: ${sev.toUpperCase()}`, lm, y); y += 8
    doc.setTextColor(80, 80, 80)
    doc.setFontSize(10)
    y = wrap(disease.classification || '', lm, y, rm - lm); y += 4

    const section = (title) => {
      if (y > 260) { doc.addPage(); y = 20 }
      doc.setDrawColor(46, 255, 192)
      doc.line(lm, y, rm, y); y += 5
      doc.setFontSize(13)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(10, 60, 40)
      doc.text(title, lm, y); y += 7
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(50, 50, 50)
    }

    const bullet = (items) => {
      if (!Array.isArray(items)) return
      items.forEach(item => {
        if (y > 270) { doc.addPage(); y = 20 }
        y = wrap(`• ${item}`, lm + 3, y, rm - lm - 3)
      })
      y += 3
    }

    section('Introduction')
    y = wrap(disease.introduction || disease.overview || '', lm, y, rm - lm); y += 4
    section('Epidemiology')
    y = wrap(disease.epidemiology || '', lm, y, rm - lm); y += 4
    section('Etiology')
    y = wrap(disease.etiology || '', lm, y, rm - lm); y += 4
    section('Pathophysiology')
    y = wrap(disease.pathophysiology || '', lm, y, rm - lm); y += 4
    section('Signs and Symptoms')
    if (disease.signsAndSymptoms) {
      doc.setFont('helvetica', 'bold'); doc.text('Symptoms:', lm, y); y += 5
      doc.setFont('helvetica', 'normal')
      bullet(disease.signsAndSymptoms.symptoms)
      doc.setFont('helvetica', 'bold'); doc.text('Signs:', lm, y); y += 5
      doc.setFont('helvetica', 'normal')
      bullet(disease.signsAndSymptoms.signs)
    } else { bullet(disease.symptoms) }
    section('Risk Factors')
    bullet(disease.riskFactors)
    section('Diagnosis')
    if (disease.diagnosis) {
      y = wrap(disease.diagnosis.clinical || '', lm, y, rm - lm); y += 3
      doc.setFont('helvetica', 'bold'); doc.text('Investigations:', lm, y); y += 5
      doc.setFont('helvetica', 'normal')
      bullet(disease.diagnosis.investigations)
    }
    section('Differential Diagnosis')
    if (Array.isArray(disease.differentialDiagnosis)) {
      disease.differentialDiagnosis.forEach(d => {
        if (y > 270) { doc.addPage(); y = 20 }
        y = wrap(`• ${d.name}: ${d.distinguishingFeature}`, lm + 3, y, rm - lm - 3)
      })
      y += 3
    }
    section('Treatment')
    if (disease.treatment) {
      doc.setFont('helvetica', 'bold'); doc.text('Immediate:', lm, y); y += 5
      doc.setFont('helvetica', 'normal')
      y = wrap(disease.treatment.immediate || '', lm + 3, y, rm - lm - 3); y += 3
      doc.setFont('helvetica', 'bold'); doc.text('Medical:', lm, y); y += 5
      doc.setFont('helvetica', 'normal')
      bullet(disease.treatment.medical)
      doc.setFont('helvetica', 'bold'); doc.text('Surgical:', lm, y); y += 5
      doc.setFont('helvetica', 'normal')
      y = wrap(disease.treatment.surgical || '', lm + 3, y, rm - lm - 3); y += 3
    }
    section('Management')
    y = wrap(disease.management || '', lm, y, rm - lm); y += 4
    section('Complications')
    bullet(disease.complications)
    section('Prognosis')
    y = wrap(disease.prognosis || '', lm, y, rm - lm); y += 4

    const pageCount = doc.internal.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.setFontSize(8)
      doc.setTextColor(150, 150, 150)
      doc.text('Path-Nema Clinical Report — For professional use only. Not a substitute for clinical judgment.', lm, 290)
      doc.text(`Page ${i} of ${pageCount}`, rm - 20, 290)
    }
    doc.save(`PathNema_${disease.name.replace(/\s+/g, '_')}_Report.pdf`)
  }

  const tabs = [
    { id: 'overview',  label: 'Overview'  },
    { id: 'clinical',  label: 'Clinical'  },
    { id: 'diagnosis', label: 'Diagnosis' },
    { id: 'treatment', label: 'Treatment' },
    { id: 'prognosis', label: 'Prognosis' },
  ]

  return (
    <div className="min-h-screen pt-[60px]">

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-white text-3xl font-light hover:text-[#2effc0] transition-colors"
            onClick={() => setLightbox(null)}
          >×</button>
          <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.url}
              alt={lightbox.title}
              className="w-full rounded-2xl object-contain max-h-[75vh]"
              onError={e => { e.target.src = 'https://placehold.co/800x500/0f2318/2effc0?text=Image+Unavailable' }}
            />
            <div className="mt-3 px-1">
              <p className="font-body text-[13px] text-[#e8f5f0] font-semibold">{lightbox.title}</p>
              <p className="font-body text-[11px] text-[#4a7a64] mt-0.5">{lightbox.source}</p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1060px] mx-auto px-6 py-6">

        {/* Back */}
        <button onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#2effc0] text-[13px] font-semibold font-body mb-6 hover:opacity-75 transition-opacity">
          ← Back to Diagnostic Results
        </button>

        {/* ── HERO ── */}
        <div className="bg-[#0f2318] border border-[#1a3328] rounded-2xl p-8 flex items-start justify-between gap-6 mb-8 flex-wrap">
          <div className="flex-1 min-w-[260px]">
            <div className="flex items-center gap-2 text-[#2effc0] text-[10px] font-bold tracking-[2px] uppercase font-body mb-3">
              <span>✓</span> High Confidence Analysis
            </div>
            <h1 className="text-white mb-3" style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 700 }}>
              {disease.name}
            </h1>
            <p className="font-body text-sm text-[#7aad96] max-w-[560px] leading-relaxed mb-4">
              {disease.classification || disease.overview}
            </p>
            <div className="flex gap-3 flex-wrap">
              <button onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2effc0] text-[#071210] font-bold text-[13px] font-body hover:opacity-85 transition-opacity">
                📄 Download PDF Report
              </button>
              <button onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#1aad82] text-[#2effc0] font-bold text-[13px] font-body hover:bg-[rgba(46,255,192,0.05)] transition-all">
                + Add to Patient History
              </button>
            </div>
          </div>
          <div className="bg-[#0d1e1a] border border-[#1a3328] rounded-2xl px-7 py-5 text-center flex-shrink-0">
            <p className="text-[#2effc0] font-body font-black leading-none" style={{ fontSize: 44 }}>{disease.matchPct}%</p>
            <p className="font-body text-[10px] font-bold tracking-widest uppercase text-[#4a7a64] mt-1">Match Score</p>
          </div>
        </div>

        {/* ── CLINICAL IMAGES ── */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-body font-bold text-[15px] text-[#e8f5f0]">
              🔬 Clinical Images — <span className="text-[#2effc0]">{disease.name}</span>
            </h2>
            <span className="font-body text-[10px] text-[#4a7a64] uppercase tracking-wider">
              Click to enlarge
            </span>
          </div>

          {imagesLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-[140px] rounded-xl bg-[#0f2318] border border-[#1a3328] animate-pulse" />
              ))}
            </div>
          ) : images.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative group rounded-xl overflow-hidden border border-[#1a3328] bg-[#0f2318] cursor-pointer hover:border-[#1aad82] transition-all duration-200"
                  style={{ height: 140 }}
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img.url.startsWith('/')
                      ? img.url
                      : `${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/proxy-image?url=${encodeURIComponent(img.url)}`
                    }
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={e => {
                      // Hide the entire card if image doesn't exist
                      e.target.closest('.group').style.display = 'none'
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
                    <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">🔍</span>
                  </div>
                  {/* Source badge */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-body text-[9px] text-white truncate">{img.source}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-[100px] rounded-xl bg-[#0f2318] border border-[#1a3328] flex items-center justify-center">
              <p className="font-body text-[12px] text-[#4a7a64]">No clinical images found</p>
            </div>
          )}

          {images.length > 0 && (
            <p className="font-body text-[10px] text-[#4a7a64] mt-2">
              Images sourced from the web for educational purposes only. Always verify clinical images with peer-reviewed sources.
            </p>
          )}
        </div>

        {/* ── TABS ── */}
        <div className="flex gap-1 mb-8 border-b border-[#1a3328] overflow-x-auto">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              className={`px-5 py-3 font-body text-[13px] font-semibold whitespace-nowrap transition-all border-b-2 -mb-[2px]
                ${activeTab === t.id
                  ? 'text-[#2effc0] border-[#2effc0]'
                  : 'text-[#4a7a64] border-transparent hover:text-[#7aad96]'}`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* ── BODY ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">

          {/* MAIN */}
          <div>

            {activeTab === 'overview' && (
              <div>
                <Section title="Introduction">
                  <p className="font-body text-sm text-[#7aad96] leading-[1.85]">{disease.introduction || disease.overview}</p>
                </Section>
                <Section title="Epidemiology">
                  <p className="font-body text-sm text-[#7aad96] leading-[1.85]">{disease.epidemiology || 'Epidemiological data not available.'}</p>
                </Section>
                <Section title="Etiology">
                  <p className="font-body text-sm text-[#7aad96] leading-[1.85]">{disease.etiology || 'Etiology data not available.'}</p>
                </Section>
                <Section title="Pathophysiology">
                  <p className="font-body text-sm text-[#7aad96] leading-[1.85]">{disease.pathophysiology || 'Pathophysiology data not available.'}</p>
                </Section>
              </div>
            )}

            {activeTab === 'clinical' && (
              <div>
                <Section title="Signs and Symptoms">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="bg-[#0f2318] border border-[#1a3328] rounded-xl p-5">
                      <h4 className="font-body font-bold text-[14px] text-[#2effc0] mb-3">🩺 Symptoms</h4>
                      <ul className="space-y-2">
                        {(disease.signsAndSymptoms?.symptoms || disease.symptoms || []).map((s, i) => (
                          <li key={i} className="flex items-start gap-2 font-body text-[13px] text-[#7aad96]">
                            <span className="text-[#2effc0] flex-shrink-0 mt-0.5">•</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#0f2318] border border-[#1a3328] rounded-xl p-5">
                      <h4 className="font-body font-bold text-[14px] text-[#2effc0] mb-3">🔬 Clinical Signs</h4>
                      <ul className="space-y-2">
                        {(disease.signsAndSymptoms?.signs || []).map((s, i) => (
                          <li key={i} className="flex items-start gap-2 font-body text-[13px] text-[#7aad96]">
                            <span className="text-[#2effc0] flex-shrink-0 mt-0.5">•</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Section>
                <Section title="Risk Factors">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {(disease.riskFactors || []).map((r, i) => (
                      <div key={i} className="flex items-start gap-3 bg-[#0f2318] border border-[#1a3328] rounded-xl p-4">
                        <span className="text-[#2effc0] text-lg flex-shrink-0">⚠️</span>
                        <p className="font-body text-[13px] text-[#7aad96]">{r}</p>
                      </div>
                    ))}
                  </div>
                </Section>
              </div>
            )}

            {activeTab === 'diagnosis' && (
              <div>
                <Section title="Clinical Diagnosis">
                  <p className="font-body text-sm text-[#7aad96] leading-[1.85]">{disease.diagnosis?.clinical || 'Clinical diagnostic criteria not specified.'}</p>
                </Section>
                <Section title="Investigations">
                  <div className="border border-[#1a3328] rounded-xl overflow-hidden mt-4">
                    {(disease.diagnosis?.investigations || []).map((inv, i, arr) => (
                      <div key={i} className={`flex items-start gap-3 px-5 py-4 font-body text-sm ${i < arr.length - 1 ? 'border-b border-[#1a3328]' : ''}`}>
                        <span className="text-[#2effc0] flex-shrink-0 mt-0.5">🧪</span>
                        <span className="text-[#7aad96]">{inv}</span>
                      </div>
                    ))}
                  </div>
                </Section>
                <Section title="Differential Diagnosis">
                  <div className="space-y-3 mt-4">
                    {(disease.differentialDiagnosis || []).map((d, i) => (
                      <div key={i} className="bg-[#0f2318] border border-[#1a3328] rounded-xl p-4 flex items-start gap-4">
                        <div className="flex-1">
                          <p className="font-body font-bold text-[14px] text-[#e8f5f0] mb-1">{d.name}</p>
                          <p className="font-body text-[12px] text-[#7aad96]">{d.distinguishingFeature}</p>
                        </div>
                        <span className="text-[#4a7a64] text-xs font-body font-semibold px-2 py-1 border border-[#1a3328] rounded-lg">DDx</span>
                      </div>
                    ))}
                  </div>
                </Section>
              </div>
            )}

            {activeTab === 'treatment' && (
              <div>
                {disease.treatment?.immediate && (
                  <div className="bg-[rgba(224,80,80,0.08)] border border-[rgba(224,80,80,0.2)] rounded-xl p-5 mb-8">
                    <h3 className="font-body font-bold text-[14px] text-[#e05050] mb-2">🚨 Immediate Management</h3>
                    <p className="font-body text-sm text-[#7aad96] leading-[1.8]">{disease.treatment.immediate}</p>
                  </div>
                )}
                <Section title="Medical Treatment">
                  <ul className="space-y-3 mt-4">
                    {(disease.treatment?.medical || []).map((m, i) => (
                      <li key={i} className="flex items-start gap-3 bg-[#0f2318] border border-[#1a3328] rounded-xl p-4">
                        <span className="text-[#2effc0] font-bold font-body text-sm flex-shrink-0">{i + 1}.</span>
                        <p className="font-body text-[13px] text-[#7aad96]">{m}</p>
                      </li>
                    ))}
                  </ul>
                </Section>
                <Section title="Surgical Options">
                  <p className="font-body text-sm text-[#7aad96] leading-[1.85]">{disease.treatment?.surgical || 'Surgical intervention not typically required.'}</p>
                </Section>
                <Section title="Long-term Management">
                  <p className="font-body text-sm text-[#7aad96] leading-[1.85]">{disease.management || 'Management plan to be determined by treating clinician.'}</p>
                </Section>
              </div>
            )}

            {activeTab === 'prognosis' && (
              <div>
                <Section title="Prognosis">
                  <p className="font-body text-sm text-[#7aad96] leading-[1.85]">{disease.prognosis || 'Prognosis depends on timely diagnosis and appropriate management.'}</p>
                </Section>
                <Section title="Complications">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {(disease.complications || []).map((c, i) => (
                      <div key={i} className="flex items-start gap-3 bg-[#0f2318] border border-[#1a3328] rounded-xl p-4">
                        <span className="text-[#f0c040] flex-shrink-0">⚡</span>
                        <p className="font-body text-[13px] text-[#7aad96]">{c}</p>
                      </div>
                    ))}
                  </div>
                </Section>
              </div>
            )}

          </div>

          {/* ── SIDEBAR ── */}
          <div>

            {/* Severity */}
            <div className="bg-[#0f2318] border border-[#1a3328] rounded-2xl p-5 mb-5">
              <h3 className="font-body font-bold text-[15px] text-[#e8f5f0] mb-4">Severity Assessment</h3>
              <div className="relative h-1.5 rounded-full mb-3"
                style={{ background: 'linear-gradient(to right, #2effc0, #f0c040, #e05050)' }}>
                <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#0a1a14]"
                  style={{ right: markerRight[sev] || markerRight.moderate }} />
              </div>
              <div className="flex justify-between font-body text-[10px] text-[#4a7a64] uppercase tracking-wider mb-3">
                <span>Low</span><span>Moderate</span>
                <span className={sev === 'critical' ? 'text-[#e05050] font-bold' : ''}>Critical</span>
              </div>
              <p className="font-body text-[12px] text-[#7aad96]">{severityNote[sev]}</p>
            </div>

            {/* Key Findings */}
            <div className="bg-[#0f2318] border border-[#1a3328] rounded-2xl p-5 mb-5">
              <h3 className="font-body font-bold text-[15px] text-[#e8f5f0] mb-3">Key Findings</h3>
              <ul className="space-y-2">
                {(disease.symptoms || []).slice(0, 4).map((s, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-[12px] text-[#7aad96]">
                    <span className="text-[#2effc0] flex-shrink-0 mt-0.5">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* YouTube Video */}
            <div className="bg-[#0f2318] border border-[#1a3328] rounded-2xl p-5 mb-5">
              <h3 className="font-body font-bold text-[15px] text-[#e8f5f0] mb-3">🎥 Educational Video</h3>
              {videoLoading ? (
                <div className="w-full h-[160px] rounded-xl bg-[#0d1e1a] animate-pulse" />
              ) : video ? (
                <div>
                  <div className="relative w-full rounded-xl overflow-hidden mb-3" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="font-body text-[11px] font-semibold text-[#e8f5f0] leading-snug mb-1 line-clamp-2">{video.title}</p>
                  <p className="font-body text-[10px] text-[#4a7a64]">{video.channel}</p>
                </div>
              ) : (
                <div className="w-full h-[100px] rounded-xl bg-[#0d1e1a] flex items-center justify-center">
                  <p className="font-body text-[12px] text-[#4a7a64]">No video found</p>
                </div>
              )}
            </div>

            {/* Source */}
            {disease.source && (
              <div className="bg-[#0f2318] border border-[#1a3328] rounded-2xl p-4 mb-5">
                <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-[#4a7a64] mb-1">Knowledge Source</p>
                <p className="font-body text-[12px] text-[#2effc0] font-semibold">{disease.source}</p>
              </div>
            )}

            {/* Download PDF */}
            <div className="bg-[#0f2318] border border-[#1a3328] rounded-2xl p-5 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[rgba(46,255,192,0.1)] border border-[#1aad82] flex items-center justify-center text-2xl mx-auto mb-3">📄</div>
              <h3 className="font-body font-bold text-[15px] text-[#e8f5f0] mb-2">Full Clinical Report</h3>
              <p className="font-body text-[12px] text-[#7aad96] mb-4 leading-relaxed">
                Complete PDF with all sections: pathophysiology, diagnosis, treatment, differential diagnosis and more.
              </p>
              <button onClick={handleDownloadPDF}
                className="w-full py-3 rounded-xl bg-[#2effc0] text-[#071210] font-bold text-[13px] font-body hover:opacity-85 transition-opacity">
                Download PDF
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#1a3328] mt-10 py-6 text-center">
        <p className="font-body text-[12px] text-[#4a7a64]">
          Report generated by Path-Nema Expert AI. Based on {disease.source || "Khurana's Comprehensive Ophthalmology"} and AI clinical pattern recognition.
        </p>
        <p className="font-body text-[11px] text-[#4a7a64] tracking-widest uppercase mt-1.5">
          STATUS: FINAL &nbsp;&nbsp; DATE: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-[22px] font-bold text-white pb-2.5 border-b border-[#1a3328] mb-4">{title}</h2>
      {children}
    </div>
  )
}






