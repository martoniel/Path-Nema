import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar      from './components/NavBar'
import LandingPage from './pages/LandingPage'
import AuthPage    from './pages/AuthPage'
import ResultsPage from './pages/ResultsPage'
import DetailPage  from './pages/DetailPage'
import InfoPage    from './pages/InfoPage'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1a14]">
      <NavBar />
      <Routes>
        <Route path="/"                element={<LandingPage />} />
        <Route path="/auth"            element={<AuthPage />}    />
        <Route path="/results"         element={<ResultsPage />} />
        <Route path="/disease/:id"     element={<DetailPage />}  />
        <Route path="/resources/:slug" element={<InfoPage />}    />
        <Route path="/legal/:slug"     element={<InfoPage />}    />
        <Route path="*"                element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}