import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App () {
  return (
    <Router>
      <switch>
        <Route exact path="/"></Route>
        <Route exact path="/users">
          <div>hiiii user</div>
        </Route>
        <Route exact path="/rooms">
          <div>rooms</div>
        </Route>
      </switch>
    </Router>
  )
}

export default App
