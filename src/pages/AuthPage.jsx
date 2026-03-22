import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { Eye, EyeOff, Lock } from 'lucide-react'

function InputField({ label, icon, type = 'text', placeholder }) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType  = isPassword ? (showPassword ? 'text' : 'password') : type

  return (
    <div className="mb-[18px]">
      <label className="block font-body text-[11px] font-bold tracking-widest uppercase text-[#7aad96] mb-2">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4a7a64] flex items-center">
          {icon}
        </span>
        <input
          type={inputType}
          placeholder={placeholder}
          className="
            w-full pl-10 pr-10 py-3.5 rounded-xl
            bg-[#0d1e1a] border border-[#1a3328] outline-none
            text-[#e8f5f0] text-sm font-body placeholder-[#4a7a64]
            focus:border-[#1aad82] focus:shadow-[0_0_0_3px_rgba(46,255,192,0.1)]
            transition-all duration-200
          "
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#4a7a64] hover:text-[#2effc0] transition-colors"
          >
            {showPassword ? <EyeOff size={15} strokeWidth={1.5} /> : <Eye size={15} strokeWidth={1.5} />}
          </button>
        )}
      </div>
    </div>
  )
}

export default function AuthPage() {
  const [searchParams] = useSearchParams()
  const initialTab = searchParams.get('tab') || 'signup'
  const [tab, setTab] = useState(initialTab)

  const navigate  = useNavigate()
  const { login, searchCount } = useApp()
  const isGated   = searchCount >= 2

  const handleAuth = () => {
    login({ name: 'Dr. Sam Momoh', role: 'Ophthalmologist' })
    navigate('/results?q=redness%2C+photophobia%2C+corneal+opacity')
  }

  return (
    <div className="min-h-screen pt-[60px] grid grid-cols-1 md:grid-cols-2 relative">
      <div className="dot-grid fixed inset-0 opacity-40 pointer-events-none z-0" />

      {/* ── LEFT ── */}
      <div className="relative z-10 flex flex-col justify-center px-14 py-16">
        <div className="inline-flex items-center gap-2 text-[#2effc0] text-[11px] font-bold tracking-[2px] uppercase font-body mb-7">
          <span>🛡</span> Medical Intelligence
        </div>

        <h1 className="text-white leading-[1.1] mb-4"
          style={{ fontSize: 'clamp(34px, 4vw, 52px)', fontWeight: 900 }}>
          Advanced<br />Pathology<br />Analysis<br />Platform.
        </h1>

        <p className="font-body text-[#7aad96] text-sm max-w-[360px] leading-relaxed">
          Join over 10,000 professionals using our AI-driven diagnostics tools for faster, more accurate results.
        </p>

        <div className="flex items-center gap-3 mt-12">
          <div className="flex">
            {['/images7.jpeg', '/images10.jpeg', '/images9.jpeg'].map((src, i) => (
              <img key={i} src={src} alt={`Researcher ${i + 1}`}
                className="w-9 h-9 rounded-full border-2 border-[#0a1a14] -mr-2.5 object-cover" />
            ))}
          </div>
          <span className="font-body text-[13px] text-[#7aad96] ml-4">Trusted by leading researchers</span>
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div className="relative z-10 flex flex-col justify-center px-14 py-16 bg-[#0f2318] border-l border-[#1a3328]">

        {isGated && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1aad82] text-[#2effc0] text-[10px] font-bold tracking-widest uppercase font-body mb-5 self-start">
            ⚠ Quota Reached
          </div>
        )}

        <h2 className="text-white text-[32px] mb-2">Continue your research</h2>
        <p className="font-body text-[#7aad96] text-sm mb-7">
          {isGated
            ? "You've used your 2 free searches. Create a free account to continue exploring our database."
            : 'Sign in or create your Path-Nema account.'}
        </p>

        {/* Tab toggle */}
        <div className="grid grid-cols-2 bg-[#0d1e1a] border border-[#1a3328] rounded-xl p-1 mb-7">
          {['signup', 'login'].map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`py-2.5 rounded-lg font-body text-sm font-semibold transition-all duration-200
                ${tab === t ? 'bg-[#0f2318] text-white shadow-sm' : 'text-[#7aad96] hover:text-[#e8f5f0]'}`}>
              {t === 'signup' ? 'Sign Up' : 'Login'}
            </button>
          ))}
        </div>

        {/* Sign Up */}
        {tab === 'signup' && (
          <>
            <InputField label="Full Name"     icon="👤" placeholder="Dr. Right Wells" />
            <InputField label="Email Address" icon="✉"  placeholder="Rwells@gmail.com" type="email" />
            <InputField
              label="Password"
              icon={<Lock size={15} strokeWidth={1.5} className="text-[#2effc0]" />}
              placeholder="••••••••"
              type="password"
            />

            <div className="mb-[18px]">
              <label className="block font-body text-[11px] font-bold tracking-widest uppercase text-[#7aad96] mb-2">
                Profession
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4a7a64] text-[15px]">💼</span>
                <select className="w-full pl-10 pr-8 py-3.5 rounded-xl bg-[#0d1e1a] border border-[#1a3328] outline-none text-[#4a7a64] text-sm font-body cursor-pointer appearance-none focus:border-[#1aad82] transition-colors">
                  <option value="">Select your role</option>
                  <option>Ophthalmologist</option>
                  <option>Optometrist</option>
                  <option>Medical Student</option>
                  <option>Pathologist</option>
                  <option>Researcher</option>
                </select>
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#4a7a64] pointer-events-none">⌄</span>
              </div>
            </div>

            <button onClick={handleAuth}
              className="w-full py-4 rounded-xl bg-[#2effc0] text-[#071210] font-bold text-[15px] font-body hover:opacity-88 transition-opacity mt-2">
              Create Free Account
            </button>
            <p className="font-body text-center text-sm text-[#7aad96] mt-5">
              Already have an account?{' '}
              <button onClick={() => setTab('login')} className="text-[#2effc0] font-semibold hover:underline">
                Log in here
              </button>
            </p>
          </>
        )}

        {/* Login */}
        {tab === 'login' && (
          <>
            <InputField label="Email Address" icon="✉"  placeholder="Rwells@gmail.com" type="email" />
            <InputField
              label="Password"
              icon={<Lock size={15} strokeWidth={1.5} className="text-[#2effc0]" />}
              placeholder="••••••••"
              type="password"
            />

            <button onClick={handleAuth}
              className="w-full py-4 rounded-xl bg-[#2effc0] text-[#071210] font-bold text-[15px] font-body hover:opacity-88 transition-opacity mt-2">
              Log In
            </button>
            <p className="font-body text-center text-sm text-[#7aad96] mt-5">
              Don't have an account?{' '}
              <button onClick={() => setTab('signup')} className="text-[#2effc0] font-semibold hover:underline">
                Sign up free
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
