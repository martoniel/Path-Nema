import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { Menu, X } from 'lucide-react'

export default function NavBar() {
  const { loggedIn, user, logout } = useApp()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const Logo = () => (
    <Link to="/" onClick={close} className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg bg-[rgba(46,255,192,0.12)] border border-[#1aad82] flex items-center justify-center text-base">👁</div>
      <span className="font-body font-semibold text-white text-[15px]">
        Path<span className="text-[#2effc0]">Nema</span>
      </span>
    </Link>
  )

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-4 md:px-10 bg-[#0a1a14]/90 backdrop-blur-md border-b border-[#1a3328]">
        <Logo />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {loggedIn ? (
            <>
              {user && (
                <div className="flex items-center gap-2 pl-3 pr-1 py-1 rounded-full border border-[#1a3328] bg-[#0f2318] mr-2">
                  <div className="text-right">
                    <p className="text-white text-[13px] font-semibold leading-tight font-body">{user.name}</p>
                    <p className="text-[#7aad96] text-[11px] font-body">{user.role}</p>
                  </div>
                  {user.photo ? (
                    <img src={user.photo} alt={user.name} className="w-8 h-8 rounded-full object-cover border border-[#1aad82]" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a5c42] to-[#0a2e22] flex items-center justify-center text-sm font-bold text-[#2effc0]">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
              )}
              <button onClick={() => navigate('/dashboard')}
                className="px-5 py-2 rounded-lg bg-[#2effc0] text-[#071210] text-sm font-bold font-body hover:opacity-85 transition-opacity">
                Dashboard
              </button>
              <button onClick={logout}
                className="px-4 py-2 rounded-lg border border-[#1a3328] text-[#7aad96] text-sm font-medium font-body hover:border-[#1aad82] hover:text-[#2effc0] transition-colors">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/auth?tab=login"
                className="px-4 py-2 rounded-lg border border-[#1a3328] text-[#7aad96] text-sm font-medium font-body hover:border-[#1aad82] hover:text-[#2effc0] transition-colors">
                Login
              </Link>
              <Link to="/auth?tab=signup"
                className="px-5 py-2 rounded-lg bg-[#2effc0] text-[#071210] text-sm font-bold font-body hover:opacity-85 transition-opacity">
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[#1a3328] bg-[#0f2318] text-[#7aad96] hover:border-[#1aad82] hover:text-[#2effc0] transition-colors">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="fixed top-[60px] left-0 right-0 z-40 bg-[#0a1a14]/98 backdrop-blur-md border-b border-[#1a3328] px-6 py-5 flex flex-col gap-3 md:hidden">
          {loggedIn ? (
            <>
              <button onClick={() => { navigate('/dashboard'); close() }}
                className="w-full py-3 rounded-xl bg-[#2effc0] text-[#071210] font-bold text-sm font-body">
                Dashboard
              </button>
              <button onClick={() => { logout(); close() }}
                className="w-full py-3 rounded-xl border border-[#1a3328] text-[#7aad96] font-medium text-sm font-body">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/auth?tab=login" onClick={close}
                className="w-full py-3 rounded-xl border border-[#1a3328] text-[#7aad96] font-medium text-sm font-body text-center block">
                Login
              </Link>
              <Link to="/auth?tab=signup" onClick={close}
                className="w-full py-3 rounded-xl bg-[#2effc0] text-[#071210] font-bold text-sm font-body text-center block">
                Sign up
              </Link>
            </>
          )}
        </div>
      )}
    </>
  )
}
