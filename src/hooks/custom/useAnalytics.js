import { useState } from 'react'

export default function useAnalytics(data) {
  const [action, setAction] = useState(data.action || 'navigationAction')
  const [value, setValue] = useState(data.value || 'no-analytics')
  return { action, value }
}
