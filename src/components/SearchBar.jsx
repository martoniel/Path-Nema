import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { Search } from 'lucide-react'

export default function SearchBar({ onGate }) {
  const [query, setQuery] = useState('')
  const { loggedIn, searchCount, incrementSearch } = useApp()
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!query.trim()) return

    if (!loggedIn && searchCount >= 2) {
      onGate?.()
      return
    }

    incrementSearch()
    navigate(`/results?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <div className="flex items-center w-full max-w-[520px] rounded-xl overflow-hidden border border-[#1a3328] bg-[#0f2318] focus-within:border-[#1aad82] focus-within:shadow-[0_0_0_3px_rgba(46,255,192,0.12)] transition-all duration-200">
      <Search size={18} className="ml-4 mr-2 text-[#4a7a64] flex-shrink-0" strokeWidth={2} />
      <input
        className="flex-1 py-3.5 bg-transparent border-none outline-none text-[#e8f5f0] text-sm placeholder-[#4a7a64] font-body"
        placeholder="Describe what you see..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-3.5 bg-[#2effc0] text-[#071210] text-sm font-bold font-body hover:opacity-85 transition-opacity flex-shrink-0"
      >
        Submit
      </button>
    </div>
  )
}
