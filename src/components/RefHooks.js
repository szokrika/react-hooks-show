import React, { useState, useRef, useEffect } from 'react'
import useElementSize from '../hooks/custom/useElementSize'

// Essentially, useRef is like a “box” that can hold a mutable value in its .current property. Mutating .current does not trigger a rerender

export default function RefHooks() {
  const [value, setValue] = useState('test value')
  const [list, setList] = useState([])
  const [rect, ref] = useElementSize()
  const refInput = useRef()
  const listId = useRef(0)

  useEffect(() => {
    refInput.current.focus()
  }, [])

  const submit = e => {
    e.preventDefault()
    if (!value) return
    listId.current = list.reduce((acc, item) => Math.max(acc, item.id), 0)
    setList([...list, { id: listId.current + 1, value }])
    setValue('')
    refInput.current.focus()
  }
  const remove = id => {
    console.log('---------- id ----------->', id)
    const newList = list.filter(item => item.id !== id)
    setList(newList)
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
          Save and clear
        </button>
        <ul>
          {list.map(l => (
            <li key={l.id}>
              {l.value} <button onClick={() => remove(l.id)}>remove</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  )
}
