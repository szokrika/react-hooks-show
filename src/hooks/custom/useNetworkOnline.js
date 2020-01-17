import { useState, useEffect, useDebugValue } from 'react'

export default function useNetworkOnline() {
  const [online, setOnline] = useState(navigator.onLine)

  const resolver = value => setOnline(value)
  useEffect(() => {
    window.addEventListener('offline', () => {
      resolver(false)
    })

    window.addEventListener('online', () => {
      resolver(true)
    })

    return () => {
      window.removeEventListener('offline', () => {
        resolver(null)
      })
      window.removeEventListener('online', () => {
        resolver(null)
      })
    }
  })
  useDebugValue(online ? 'You are online' : 'You are offline')
  return { online }
}
