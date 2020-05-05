import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Common/Header/Header'
import UserHome from './components/Layout/UserHome/UserHome'
import NavBar from './components/Common/NavBar/NavBar.js'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={NavBar} />
        <Route exact path="/home" component={UserHome} />
      </Switch>
    </Router>
  )
}
export default App
