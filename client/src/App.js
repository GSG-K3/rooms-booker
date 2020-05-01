import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SerachEvent from './components/Common/SerachEvent/SearchEvent.js'
import Header from './components/Common/Header/Header'
import NavBar from './components/Common/NavBar/NavBar'
import UserHome from './components/Layout/UserHome/UserHome'

function App () {
  return (
    <Router>
      <Header />
      <SerachEvent/>
      <Switch>
        <Route exact path = '/' component={NavBar}/>
        <Route exact path="/home" component={UserHome} />
      </Switch>
    </Router>
  )
}

export default App
