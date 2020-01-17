import React, { useContext } from 'react'
import { ThemeContext } from './store'
export default function ContextHooks() {
  const { theme, dispatch } = useContext(ThemeContext)

  return (
    <div>
      <div
        style={{
          padding: 10,
          background: theme.background,
          color: theme.foreground
        }}
      >
        ContextHooks
      </div>
      <hr />

      <select
        onChange={e =>
          e.target.value &&
          dispatch({ type: 'setTheme', payload: e.target.value })
        }
        value={theme.name}
      >
        <option value="">Choose a theme</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  )
}
