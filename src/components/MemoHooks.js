import React, { useMemo, useRef } from 'react'

export default function MemoHooks({ a = 1000, b = 1000 }) {
  const ref = useRef(0)
  const computeExpensiveValue = (a, b) => {
    console.log('---------- running ----------->')
    setTimeout(() => {
      ref.current = a * b
    }, 1000)
  }
  useMemo(() => computeExpensiveValue(a, b), [a, b])
  // computeExpensiveValue(a, b)
  return (
    <div>
      <div>useMemo </div>
      <hr />
      {ref.current}
    </div>
  )
}
