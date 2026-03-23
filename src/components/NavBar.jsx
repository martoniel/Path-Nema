import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'

const RESOURCES = [
  { label: 'Clinical Case Studies', slug: 'clinical-case-studies' },
  { label: 'Academic Papers',       slug: 'academic-papers'       },
  { label: 'Learning Modules',      slug: 'learning-modules'      },
  { label: 'API Documentation',     slug: 'api-documentation'     },
]

export default function NavBar() {
  const { loggedIn, user, logout } = useApp()
  const location = useLocation()
  const navigate  = useNavigate()
  const path      = location.pathname

  const [open,          setOpen]          = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  const close = () => { setOpen(false); setResourcesOpen(false) }

  // ── Logo ──
  const Logo = () => (
    <Link to="/" onClick={close} className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg bg-[rgba(46,255,192,0.12)] border border-[#1aad82] flex items-center justify-center text-base">👁</div>
      <span className="font-body font-semibold text-white text-[15px]">
        Path<span className="text-[#2effc0]">Nema</span>
      </span>
    </Link>
  )

  // ── Hamburger button ──
  const HamburgerBtn = () => (
    <button onClick={() => setOpen(!open)}
      className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[#1a3328] bg-[#0f2318] text-[#7aad96] hover:border-[#1aad82] hover:text-[#2effc0] transition-colors">
      {open ? <X size={18} /> : <Menu size={18} />}
    </button>
  )

  // ── Results page nav ──
  if (path.startsWith('/results')) {
    const navLinks = ['Home', 'Diagnosis', 'History', 'Settings']
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-4 md:px-10 bg-[#0a1a14]/90 backdrop-blur-md border-b border-[#1a3328]">
        <Logo />
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(l => (
            <button key={l}
              className={`font-body text-sm font-medium transition-colors duration-200
                ${l === 'Diagnosis' ? 'text-[#2effc0] border-b border-[#2effc0] pb-0.5' : 'text-[#7aad96] hover:text-[#e8f5f0]'}`}>
              {l}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4a7a64] text-sm">🔍</span>
            <input className="bg-[#0f2318] border border-[#1a3328] rounded-lg pl-9 pr-3 py-2 text-sm text-[#e8f5f0] placeholder-[#4a7a64] outline-none focus:border-[#1aad82] w-48 font-body"
              placeholder="Search records..." />
          </div>
          {loggedIn && user && (
            <div className="flex items-center gap-2.5 pl-3 pr-1 py-1 rounded-full border border-[#1a3328] bg-[#0f2318]">
              <div className="text-right hidden md:block">
                <p className="text-white text-[13px] font-semibold leading-tight font-body">{user.name}</p>
                <p className="text-[#7aad96] text-[11px] font-body">{user.role}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a5c42] to-[#0a2e22] flex items-center justify-center text-sm">👩‍⚕️</div>
            </div>
          )}
          <HamburgerBtn />
        </div>
      </nav>
    )
  }

  // ── Detail page nav ──
  if (path.startsWith('/disease')) {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-4 md:px-10 bg-[#0a1a14]/90 backdrop-blur-md border-b border-[#1a3328]">
          <Logo />

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-2">
            {loggedIn ? (
              <>
                {/* Resources dropdown desktop */}
                <div className="relative">
                  <button onClick={() => setResourcesOpen(!resourcesOpen)}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg border border-[#1a3328] text-[#7aad96] text-sm font-medium font-body hover:border-[#1aad82] hover:text-[#2effc0] transition-colors">
                    Resources {resourcesOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>
                  {resourcesOpen && (
                    <div className="absolute right-0 top-[42px] bg-[#0f2318] border border-[#1a3328] rounded-xl p-2 w-[200px] shadow-xl z-50">
                      {RESOURCES.map(r => (
                        <Link key={r.slug} to={`/resources/${r.slug}`} onClick={() => setResourcesOpen(false)}
                          className="block px-3 py-2.5 rounded-lg font-body text-[13px] text-[#7aad96] hover:text-[#2effc0] hover:bg-[#0d1e1a] transition-colors">
                          {r.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <button onClick={() => navigate('/results')}
                  className="px-4 py-2 rounded-lg border border-[#1a3328] text-[#7aad96] text-sm font-medium font-body hover:border-[#1aad82] hover:text-[#2effc0] transition-colors">
                  History
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
          <HamburgerBtn />
        </nav>

        {/* Mobile dropdown — detail page */}
        {open && (
          <div className="fixed top-[60px] left-0 right-0 z-40 bg-[#0a1a14]/98 backdrop-blur-md border-b border-[#1a3328] px-6 py-5 flex flex-col gap-3 md:hidden">
            {loggedIn ? (
              <>
                {/* Resources with sub-items */}
                <div>
                  <button onClick={() => setResourcesOpen(!resourcesOpen)}
                    className="w-full flex items-center justify-between font-body text-sm font-medium text-[#7aad96] hover:text-[#2effc0] transition-colors py-2.5 border-b border-[#1a3328]">
                    Resources
                    {resourcesOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>
                  {resourcesOpen && (
                    <div className="mt-2 pl-3 flex flex-col gap-1">
                      {RESOURCES.map(r => (
                        <Link key={r.slug} to={`/resources/${r.slug}`} onClick={close}
                          className="block font-body text-[13px] text-[#4a7a64] hover:text-[#2effc0] py-2 transition-colors">
                          → {r.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <button onClick={() => { navigate('/results'); close() }}
                  className="text-left font-body text-sm font-medium text-[#7aad96] hover:text-[#2effc0] transition-colors py-2.5 border-b border-[#1a3328]">
                  History
                </button>
                <button onClick={() => { navigate('/results'); close() }}
                  className="text-left font-body text-sm font-medium text-[#7aad96] hover:text-[#2effc0] transition-colors py-2.5 border-b border-[#1a3328]">
                  Settings
                </button>
                <button onClick={() => { logout(); close() }}
                  className="w-full py-3 rounded-xl border border-[#1a3328] text-[#7aad96] font-medium text-sm font-body mt-1">
                  Logout
                </button>
              </>
            ) : (
              <>
                <p className="font-body text-[11px] text-[#4a7a64] uppercase tracking-widest font-bold">Get full access</p>
                <Link to="/auth?tab=login" onClick={close}
                  className="w-full py-3 rounded-xl border border-[#1a3328] text-[#7aad96] font-medium text-sm font-body text-center block">
                  Login
                </Link>
                <Link to="/auth?tab=signup" onClick={close}
                  className="w-full py-3 rounded-xl bg-[#2effc0] text-[#071210] font-bold text-sm font-body text-center block">
                  Sign up — It's Free
                </Link>
              </>
            )}
          </div>
        )}
      </>
    )
  }

  // ── Default / Landing nav ──
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-4 md:px-10 bg-[#0a1a14]/85 backdrop-blur-md border-b border-[#1a3328]">
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          <button className="px-4 py-1.5 text-sm font-medium text-[#7aad96] hover:text-[#e8f5f0] transition-all font-body">Resources</button>
          <button className="px-4 py-1.5 text-sm font-medium text-[#7aad96] hover:text-[#e8f5f0] transition-all font-body">Pricing</button>
          {loggedIn ? (
            <>
              <button onClick={() => navigate('/results')}
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
        <HamburgerBtn />
      </nav>

      {/* Mobile dropdown — landing */}
      {open && (
        <div className="fixed top-[60px] left-0 right-0 z-40 bg-[#0a1a14]/98 backdrop-blur-md border-b border-[#1a3328] px-6 py-5 flex flex-col gap-3 md:hidden">
          <button className="text-left font-body text-sm font-medium text-[#7aad96] hover:text-[#2effc0] transition-colors py-2.5 border-b border-[#1a3328]">
            Resources
          </button>
          <button className="text-left font-body text-sm font-medium text-[#7aad96] hover:text-[#2effc0] transition-colors py-2.5 border-b border-[#1a3328]">
            Pricing
          </button>
          {loggedIn ? (
            <>
              <button onClick={() => { navigate('/results'); close() }}
                className="w-full py-3 rounded-xl bg-[#2effc0] text-[#071210] font-bold text-sm font-body mt-1">
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
                className="w-full py-3 rounded-xl border border-[#1a3328] text-[#7aad96] font-medium text-sm font-body text-center block mt-1">
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
