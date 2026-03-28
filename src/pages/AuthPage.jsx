import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import { auth, googleProvider } from '../firebase'
import { useApp } from '../context/AppContext'
import { Eye, EyeOff, Lock } from 'lucide-react'

function InputField({ label, icon, type = 'text', placeholder, value, onChange }) {
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
          value={value}
          onChange={onChange}
          className="
            w-full pl-10 pr-10 py-3.5 rounded-xl
            bg-[#0d1e1a] border border-[#1a3328] outline-none
            text-[#e8f5f0] text-sm font-body placeholder-[#4a7a64]
            focus:border-[#1aad82] focus:shadow-[0_0_0_3px_rgba(46,255,192,0.1)]
            transition-all duration-200
          "
        />
        {isPassword && (
          <button type="button" onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#4a7a64] hover:text-[#2effc0] transition-colors">
            {showPassword ? <EyeOff size={15} strokeWidth={1.5} /> : <Eye size={15} strokeWidth={1.5} />}
          </button>
        )}
      </div>
    </div>
  )
}

export default function AuthPage() {
  const [searchParams]  = useSearchParams()
  const initialTab      = searchParams.get('tab') || 'signup'
  const [tab, setTab]   = useState(initialTab)
  const navigate        = useNavigate()
  const { searchCount } = useApp()
  const isGated         = searchCount >= 2

  const [name,     setName]     = useState('')
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [role,     setRole]     = useState('')
  const [error,    setError]    = useState('')
  const [loading,  setLoading]  = useState(false)

  const lastQuery = sessionStorage.getItem(
    Object.keys(sessionStorage).find(k => k.startsWith('pathnema_results_')) || ''
  )

  const redirectAfterAuth = () => {
    const cachedKeys = Object.keys(sessionStorage).filter(k => k.startsWith('pathnema_results_'))
    if (cachedKeys.length > 0) {
      const lastKey   = cachedKeys[cachedKeys.length - 1]
      const lastQuery = lastKey.replace('pathnema_results_', '')
      navigate(`/results?q=${encodeURIComponent(lastQuery)}`)
    } else {
      navigate('/')
    }
  }

  const handleSignup = async () => {
    if (!name.trim())     return setError('Please enter your full name.')
    if (!email.trim())    return setError('Please enter your email.')
    if (!password.trim()) return setError('Please enter a password.')
    if (password.length < 6) return setError('Password must be at least 6 characters.')

    setLoading(true)
    setError('')
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(cred.user, { displayName: name.trim() })
      redirectAfterAuth()
    } catch (err) {
      setError(err.message.replace('Firebase: ', '').replace(/\(auth.*\)\.?/, ''))
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async () => {
    if (!email.trim())    return setError('Please enter your email.')
    if (!password.trim()) return setError('Please enter a password.')

    setLoading(true)
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      redirectAfterAuth()
    } catch (err) {
      setError('Invalid email or password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = async () => {
    setLoading(true)
    setError('')
    try {
      await signInWithPopup(auth, googleProvider)
      redirectAfterAuth()
    } catch (err) {
      setError('Google sign-in failed. Please try again.')
    } finally {
      setLoading(false)
    }
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
        <p className="font-body text-[#7aad96] text-sm mb-6">
          {isGated
            ? "You've used your 2 free searches. Create a free account to continue."
            : 'Sign in or create your PathNema account.'}
        </p>

        {/* Google Sign-in */}
        <button onClick={handleGoogle} disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl border border-[#1a3328] bg-[#0d1e1a] text-[#e8f5f0] text-sm font-semibold font-body hover:border-[#1aad82] transition-colors mb-5 disabled:opacity-60">
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.7 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-8 20-20 0-1.3-.1-2.7-.4-4z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7l-6.6 4.9C9.7 39.6 16.3 44 24 44z"/>
            <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.8l6.2 5.2C41 35.8 44 30.3 44 24c0-1.3-.1-2.7-.4-4z"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-[#1a3328]" />
          <span className="font-body text-[11px] text-[#4a7a64] uppercase tracking-wider">or</span>
          <div className="flex-1 h-px bg-[#1a3328]" />
        </div>

        {/* Tab toggle */}
        <div className="grid grid-cols-2 bg-[#0d1e1a] border border-[#1a3328] rounded-xl p-1 mb-6">
          {['signup', 'login'].map(t => (
            <button key={t} onClick={() => { setTab(t); setError('') }}
              className={`py-2.5 rounded-lg font-body text-sm font-semibold transition-all duration-200
                ${tab === t ? 'bg-[#0f2318] text-white shadow-sm' : 'text-[#7aad96] hover:text-[#e8f5f0]'}`}>
              {t === 'signup' ? 'Sign Up' : 'Login'}
            </button>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-[rgba(224,80,80,0.1)] border border-[rgba(224,80,80,0.2)]">
            <p className="font-body text-[13px] text-[#ff6b6b]">{error}</p>
          </div>
        )}

        {/* Sign Up form */}
        {tab === 'signup' && (
          <>
            <InputField label="Full Name" icon="👤" placeholder="Dr. Jane Wells"
              value={name} onChange={e => setName(e.target.value)} />
            <InputField label="Email Address" icon="✉" type="email" placeholder="jane@gmail.com"
              value={email} onChange={e => setEmail(e.target.value)} />
            <InputField label="Password" icon={<Lock size={15} strokeWidth={1.5} className="text-[#2effc0]" />}
              type="password" placeholder="Min. 6 characters"
              value={password} onChange={e => setPassword(e.target.value)} />

            <div className="mb-[18px]">
              <label className="block font-body text-[11px] font-bold tracking-widest uppercase text-[#7aad96] mb-2">Profession</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4a7a64] text-[15px]">💼</span>
                <select value={role} onChange={e => setRole(e.target.value)}
                  className="w-full pl-10 pr-8 py-3.5 rounded-xl bg-[#0d1e1a] border border-[#1a3328] outline-none text-[#4a7a64] text-sm font-body cursor-pointer appearance-none focus:border-[#1aad82] transition-colors">
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

            <button onClick={handleSignup} disabled={loading}
              className="w-full py-4 rounded-xl bg-[#2effc0] text-[#071210] font-bold text-[15px] font-body hover:opacity-88 transition-opacity mt-2 disabled:opacity-60">
              {loading ? 'Creating account...' : 'Create Free Account'}
            </button>
            <p className="font-body text-center text-sm text-[#7aad96] mt-5">
              Already have an account?{' '}
              <button onClick={() => { setTab('login'); setError('') }} className="text-[#2effc0] font-semibold hover:underline">
                Log in here
              </button>
            </p>
          </>
        )}

        {/* Login form */}
        {tab === 'login' && (
          <>
            <InputField label="Email Address" icon="✉" type="email" placeholder="jane@gmail.com"
              value={email} onChange={e => setEmail(e.target.value)} />
            <InputField label="Password" icon={<Lock size={15} strokeWidth={1.5} className="text-[#2effc0]" />}
              type="password" placeholder="Your password"
              value={password} onChange={e => setPassword(e.target.value)} />

            <button onClick={handleLogin} disabled={loading}
              className="w-full py-4 rounded-xl bg-[#2effc0] text-[#071210] font-bold text-[15px] font-body hover:opacity-88 transition-opacity mt-2 disabled:opacity-60">
              {loading ? 'Logging in...' : 'Log In'}
            </button>
            <p className="font-body text-center text-sm text-[#7aad96] mt-5">
              Don't have an account?{' '}
              <button onClick={() => { setTab('signup'); setError('') }} className="text-[#2effc0] font-semibold hover:underline">
                Sign up free
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
