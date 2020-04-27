import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SerachEvent from './components/Common/SerachEvent/SearchEvent.js'
import Header from './components/Common/Header/Header'
import Events from './components/Layout/Events/Events'

function App () {
  return (
    <Router>
      <Header />
      <SerachEvent/>
      <Switch>
        <Route exact path = '/' component={Events}/>
      </Switch>
    </Router>
  )
}

export default App
