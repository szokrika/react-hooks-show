import React, { useState } from 'react'
import { ThemeContextProvider } from './store'
import StateClass from './StateClass'
import StateHooks from './StateHooks'
import EffectClass from './EffectClass'
import EffectHooks from './EffectHooks'
import ContextClass from './ContextClass'
import ContextHooks from './ContextHooks'
import ReducerHooks from './ReducerHooks'
import CallbackHooks from './CallbackHooks'
import MemoHooks from './MemoHooks'
import RefHooks from './RefHooks'
import ImperativeHooks from './ImperativeHooks'
import DebugValueHook from './DebugValueHook'

export default function Examples({ type }) {
  const [count, setCount] = useState(10)
  const trigger = () =>
    setCount(parseInt(Math.floor(Math.random() * Math.floor(100))))

  return (
    <ThemeContextProvider>
      <h1>Examples</h1>
      {type === 'state' && (
        <section className="state">
          <p>The de facto local state management</p>
          <div className="example">
            <StateClass count={count} />
            <StateHooks count={count} />
          </div>
        </section>
      )}

      {type === 'effect' && (
        <section className="effect">
          <p>Side effects in the component</p>
          <div className="example">
            <EffectClass id={3} />
            <EffectHooks id={2} />
          </div>
        </section>
      )}

      {type === 'context' && (
        <section className="example context">
          <ContextClass />
          <ContextHooks />
        </section>
      )}

      {type === 'reducer' && (
        <section className="example reducer">
          <ReducerHooks start={10} />
        </section>
      )}
      {type === 'callback' && (
        <section className="example calllback">
          <CallbackHooks
            a={count}
            b={1}
            increment={() => setCount(count + 1)}
          />
        </section>
      )}
      {type === 'memo' && (
        <section className="example memo">
          <MemoHooks />
        </section>
      )}
      {type === 'ref' && (
        <section className="example ref">
          <RefHooks />
        </section>
      )}
      {type === 'imperative' && (
        <section className="example imperative">
          <ImperativeHooks />
        </section>
      )}
      {type === 'debugvalue' && (
        <section className="example debugvalue">
          <DebugValueHook />
        </section>
      )}
      <button className="btn" onClick={trigger}>
        Trigger rerender
      </button>
    </ThemeContextProvider>
  )
}
