import React, { useCallback } from 'react'

// similar to shouldComponentUpdate

export default function CallbackHooks({ a, b, increment }) {
  const returnMyValue = () => {
    // console.log('---------- function called with "A" ----------->', a)
    return b + a
  }
  // const valueBoundToMount = returnMyValue
  // const valueBoundtoA = returnMyValue
  const valueBoundToMount = useCallback(returnMyValue, [])
  const valueBoundtoA = useCallback(returnMyValue, [a])

  return (
    <div>
      <div>useCallback - Counter</div>
      <hr />
      <p>value bound to mount only: {valueBoundToMount()}</p>
      <p>value bound to A changing: {valueBoundtoA()}</p>
      <button className="btn" onClick={() => increment()}>
        Increment "A"
      </button>
    </div>
  )
}
