import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Common/Header/Header'
import UserHome from './components/Layout/UserHome/UserHome'

function App () {
  return (
    <Router>
      <Header />
      <switch>
        <Route exact path="/home" component={UserHome} />
      </switch>
    </Router>
  )
}

export default App
