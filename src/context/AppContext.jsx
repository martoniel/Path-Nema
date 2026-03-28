import { createContext, useContext, useState, useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [loggedIn,    setLoggedIn]    = useState(false)
  const [user,        setUser]        = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [searchCount, setSearchCount] = useState(0)

  // ── Listen to Firebase auth state ──
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setLoggedIn(true)
        setUser({
          name:  firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
          email: firebaseUser.email,
          photo: firebaseUser.photoURL,
          role:  'Clinician',
          uid:   firebaseUser.uid,
        })
      } else {
        setLoggedIn(false)
        setUser(null)
      }
      setAuthLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const logout = async () => {
    await signOut(auth)
    setLoggedIn(false)
    setUser(null)
  }

  const incrementSearch = () => setSearchCount(c => c + 1)

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0a1a14] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-[#2effc0] border-t-transparent animate-spin" />
          <p className="font-body text-[#4a7a64] text-sm">Loading PathNema...</p>
        </div>
      </div>
    )
  }

  return (
    <AppContext.Provider value={{ loggedIn, user, logout, searchCount, incrementSearch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
