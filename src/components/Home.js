import React from 'react'

export default function Home() {
  return (
    <main>
      <h1>Intro to React Hooks</h1>
      <h2>Why does it exist?</h2>
      <h3>History...</h3>
      <ol>
        <li>
          React.createClass() (function component that mimics the later ES6
          class)
        </li>
        <li>
          React Component ES6 class (status quo...?)
          <ul>
            <li>constructor (call super(props) every time...)</li>
            <li>side effects logic spread across multiple lifecycle methods</li>
            <li>binding methods (except class fields)</li>
            <li>component composition issues ()</li>
            <li>sharing non-visual logic (couples ui logic to a component)</li>
            <li>
              wrapper hell (multiple wrapping higher order components) - HOC = a
              component that takes a component as argument to share non ui
              specific logic
            </li>
          </ul>
        </li>
        <li>
          React Hooks
          <ul>
            <li>use state in functional components</li>
            <li>
              replace lifecycle methods with code composition in useEffect
            </li>
            <li>able to share non visual logic with custom hooks</li>
            <hr />
            <li>
              Do not block the render path, define hooks on the component top
              level, not inside if or other blocks
            </li>
          </ul>
        </li>
      </ol>
    </main>
  )
}
