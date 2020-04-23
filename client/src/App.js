import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Common/Header/Header'
import UserHeader from './components/Layout/UserHome/UserHome'

function App () {
  return (
    <Router>
      <switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/home" component={UserHeader} />
      </switch>
    </Router>
  )
}

export default App
