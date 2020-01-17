import React, { useImperativeHandle, useRef, forwardRef } from 'react'

function FancyInput(props, ref) {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }))
  return <input ref={inputRef} {...props} />
}

FancyInput = forwardRef(FancyInput)

// useImperativeHandle customizes the instance value that is exposed to parent components when using ref. As always, imperative code using refs should be avoided in most cases. useImperativeHandle should be used with forwardRef:

export default function ImperativeHooks() {
  return (
    <div>
      <div>useImperativeHandle </div>
      <hr />
      useImperativeHandle customizes the instance value that is exposed to
      parent components when using ref. As always, imperative code using refs
      should be avoided in most cases. useImperativeHandle should be used with
      forwardRef:
      {/* <FancyInput /> */}
    </div>
  )
}
