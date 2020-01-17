import React, { useReducer } from 'react'

//use reducer when you have a state that can have multiple scenarios
export default function ReducerHooks({ start }) {
  const initialState = { count: start || 0 }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      case 'reset':
        return { count: start || 0 }
      case 'zero':
        return { count: 0 }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div>
        useReducer - Counter <strong>{state.count}</strong>
      </div>
      <hr />
      <button
        title="set to 0"
        className="btn"
        onClick={() => dispatch({ type: 'zero' })}
      >
        0
      </button>
      <button
        title={`reset to ${start}`}
        className="btn"
        onClick={() => dispatch({ type: 'reset' })}
      >
        &#9851;
      </button>
      <button
        title="decrement"
        className="btn"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -
      </button>
      <button
        title="increment"
        className="btn"
        onClick={() => dispatch({ type: 'increment' })}
      >
        +
      </button>
    </div>
  )
}
