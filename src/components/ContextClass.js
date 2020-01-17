import React, { Component } from 'react'
import { ThemeContext } from './store'

export default class ContextClass extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {({ theme, dispatch }) => {
            return (
              <>
                <div
                  style={{
                    padding: 10,
                    background: theme.background,
                    color: theme.foreground
                  }}
                >
                  ContextClass
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
              </>
            )
          }}
        </ThemeContext.Consumer>
      </div>
    )
  }
}
