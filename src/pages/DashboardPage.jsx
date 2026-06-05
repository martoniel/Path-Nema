import { useNavigate } from 'react-router-dom'
import { Clock, Trash2 } from 'lucide-react'
import { getDiseaseIcon } from '../components/DiseaseCard'

export function getDiseaseHistory() {
  try { return JSON.parse(localStorage.getItem('disease_history') || '[]') } catch { return [] }
}

export function addDiseaseToHistory(disease) {
  const prev = getDiseaseHistory().filter(d => d.id !== disease.id)
  const next = [disease, ...prev].slice(0, 50)
  localStorage.setItem('disease_history', JSON.stringify(next))
}

export default function DashboardPage() {
  const navigate = useNavigate()
  const history  = getDiseaseHistory()

  const clearHistory = () => {
    localStorage.removeItem('disease_history')
    navigate(0) // reload page to reflect cleared state
  }

  return (
    <div className="min-h-screen pt-[60px]">
      <div className="max-w-[1100px] mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-body text-[11px] font-bold tracking-[2px] uppercase text-[#7aad96] mb-2">Dashboard</p>
            <h1 className="font-display text-white text-[30px] font-bold">Search History</h1>
          </div>
          {history.length > 0 && (
            <button onClick={clearHistory}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#1a3328] text-[#7aad96] text-sm font-body font-semibold hover:border-[#e05050] hover:text-[#e05050] transition-colors">
              <Trash2 size={14} /> Clear All
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <Clock size={36} strokeWidth={1.2} className="text-[#4a7a64] mb-4" />
            <h3 className="font-body font-semibold text-[#e8f5f0] mb-2">No history yet</h3>
            <p className="font-body text-sm text-[#7aad96]">Diseases you view will appear here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {history.map(disease => {
              const IconComp = getDiseaseIcon(disease.name)
              return (
                <div key={disease.id}
                  onClick={() => navigate(`/disease/${disease.id}`, { state: { disease } })}
                  className="bg-[#0f2318] border border-[#1a3328] rounded-2xl p-6 cursor-pointer hover:border-[#1aad82] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(46,255,192,0.08)] transition-all duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-[42px] h-[42px] rounded-xl bg-[rgba(46,255,192,0.1)] border border-[#1aad82] flex items-center justify-center">
                      <IconComp size={20} strokeWidth={1.5} className="text-[#2effc0]" />
                    </div>
                    <p className="text-[#2effc0] text-[24px] font-extrabold leading-none font-body">{disease.matchPct || disease.pct}%</p>
                  </div>
                  <h3 className="font-body font-bold text-[16px] text-[#e8f5f0] mb-2">{disease.name}</h3>
                  <p className="font-body text-[12px] text-[#7aad96] line-clamp-2 leading-relaxed">
                    {disease.classification || disease.overview || ''}
                  </p>
                  <div className="mt-4 h-[2px] rounded-full bg-[#1a3328]">
                    <div className="h-full rounded-full bg-[#2effc0]" style={{ width: `${disease.matchPct || disease.pct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
