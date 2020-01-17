import { useState, useEffect, useDebugValue } from 'react'

export default function useBatteryStatus() {
  const [batteryLevel, setBatteryLevel] = useState()

  useEffect(() => {
    navigator.getBattery().then(battery => {
      setBatteryLevel(battery.level * 100)
      battery.addEventListener('levelchange', function() {
        setBatteryLevel(this.level * 100)
      })
    })
  }, [])

  useDebugValue(batteryLevel < 100 ? 'Running on battery' : 'Running on power')
  // Check devtools / hooks for the label
  return { batteryLevel }
}
