import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'
import SearchGateModal from '../components/SearchGateModal'
import { useApp } from '../context/AppContext'
import { Microscope, AlertTriangle, Cpu, Eye, Shield, Zap } from 'lucide-react'


export default function LandingPage() {
  const [showGate, setShowGate] = useState(false)
  const { searchCount, loggedIn } = useApp()

  const introCards = [
  {
    Icon: Microscope,
    accent: '#2effc0',
    tag: 'DEFINITION',
    title: 'What is it?',
    text: 'The specialized study of diseases affecting the eyes and neighboring tissues — combining microscopic examination, imaging, and AI-assisted pattern recognition for precise diagnosis.',
    stat: '89+',
    statLabel: 'Disease Entries',
  },
  {
    Icon: AlertTriangle,
    accent: '#f0c040',
    tag: 'IMPORTANCE',
    title: 'Why it matters?',
    text: 'Early detection of ocular manifestations can be the first indicator of systemic diseases like diabetes, hypertension, and autoimmune conditions — often before other symptoms appear.',
    stat: '2.2B',
    statLabel: 'People Affected Globally',
  },
  {
    Icon: Cpu,
    accent: '#7eb8ff',
    tag: 'TECHNOLOGY',
    title: 'How it works?',
    text: 'Describe what you observe — symptoms, signs, or clinical findings. Our AI cross-references Khurana\'s Comprehensive Ophthalmology database and returns ranked differential diagnoses instantly.',
    stat: '<2s',
    statLabel: 'Average Response Time',
  },
]

  return (
    <div className="pt-[60px]">
      {showGate && <SearchGateModal onClose={() => setShowGate(false)} />}

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Dot grid */}
        <div className="dot-grid absolute inset-0 opacity-50 pointer-events-none" />

        {/* Decorative eye orb */}
        <img src='/03.png' alt='Orbit' className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 40% 40%, #1a5c42, #071210)' }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Tag */}
          <div className="opacity-0-init animate-fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1aad82] text-[#2effc0] text-[11px] font-bold tracking-widest uppercase font-body mb-6">
            👁 AI-Powered Diagnosis
          </div>

          {/* Headline */}
          <h1 className="opacity-0-init animate-fade-in-up animate-delay-100 text-white leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 900 }}>
            AI-Powered{' '}
            <em className="text-[#2effc0] italic">Ocular</em>
            <br />Pathology
          </h1>

          {/* Subheading */}
          <p className="opacity-0-init animate-fade-in-up animate-delay-200 font-body text-[#7aad96] text-base max-w-[420px] mb-10 leading-relaxed">
            A modern, clinical yet approachable platform for Optometry/Opthalmology professionals and students.
          </p>

          {/* Search bar */}
          <div className="opacity-0-init animate-fade-in-up animate-delay-300 w-full flex justify-center">
            <SearchBar onGate={() => setShowGate(true)} />
          </div>

          {/* Search counter (after 1st use) */}
          {searchCount > 0 && !loggedIn && (
            <p className="mt-3 font-body text-xs text-[#4a7a64]">
              {searchCount}/2 free searches used
            </p>
          )}

          {/* Scroll cue */}
          <div className="animate-bounce-slow mt-12 text-[#4a7a64] text-2xl">⌄</div>
        </div>
      </section>

      
   {/* ── ABOUT ── */}
<section className="relative py-24 px-10">
  <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />
  <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
    
    {/* Text */}
    <div>
      <h2 className="text-white mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}>
        Advanced Diagnostic Support
      </h2>
      <p className="font-body text-[#7aad96] text-sm leading-[1.8] mb-6">
        Path-Nema bridges the gap between complex ocular data and actionable medical insights.
        Our proprietary AI models are trained on curated clinical datasets to assist in rapid
        identification of pathologies.
      </p>
      <ul className="space-y-3">
        {['Real-time specimen analysis', 'Clinical-grade accuracy reporting', 'Integrated student learning modules'].map(f => (
          <li key={f} className="flex items-center gap-3 font-body text-sm text-[#7aad96]">
            <span className="text-[#2effc0] text-base">✓</span> {f}
          </li>
        ))}
      </ul>
    </div>

    {/* Animated Eye Visual */}
    <div className="relative flex items-center justify-center">
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(90px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
        }
        @keyframes orbit-reverse {
          from { transform: rotate(0deg) translateX(112px) rotate(0deg); }
          to   { transform: rotate(-360deg) translateX(112px) rotate(360deg); }
        }
        @keyframes scan-line {
          0%   { top: 10%; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }
        @keyframes iris-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes data-blink {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
        @keyframes ring-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: 0.6; }
          50%      { transform: translate(-50%, -50%) scale(1.06); opacity: 1; }
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-6px); }
        }
        .orbit-dot  { animation: orbit 4s linear infinite; }
        .orbit-dot2 { animation: orbit-reverse 6s linear infinite; }
        .scan       { animation: scan-line 3s ease-in-out infinite; }
        .iris-spin  { animation: iris-rotate 12s linear infinite; }
        .ring-pulse { animation: ring-pulse 3s ease-in-out infinite; }
        .float-card { animation: float-card 4s ease-in-out infinite; }
        .data-blink { animation: data-blink 2s ease-in-out infinite; }
        .data-blink-2 { animation: data-blink 2s ease-in-out infinite 0.4s; }
        .data-blink-3 { animation: data-blink 2s ease-in-out infinite 0.8s; }
      `}</style>

      {/* Outer glow ring */}
      <div className="absolute w-[280px] h-[280px] rounded-full ring-pulse"
        style={{
          top: '50%', left: '50%',
          background: 'radial-gradient(circle, transparent 38%, rgba(46,255,192,0.06) 60%, transparent 70%)',
          border: '1px solid rgba(46,255,192,0.15)',
        }}
      />

      {/* Middle ring */}
      <div className="absolute w-[220px] h-[220px] rounded-full"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px dashed rgba(46,255,192,0.2)',
        }}
      />

      {/* Eyeball */}
      <div className="relative w-[160px] h-[160px] rounded-full flex items-center justify-center"
        style={{
          background: 'radial-gradient(circle at 38% 35%, #1d6b4a 0%, #0d3824 40%, #071210 100%)',
          boxShadow: '0 0 40px rgba(46,255,192,0.25), 0 0 80px rgba(46,255,192,0.08), inset 0 0 30px rgba(0,0,0,0.6)',
          border: '1px solid rgba(46,255,192,0.3)',
        }}
      >
        {/* Iris pattern */}
        <div className="iris-spin absolute rounded-full"
          style={{
            top: '50%', left: '50%',
            width: 100, height: 100,
            background: `repeating-conic-gradient(
              rgba(46,255,192,0.08) 0deg,
              transparent 3deg,
              transparent 10deg,
              rgba(46,255,192,0.05) 13deg
            )`,
            borderRadius: '50%',
          }}
        />

        {/* Pupil */}
        <div className="absolute rounded-full"
          style={{
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 52, height: 52,
            background: 'radial-gradient(circle at 40% 35%, #0a1a10, #020808)',
            boxShadow: '0 0 16px rgba(46,255,192,0.5), inset 0 0 10px rgba(46,255,192,0.1)',
            border: '1px solid rgba(46,255,192,0.4)',
          }}
        />

        {/* Pupil glint */}
        <div className="absolute rounded-full"
          style={{
            top: '34%', left: '40%',
            width: 10, height: 10,
            background: 'rgba(255,255,255,0.6)',
            filter: 'blur(2px)',
          }}
        />

        {/* Scan line */}
        <div className="scan absolute left-0 right-0 h-[1px] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(46,255,192,0.8), transparent)',
            boxShadow: '0 0 8px rgba(46,255,192,0.6)',
          }}
        />
      </div>

      {/* Orbiting dot 1 */}
      <div className="absolute"
        style={{ top: '50%', left: '50%', marginTop: -4, marginLeft: -4 }}>
        <div className="orbit-dot w-2 h-2 rounded-full bg-[#2effc0]"
          style={{ boxShadow: '0 0 8px rgba(46,255,192,0.8)' }}
        />
      </div>

      {/* Orbiting dot 2 */}
      <div className="absolute"
        style={{ top: '50%', left: '50%', marginTop: -3, marginLeft: -3 }}>
        <div className="orbit-dot2 w-1.5 h-1.5 rounded-full bg-[#2effc0] opacity-60"
          style={{ boxShadow: '0 0 6px rgba(46,255,192,0.6)' }}
        />
      </div>

      {/* Floating data card — top right */}
      <div className="float-card absolute top-2 right-0 bg-[#0f2318] border border-[#1a3328] rounded-xl px-3 py-2"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
        <p className="font-body text-[9px] font-bold tracking-widest uppercase text-[#4a7a64] mb-1">Match Score</p>
        <p className="font-body text-[#2effc0] text-lg font-black leading-none">94%</p>
      </div>

      {/* Floating data card — bottom left */}
      <div className="float-card absolute bottom-2 left-0 bg-[#0f2318] border border-[#1a3328] rounded-xl px-3 py-2"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.4)', animationDelay: '1s' }}>
        <p className="font-body text-[9px] font-bold tracking-widest uppercase text-[#4a7a64] mb-1.5">Analysis</p>
        <div className="flex flex-col gap-1">
          {[70, 45, 85].map((w, i) => (
            <div key={i} className="h-[3px] rounded-full bg-[#1a3328] w-16">
              <div
                className={`h-full rounded-full bg-[#2effc0] ${i === 0 ? 'data-blink' : i === 1 ? 'data-blink-2' : 'data-blink-3'}`}
                style={{ width: `${w}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Side readout — right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {['0.00', '5.00', '7.60', '173.09', '2.08'].map((v, i) => (
          <p key={i}
            className="font-body text-[10px] text-[#2effc0] font-mono data-blink"
            style={{ animationDelay: `${i * 0.3}s`, opacity: 0.5 }}>
            {v}
          </p>
        ))}
      </div>

    </div>
  </div>
</section>
{/* ── INTRO OCULAR PATHOLOGY ── */}
<section className="py-28 px-6 bg-[#0a1a14] relative overflow-hidden">
  {/* Background grid */}
  <div className="dot-grid absolute inset-0 opacity-20 pointer-events-none" />

  {/* Glow orbs */}
  <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
    style={{ background: 'radial-gradient(circle, rgba(46,255,192,0.04) 0%, transparent 70%)' }} />
  <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
    style={{ background: 'radial-gradient(circle, rgba(126,184,255,0.04) 0%, transparent 70%)' }} />

  <div className="relative max-w-6xl mx-auto">

    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1aad82] text-[#2effc0] text-[10px] font-bold tracking-[3px] uppercase font-body mb-5">
        <Eye size={11} /> OCULAR INTELLIGENCE
      </div>
      <h2 className="text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.5px' }}>
        Intro to Ocular Pathology
      </h2>
      <p className="font-body text-[#7aad96] text-sm max-w-[440px] mx-auto leading-relaxed">
        Understanding the intricacies of the human eye is vital for preserving vision and systemic health.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {introCards.map((card, i) => (
        <div key={card.title}
          className="group relative bg-[#0f2318] border border-[#1a3328] rounded-2xl p-7 hover:border-[#1aad82] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(to right, transparent, ${card.accent}, transparent)` }} />

          {/* Tag */}
          <p className="font-body text-[9px] font-bold tracking-[3px] uppercase mb-4"
            style={{ color: card.accent }}>
            {card.tag}
          </p>

          {/* Icon */}
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
            style={{
              background: `rgba(${card.accent === '#2effc0' ? '46,255,192' : card.accent === '#f0c040' ? '240,192,64' : '126,184,255'}, 0.08)`,
              border: `1px solid ${card.accent}30`,
            }}>
            <card.Icon size={22} style={{ color: card.accent }} strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3 className="font-body font-bold text-[17px] text-[#e8f5f0] mb-3">{card.title}</h3>

          {/* Text */}
          <p className="font-body text-[13px] text-[#7aad96] leading-[1.8] mb-6">{card.text}</p>

          {/* Stat */}
          <div className="pt-5 border-t border-[#1a3328] flex items-end justify-between">
            <div>
              <p className="font-body font-black text-[26px] leading-none mb-1"
                style={{ color: card.accent }}>
                {card.stat}
              </p>
              <p className="font-body text-[10px] text-[#4a7a64] uppercase tracking-wider font-semibold">
                {card.statLabel}
              </p>
            </div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: `${card.accent}15`, border: `1px solid ${card.accent}30` }}>
              <span style={{ color: card.accent }} className="text-sm">→</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom feature strip */}
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { Icon: Shield,    label: 'HIPAA Compliant',        sub: 'Secure data handling'       },
        { Icon: Zap,       label: 'Real-time Analysis',     sub: 'Sub-2 second response'      },
        { Icon: Eye,       label: '89+ Diseases',           sub: 'Khurana 7th Ed. database'   },
        { Icon: Cpu,       label: 'AI-Powered',             sub: 'LLaMA 4 Scout model'        },
      ].map(({ Icon, label, sub }) => (
        <div key={label} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#1a3328] bg-[#0d1e1a]">
          <div className="w-8 h-8 rounded-lg bg-[rgba(46,255,192,0.08)] border border-[#1aad82]/30 flex items-center justify-center flex-shrink-0">
            <Icon size={14} className="text-[#2effc0]" strokeWidth={1.5} />
          </div>
          <div>
            <p className="font-body text-[12px] font-bold text-[#e8f5f0] leading-tight">{label}</p>
            <p className="font-body text-[10px] text-[#4a7a64]">{sub}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
      {/* ── FOUNDER ── */}
      <section className="relative py-24 px-10 text-center">
        <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          {/* Avatar */}
     <img
  src="/Founder.jpg"
  alt="Martin Obe"
  className="w-[120px] h-[120px] rounded-full mx-auto mb-5 object-cover border-2 border-[#1aad82] animate-glow"
/>
          <h2 className="text-white text-[26px] mb-1">Martin Obe</h2>
          <p className="font-body text-[#2effc0] text-[13px] font-bold tracking-widest uppercase mb-6">
            Founder & Software Engineer
          </p>
          <p className="font-display italic text-[#7aad96] max-w-[660px] mx-auto leading-[1.75]"
            style={{ fontSize: 'clamp(15px, 2vw, 18px)' }}>
            "The mission is to democratize advanced ocular diagnostic tools, ensuring that every student or practising Optometrist, regardless of their location, has access to the highest level of Ocular pathological insight."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
