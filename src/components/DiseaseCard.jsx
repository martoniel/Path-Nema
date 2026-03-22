import { useNavigate } from 'react-router-dom'

export default function DiseaseCard({ disease }) {
  const navigate = useNavigate()

  return (
    <div
      className="
        relative min-w-[280px] bg-[#0f2318] border border-[#1a3328] rounded-2xl p-6
        cursor-pointer group
        hover:border-[#1aad82] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(46,255,192,0.08)]
        transition-all duration-200
      "
    >
      {/* Top row: icon + match % */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-[46px] h-[46px] rounded-xl bg-[rgba(46,255,192,0.1)] border border-[#1aad82] flex items-center justify-center text-2xl">
          {disease.icon}
        </div>
        <div className="text-right">
          <p className="text-[#2effc0] text-[28px] font-extrabold leading-none font-body">{disease.matchPct || disease.pct}%</p>
          <p className="text-[#4a7a64] text-[9px] font-bold tracking-widest uppercase font-body">Match Rating</p>
        </div>
      </div>

      {/* Name */}
      <h3 className="font-body font-bold text-[17px] text-[#e8f5f0] mb-3">{disease.name}</h3>

      {/* Symptoms */}
      <ul className="mb-5 space-y-1">
        {disease.symptoms.map(s => (
          <li key={s} className="flex items-center gap-2 text-[13px] text-[#7aad96] font-body">
            <span className="text-[#2effc0] text-xs">•</span> {s}
          </li>
        ))}
      </ul>

      {/* Progress bar */}
      <div className="h-[3px] rounded-full bg-[#1a3328]">
        <div
          className="h-full rounded-full bg-[#2effc0] transition-all duration-500"
          style={{ width: `${disease.pct}%` }}
        />
      </div>

      {/* View details — appears on hover */}
      <button
        onClick={() => navigate(`/disease/${disease.id}`, { state: { disease } })}
        className="
          absolute bottom-5 right-5
          opacity-0 group-hover:opacity-100
          px-3.5 py-1.5 rounded-lg bg-[#2effc0] text-[#071210] text-xs font-bold font-body
          transition-opacity duration-200
        "
      >
        View Details →
      </button>
    </div>
  )
}
