import React, { useState, useRef, useEffect } from 'react'
import useElementSize from '../hooks/custom/useElementSize'

// Essentially, useRef is like a “box” that can hold a mutable value in its .current property. Mutating .current does not trigger a rerender

export default function RefHooks() {
  const [value, setValue] = useState('test value')
  const [rect, ref] = useElementSize()
  const refInput = useRef()

  useEffect(() => {
    refInput.current.focus()
  }, [])

  const submit = e => {
    e.preventDefault()
    alert(value)
    setValue('')
    refInput.current.focus()
  }
  return (
    <div>
      <div ref={ref}>
        useRef
        {rect !== null && (
          <span> - this header is {Math.round(rect.height)}px tall</span>
        )}
      </div>
      <hr />
      <form onSubmit={submit}>
        <input
          ref={refInput}
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="btn" type="submit">
          Send and clear
        </button>
      </form>
    </div>
  )
}
