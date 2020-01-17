/* The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.

Prefer the standard useEffect when possible to avoid blocking visual updates.
*/

import React, { useLayoutEffect, useEffect, useState } from 'react'

export default function LayoutEffectHooks() {
  const [title, setTitle] = useState('')
  useEffect(() => {
    // this is async
    // console.log('---------- Effect  ----------->')
    setTitle('updated by useEffect')
  }, [title])
  useLayoutEffect(() => {
    // this is sync
    // console.log('---------- Layout Effect  ----------->')
    setTitle('updated by useLayoutEffect')
  }, [title])

  // The useLayoutEffect function is triggered synchronously, before the DOM mutations are painted. However, the useEffect function is called after the DOM mutations are painted.

  return (
    <div>
      <div>useLayoutEffect </div>
      <hr />
      {title}
    </div>
  )
}
