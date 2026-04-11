import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth'
import { auth, googleProvider } from '../firebase'
import { useApp } from '../context/AppContext'
import { Eye, EyeOff, Lock, Mail, User, Briefcase } from 'lucide-react'

function InputField({ label, icon: Icon, type = 'text', placeholder, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType  = isPassword ? (showPassword ? 'text' : 'password') : type

  return (
    <div className="mb-4">
      {label && (
        <label className="block font-body text-[11px] font-semibold tracking-wider uppercase text-[#9bb8aa] mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5a8a74] flex items-center">
            <Icon size={15} strokeWidth={1.5} />
          </span>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="
            w-full pl-10 pr-10 py-3 rounded-lg
            bg-[#0d1e1a]/80 border border-[#1a3328] outline-none
            text-[#e8f5f0] text-sm font-body placeholder-[#4a7a64]
            focus:border-[#2effc0] focus:shadow-[0_0_0_2px_rgba(46,255,192,0.12)]
            transition-all duration-200
          "
        />
        {isPassword && (
          <button type="button" onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#4a7a64] hover:text-[#2effc0] transition-colors">
            {showPassword ? <EyeOff size={14} strokeWidth={1.5} /> : <Eye size={14} strokeWidth={1.5} />}
          </button>
        )}
      </div>
    </div>
  )
}

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.7 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-8 20-20 0-1.3-.1-2.7-.4-4z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7l-6.6 4.9C9.7 39.6 16.3 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.8l6.2 5.2C41 35.8 44 30.3 44 24c0-1.3-.1-2.7-.4-4z"/>
  </svg>
)

export default function AuthPage() {
  const [searchParams]  = useSearchParams()
  const initialTab      = searchParams.get('tab') === 'login' ? 'login' : 'signup'
  const [tab, setTab]   = useState(initialTab)
  const navigate        = useNavigate()
  const { searchCount } = useApp()
  const isGated         = searchCount >= 2

  const [name,        setName]        = useState('')
  const [email,       setEmail]       = useState('')
  const [password,    setPassword]    = useState('')
  const [role,        setRole]        = useState('')
  const [keepLogged,  setKeepLogged]  = useState(false)
  const [error,       setError]       = useState('')
  const [success,     setSuccess]     = useState('')
  const [loading,     setLoading]     = useState(false)
  const [forgotMode,  setForgotMode]  = useState(false)
  const [resetEmail,  setResetEmail]  = useState('')

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
    if (!name.trim())        return setError('Please enter your full name.')
    if (!email.trim())       return setError('Please enter your email.')
    if (!password.trim())    return setError('Please enter a password.')
    if (password.length < 6) return setError('Password must be at least 6 characters.')
    setLoading(true); setError('')
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(cred.user, { displayName: name.trim() })
      redirectAfterAuth()
    } catch (err) {
      setError(err.message.replace('Firebase: ', '').replace(/\(auth.*\)\.?/, ''))
    } finally { setLoading(false) }
  }

  const handleLogin = async () => {
    if (!email.trim())    return setError('Please enter your email.')
    if (!password.trim()) return setError('Please enter a password.')
    setLoading(true); setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      redirectAfterAuth()
    } catch (err) {
      setError('Invalid email or password. Please try again.')
    } finally { setLoading(false) }
  }

  const handleGoogle = async () => {
    setLoading(true); setError('')
    try {
      await signInWithPopup(auth, googleProvider)
      redirectAfterAuth()
    } catch (err) {
      setError('Google sign-in failed. Please try again.')
    } finally { setLoading(false) }
  }

  const handleForgotPassword = async () => {
    if (!resetEmail.trim()) return setError('Please enter your email address.')
    setLoading(true); setError(''); setSuccess('')
    try {
      await sendPasswordResetEmail(auth, resetEmail.trim())
      setSuccess('Password reset email sent! Check your inbox.')
    } catch (err) {
      setError('No account found with this email.')
    } finally { setLoading(false) }
  }

  const switchTab = (t) => { setTab(t); setError(''); setSuccess(''); setForgotMode(false) }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#071210] px-4 py-8">
      <div className="w-full max-w-[900px] rounded-2xl overflow-hidden flex shadow-[0_24px_80px_rgba(0,0,0,0.6)] border border-[#1a3328]">

        {/* ── LEFT — Image panel ── */}
        <div className="hidden md:flex flex-col justify-between w-[45%] relative overflow-hidden">
          {/* Eye image */}
          <img src="/03.png" alt="PathNema"
            className="absolute inset-0 w-full h-full object-cover opacity-70" />
          {/* Overlay gradient */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(10,26,20,0.85) 0%, rgba(7,18,16,0.6) 100%)' }} />
          {/* Content */}
          <div className="relative z-10 p-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-10">
                <div className="w-8 h-8 rounded-lg bg-[rgba(46,255,192,0.15)] border border-[#1aad82] flex items-center justify-center text-base">👁</div>
                <span className="font-body font-bold text-white text-[16px]">Path<span className="text-[#2effc0]">Nema</span></span>
              </div>
              <h2 className="text-white font-display leading-[1.15] mb-4"
                style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 800 }}>
                AI-Powered<br />Ocular<br />Pathology
              </h2>
              <p className="font-body text-[#7aad96] text-[13px] leading-relaxed max-w-[240px]">
                Diagnostic intelligence backed by Khurana's Comprehensive Ophthalmology, 7th Edition.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex">
                {['/images7.jpeg', '/images10.jpeg', '/images9.jpeg'].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-[#0a1a14] -mr-2 object-cover" />
                ))}
              </div>
              <span className="font-body text-[12px] text-[#7aad96] ml-3">100+ professionals</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT — Form panel ── */}
        <div className="flex-1 bg-[#0a1a14] p-8 md:p-10 flex flex-col justify-center">

          {/* Quota badge */}
          {isGated && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1aad82] text-[#2effc0] text-[10px] font-bold tracking-widest uppercase font-body mb-5 self-start">
              ⚠ Quota Reached
            </div>
          )}

          {/* Tabs */}
          {!forgotMode && (
            <div className="flex items-center gap-6 mb-7 border-b border-[#1a3328] pb-4">
              {['login', 'signup'].map(t => (
                <button key={t} onClick={() => switchTab(t)}
                  className={`font-body text-[15px] font-bold transition-all pb-1 ${
                    tab === t
                      ? 'text-white border-b-2 border-[#2effc0] -mb-[17px]'
                      : 'text-[#4a7a64] hover:text-[#7aad96]'
                  }`}>
                  {t === 'login' ? 'Sign In' : 'Sign Up'}
                </button>
              ))}
            </div>
          )}

          {/* Forgot password mode */}
          {forgotMode ? (
            <div>
              <button onClick={() => { setForgotMode(false); setError(''); setSuccess('') }}
                className="flex items-center gap-1 text-[#4a7a64] hover:text-[#2effc0] font-body text-[12px] mb-6 transition-colors">
                ← Back to Sign In
              </button>
              <h3 className="font-body font-bold text-white text-[20px] mb-1">Reset Password</h3>
              <p className="font-body text-[#4a7a64] text-[13px] mb-6">
                Enter your email and we'll send you a reset link.
              </p>
              {error && <div className="mb-4 px-4 py-3 rounded-lg bg-[rgba(224,80,80,0.1)] border border-[rgba(224,80,80,0.2)]"><p className="font-body text-[13px] text-[#ff6b6b]">{error}</p></div>}
              {success && <div className="mb-4 px-4 py-3 rounded-lg bg-[rgba(46,255,192,0.08)] border border-[rgba(46,255,192,0.2)]"><p className="font-body text-[13px] text-[#2effc0]">{success}</p></div>}
              <InputField icon={Mail} type="email" placeholder="Your email address"
                value={resetEmail} onChange={e => setResetEmail(e.target.value)} />
              <button onClick={handleForgotPassword} disabled={loading}
                className="w-full py-3.5 rounded-lg bg-[#2effc0] text-[#071210] font-bold text-[14px] font-body hover:opacity-88 transition-opacity disabled:opacity-60 mt-2">
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </div>
          ) : (
            <>
              {/* Error */}
              {error && <div className="mb-4 px-4 py-3 rounded-lg bg-[rgba(224,80,80,0.1)] border border-[rgba(224,80,80,0.2)]"><p className="font-body text-[13px] text-[#ff6b6b]">{error}</p></div>}

              {/* Google button */}
              <button onClick={handleGoogle} disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-3 rounded-lg border border-[#1a3328] bg-[#0d1e1a] text-[#e8f5f0] text-[13px] font-semibold font-body hover:border-[#2effc0] hover:bg-[#0f2318] transition-all mb-4 disabled:opacity-60">
                <GoogleIcon /> Continue with Google
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px bg-[#1a3328]" />
                <span className="font-body text-[11px] text-[#4a7a64] uppercase tracking-wider">or</span>
                <div className="flex-1 h-px bg-[#1a3328]" />
              </div>

              {/* Sign Up fields */}
              {tab === 'signup' && (
                <>
                  <InputField icon={User} placeholder="Full name e.g. Dr. Jane Wells"
                    value={name} onChange={e => setName(e.target.value)} />
                  <InputField icon={Mail} type="email" placeholder="Email address"
                    value={email} onChange={e => setEmail(e.target.value)} />
                  <InputField icon={Lock} type="password" placeholder="Password (min. 6 characters)"
                    value={password} onChange={e => setPassword(e.target.value)} />
                  <div className="mb-4 relative">
                    <Briefcase size={15} strokeWidth={1.5} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5a8a74]" />
                    <select value={role} onChange={e => setRole(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 rounded-lg bg-[#0d1e1a]/80 border border-[#1a3328] outline-none text-[#4a7a64] text-sm font-body cursor-pointer appearance-none focus:border-[#2effc0] transition-colors">
                      <option value="">Select your profession</option>
                      <option>Ophthalmologist</option>
                      <option>Optometrist</option>
                      <option>Medical Student</option>
                      <option>Pathologist</option>
                      <option>Researcher</option>
                    </select>
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#4a7a64] pointer-events-none text-xs">▾</span>
                  </div>
                  <button onClick={handleSignup} disabled={loading}
                    className="w-full py-3.5 rounded-lg bg-[#2effc0] text-[#071210] font-bold text-[14px] font-body hover:opacity-88 transition-opacity disabled:opacity-60">
                    {loading ? 'Creating account...' : 'Create Free Account'}
                  </button>
                  <p className="font-body text-center text-[12px] text-[#4a7a64] mt-4">
                    Already have an account?{' '}
                    <button onClick={() => switchTab('login')} className="text-[#2effc0] font-semibold hover:underline">Sign in</button>
                  </p>
                </>
              )}

              {/* Sign In fields */}
              {tab === 'login' && (
                <>
                  <InputField icon={Mail} type="email" placeholder="Email address"
                    value={email} onChange={e => setEmail(e.target.value)} />
                  <InputField icon={Lock} type="password" placeholder="Password"
                    value={password} onChange={e => setPassword(e.target.value)} />

                  {/* Keep logged in + Forgot password */}
                  <div className="flex items-center justify-between mb-5">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div onClick={() => setKeepLogged(!keepLogged)}
                        className={`w-4 h-4 rounded border flex items-center justify-center transition-all cursor-pointer ${
                          keepLogged ? 'bg-[#2effc0] border-[#2effc0]' : 'border-[#1a3328] bg-[#0d1e1a]'
                        }`}>
                        {keepLogged && <span className="text-[#071210] text-[10px] font-bold leading-none">✓</span>}
                      </div>
                      <span className="font-body text-[12px] text-[#4a7a64]">Keep me logged in</span>
                    </label>
                    <button onClick={() => { setForgotMode(true); setError(''); setResetEmail(email) }}
                      className="font-body text-[12px] text-[#2effc0] hover:underline transition-colors">
                      Forgot password?
                    </button>
                  </div>

                  <button onClick={handleLogin} disabled={loading}
                    className="w-full py-3.5 rounded-lg bg-[#2effc0] text-[#071210] font-bold text-[14px] font-body hover:opacity-88 transition-opacity disabled:opacity-60">
                    {loading ? 'Signing in...' : 'Sign In'}
                  </button>
                  <p className="font-body text-center text-[12px] text-[#4a7a64] mt-4">
                    Don't have an account?{' '}
                    <button onClick={() => switchTab('signup')} className="text-[#2effc0] font-semibold hover:underline">Sign up free</button>
                  </p>
                </>
              )}

              {/* Footer links */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <span className="font-body text-[11px] text-[#2a4a3a] hover:text-[#4a7a64] cursor-pointer transition-colors">Privacy</span>
                <span className="text-[#1a3328]">·</span>
                <span className="font-body text-[11px] text-[#2a4a3a] hover:text-[#4a7a64] cursor-pointer transition-colors">Terms</span>
                <span className="text-[#1a3328]">·</span>
                <span className="font-body text-[11px] text-[#2a4a3a] hover:text-[#4a7a64] cursor-pointer transition-colors">About</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
