import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Rooms from './components/Layout/Rooms/Rooms.js'
import Header from './components/Common/Header/Header'
import Events from './components/Layout/Events/Events'
import UserHome from './components/Layout/UserHome/UserHome'
import NavBar from './components/Common/NavBar/NavBar.js'

function App () {
  return (
    <Router>
      <Header />
      <NavBar/>
      <Switch>
        <Route exact path = '/' component={Events}/>
        <Route exact path="/home" component={UserHome} />
        <Route exact path="/rooms" component={Rooms} />
      </Switch>
    </Router>
  )
}
export default App
