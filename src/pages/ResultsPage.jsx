import { useRef, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useOcularSearch } from '../hooks/useOcularSearch'
import DiseaseCard from '../components/DiseaseCard'
import Chip from '../components/shared/Chip'

// ── Skeleton card while loading ──
function SkeletonCard() {
  return (
    <div className="min-w-[280px] bg-[#0f2318] border border-[#1a3328] rounded-2xl p-6 animate-pulse">
      <div className="flex justify-between mb-5">
        <div className="w-[46px] h-[46px] rounded-xl bg-[#1a3328]" />
        <div className="text-right space-y-1">
          <div className="w-14 h-7 rounded bg-[#1a3328]" />
          <div className="w-16 h-2 rounded bg-[#1a3328]" />
        </div>
      </div>
      <div className="w-3/4 h-4 rounded bg-[#1a3328] mb-3" />
      <div className="space-y-2 mb-5">
        <div className="w-full h-3 rounded bg-[#1a3328]" />
        <div className="w-2/3 h-3 rounded bg-[#1a3328]" />
      </div>
      <div className="h-[3px] rounded bg-[#1a3328]" />
    </div>
  )
}

export default function ResultsPage() {
  const [searchParams] = useSearchParams()
  const navigate       = useNavigate()
  const query          = searchParams.get('q') || ''

  const { results, loading, error, search } = useOcularSearch()
  const scrollRef = useRef(null)
  const SCROLL_AMOUNT = 320

 // Auto-search when query changes — cache results in sessionStorage
useEffect(() => {
  if (!query) return
  const cacheKey = `pathnema_results_${query}`
  const cached = sessionStorage.getItem(cacheKey)
  if (cached) {
    // Restore cached results
    const parsed = JSON.parse(cached)
    search(query, parsed)
  } else {
    search(query)
  }
}, [query])

// Cache results when they arrive
useEffect(() => {
  if (results && query) {
    const cacheKey = `pathnema_results_${query}`
    sessionStorage.setItem(cacheKey, JSON.stringify(results))
  }
}, [results])

  const scrollLeft  = () => scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' })
  const scrollRight = () => scrollRef.current?.scrollBy({ left:  SCROLL_AMOUNT, behavior: 'smooth' })

  // Highlight terms in clinical guidance
  const renderGuidance = (text, terms = []) => {
    if (!terms.length) return text
    const regex = new RegExp(`(${terms.join('|')})`, 'gi')
    return text.split(regex).map((part, i) =>
      regex.test(part)
        ? <strong key={i} className="text-[#2effc0] font-semibold">{part}</strong>
        : part
    )
  }

  const diseases = results?.diseases || []
  const guidance = results?.clinicalGuidance || ''
  const terms    = results?.highlightedTerms || []
  const source   = results?.source || ''

  return (
    <div className="min-h-screen pt-[60px]">

      {/* ── HEADER ── */}
      <div className="px-10 pt-10 max-w-[1280px] mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#2effc0] text-[13px] font-semibold font-body mb-4 hover:opacity-75 transition-opacity"
        >
          ← Back to Home
        </button>

        <p className="font-body text-[11px] font-bold tracking-[2px] uppercase text-[#7aad96] mb-3">
          Clinical Analysis
        </p>

        <h1 className="font-display text-white mb-5" style={{ fontSize: 'clamp(22px, 3.5vw, 40px)', fontWeight: 900 }}>
          Results for:{' '}
          <em className="text-[#2effc0] italic">"{query}"</em>
        </h1>

        <div className="flex flex-wrap gap-2.5 mb-12">
          <Chip teal>Symptom Search</Chip>
          <Chip>Confidence Threshold: {results?.confidenceThreshold || 70}%</Chip>
          <Chip>Database: Clinical Core v4.2</Chip>
          {results?.searchedKhurana && <Chip teal>📖 Khurana's Ophthalmology</Chip>}
          {source && <Chip>{source}</Chip>}
        </div>
      </div>

      {/* ── ERROR ── */}
      {error && (
        <div className="px-10 mb-10 max-w-[1280px] mx-auto">
          <div className="bg-[#2a0f0f] border border-[#5a1a1a] rounded-2xl p-6 flex items-start gap-4">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-body font-semibold text-[#ff6b6b] mb-1">Search Error</p>
              <p className="font-body text-sm text-[#aa7a7a]">{error}</p>
              <button
                onClick={() => search(query)}
                className="mt-3 px-4 py-2 rounded-lg bg-[#3a1515] border border-[#5a1a1a] text-[#ff9999] text-sm font-body font-semibold hover:bg-[#4a1a1a] transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── CAROUSEL ── */}
      <div className="px-10 mb-16 max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-body font-semibold text-[16px] text-[#e8f5f0] flex items-center gap-2.5">
            <span className="text-[#2effc0]">⚙</span>
            Matched Diagnoses
            {loading && (
              <span className="font-body text-[12px] text-[#4a7a64] font-normal ml-2 animate-pulse">
                Analyzing symptoms...
              </span>
            )}
          </h2>
          {!loading && diseases.length > 0 && (
            <div className="flex gap-2">
              <button onClick={scrollLeft} className="w-[38px] h-[38px] rounded-full border border-[#1a3328] bg-[#0f2318] text-[#7aad96] flex items-center justify-center text-base hover:border-[#1aad82] hover:text-[#2effc0] hover:scale-105 transition-all">‹</button>
              <button onClick={scrollRight} className="w-[38px] h-[38px] rounded-full border border-[#1a3328] bg-[#0f2318] text-[#7aad96] flex items-center justify-center text-base hover:border-[#1aad82] hover:text-[#2effc0] hover:scale-105 transition-all">›</button>
            </div>
          )}
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="flex gap-5 overflow-hidden pb-2">
            {[1, 2, 3, 4].map(i => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* Real results */}
        {!loading && diseases.length > 0 && (
          <div ref={scrollRef} className="flex gap-5 overflow-x-auto carousel-scroll pb-2">
            {diseases.map(d => <DiseaseCard key={d.id} disease={d} />)}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && diseases.length === 0 && results && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="font-body font-semibold text-[#e8f5f0] mb-2">No matches found</h3>
            <p className="font-body text-sm text-[#7aad96] max-w-sm">
              Try describing symptoms in more detail — include redness, pain level, visual changes, or discharge.
            </p>
          </div>
        )}
      </div>

      {/* ── CLINICAL GUIDANCE ── */}
      {(guidance || loading) && (
        <div className="px-10 pb-16 max-w-[1280px] mx-auto">
          <div className="bg-[#0f2318] border border-[#1a3328] rounded-2xl p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-white text-[30px] mb-4">Clinical Guidance</h2>
              {loading ? (
                <div className="space-y-2 animate-pulse">
                  <div className="h-3 bg-[#1a3328] rounded w-full" />
                  <div className="h-3 bg-[#1a3328] rounded w-5/6" />
                  <div className="h-3 bg-[#1a3328] rounded w-4/6" />
                </div>
              ) : (
                <p className="font-body text-sm text-[#7aad96] leading-[1.9] mb-7">
                  {renderGuidance(guidance, terms)}
                </p>
              )}
              {!loading && (
                <div className="flex gap-3 flex-wrap">
                  <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#1a3328] text-[#7aad96] text-sm font-semibold font-body hover:border-[#1aad82] hover:text-[#2effc0] hover:scale-105 transition-all duration-200">
                    🖨 Export Report
                  </button>
                  <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2effc0] text-[#071210] text-sm font-bold font-body hover:opacity-85 hover:scale-105 transition-all duration-200">
                    + Add to Patient History
                  </button>
                </div>
              )}
            </div>

            {/* Eye visual */}
            <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#050f0a] flex items-center justify-center relative">
              <div className="w-[160px] h-[160px] rounded-full flex items-center justify-center"
                style={{ background: 'radial-gradient(circle at 38% 36%, #1a4a34, #030d08)', boxShadow: '0 0 60px rgba(46,255,192,0.2)' }}>
                <div className="w-16 h-16 rounded-full bg-[#020808] shadow-[0_0_20px_rgba(46,255,192,0.35)]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-[#050f0a]/30">
                <button className="w-14 h-14 rounded-full border-2 border-[#2effc0] bg-[rgba(46,255,192,0.1)] flex items-center justify-center text-[#2effc0] text-xl hover:bg-[rgba(46,255,192,0.2)] transition-colors">▶</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER BAR ── */}
      <div className="border-t border-[#1a3328] px-10 py-3.5 flex justify-between items-center">
        <span className="font-body text-[11px] text-[#4a7a64] tracking-wide flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2effc0] inline-block" />
          SYSTEM ACTIVE &nbsp;&nbsp; SECURE END-TO-END ENCRYPTION
        </span>
        <span className="font-body text-[11px] text-[#4a7a64] tracking-wide">
          HIPAA COMPLIANCE &nbsp;&nbsp; MEDICAL DISCLAIMER &nbsp;&nbsp; © 2024 PATH-NEMA CLINICAL
        </span>
      </div>
    </div>
  )
}







