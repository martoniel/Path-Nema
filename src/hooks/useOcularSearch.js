import { useState, useCallback } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export function useOcularSearch() {
  const [results,  setResults]  = useState(null)
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState(null)

  const search = useCallback(async (query, cachedData = null) => {
    if (!query?.trim()) return

    if (cachedData) {
      setResults(cachedData)
      setLoading(false)
      setError(null)
      return
    }

    setLoading(true)
    setError(null)
    setResults(null)

    try {
      const response = await fetch(`${API_URL}/api/search`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ query: query.trim() }),
      })

      if (!response.ok) {
        const errData = await response.json()
        throw new Error(errData.error || 'Search failed')
      }

      const data = await response.json()
      setResults(data)

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  const reset = useCallback(() => {
    setResults(null)
    setError(null)
    setLoading(false)
  }, [])

  return { results, loading, error, search, reset }
}