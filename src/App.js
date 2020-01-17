import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import useNetworkOnline from './hooks/custom/useNetworkOnline'
import useBatteryStatus from './hooks/custom/useBatteryStatus'
import Home from './components/Home'
import Examples from './components/Examples'

import './App.scss'

function App() {
  const { online } = useNetworkOnline()
  const { batteryLevel } = useBatteryStatus()

  useEffect(() => {
    document.title = `React Hooks - Battery is at ${batteryLevel}`
  }, [batteryLevel])
  return (
    <Router>
      <div className="App">
        <header className={`${online ? 'online' : 'offline'}`}>
          Your app is {online ? 'online' : 'offline'}. Battery is at{' '}
          <span
            className={`battery ${parseInt(batteryLevel) < 10 &&
              'danger'} ${parseInt(batteryLevel) < 20 && 'warning'}`}
          >
            {batteryLevel}
          </span>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/state">useState</Link>
          <Link to="/effect">useEffect</Link>
          <Link to="/context">useContext</Link>
          <Link to="/reducer">useReducer</Link>
          <Link to="/callback">useCallback</Link>
          <Link to="/memo">useMemo</Link>
          <Link to="/ref">useRef</Link>
          <Link to="/imperative">useImperativeHandle</Link>
          <Link to="/layouteffect">useLayoutEffect</Link>
          <Link to="/debugvalue">useDebugValue</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/state" render={() => <Examples type="state" />} />
          <Route path="/effect" render={() => <Examples type="effect" />} />
          <Route path="/context" render={() => <Examples type="context" />} />
          <Route path="/reducer" render={() => <Examples type="reducer" />} />
          <Route path="/callback" render={() => <Examples type="callback" />} />
          <Route path="/memo" render={() => <Examples type="memo" />} />
          <Route path="/ref" render={() => <Examples type="ref" />} />
          <Route
            path="/imperative"
            render={() => <Examples type="imperative" />}
          />
          <Route
            path="/layouteffect"
            render={() => <Examples type="layouteffect" />}
          />
          <Route
            path="/debugvalue"
            render={() => <Examples type="debugvalue" />}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
