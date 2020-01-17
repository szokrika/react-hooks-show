import React, { useReducer } from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    name: 'light'
  },
  dark: {
    foreground: '#ffffff',
    background: '#000',
    name: 'dark'
  }
}

const initialState = {
  theme: themes.light
}

export const ThemeContext = React.createContext(initialState)

export const ThemeContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'setTheme':
        return {
          theme: themes[action.payload]
        }
      case 'resetTheme':
        return {
          theme: null
        }
      default:
        return initialState
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}
