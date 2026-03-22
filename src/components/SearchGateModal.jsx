import { useNavigate } from 'react-router-dom'

export default function SearchGateModal({ onClose }) {
  const navigate = useNavigate()

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#071210]/85 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        className="bg-[#0f2318] border border-[#1a3328] rounded-2xl p-10 max-w-[420px] w-full text-center"
        onClick={e => e.stopPropagation()}
      >
        <div className="text-5xl mb-5">🔒</div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1aad82] text-[#2effc0] text-[10px] font-bold tracking-widest uppercase font-body mb-5">
          ⚠ Quota Reached
        </div>

        <h2 className="font-display text-2xl text-white mb-3">Continue your research</h2>
        <p className="font-body text-sm text-[#7aad96] mb-8 leading-relaxed">
          You've used your 2 free searches. Create a free account to continue exploring our clinical database.
        </p>

        <button
          onClick={() => { onClose(); navigate('/auth?tab=signup') }}
          className="w-full py-4 rounded-xl bg-[#2effc0] text-[#071210] font-bold text-[15px] font-body hover:opacity-88 transition-opacity mb-3"
        >
          Create Free Account
        </button>

        <button
          onClick={() => { onClose(); navigate('/auth?tab=login') }}
          className="w-full py-3.5 rounded-xl border border-[#1a3328] text-[#7aad96] text-sm font-medium font-body hover:border-[#1aad82] hover:text-[#2effc0] transition-colors"
        >
          Already have an account? Log in
        </button>
      </div>
    </div>
  )
}
