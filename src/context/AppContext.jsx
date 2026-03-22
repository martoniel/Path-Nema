import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [loggedIn, setLoggedIn]       = useState(false)
  const [user, setUser]               = useState(null)
  const [searchCount, setSearchCount] = useState(0)

  const login = (userData) => {
    setLoggedIn(true)
    setUser(userData || { name: 'Dr. Sam Momoh', role: 'Ophthalmologist' })
  }

  const logout = () => {
    setLoggedIn(false)
    setUser(null)
  }

  const incrementSearch = () => setSearchCount(c => c + 1)

  return (
    <AppContext.Provider value={{ loggedIn, user, login, logout, searchCount, incrementSearch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
