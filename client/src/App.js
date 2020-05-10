import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Common/Header/Header'
import UserHome from './components/Layout/UserHome/UserHome'
import NavBar from './components/Common/NavBar/NavBar'
import BookingForm from './components/Common/BookingForm/BookingForm'
import Err404 from './components/Errors/Err404/NotFound'

function App () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={NavBar} />
        <Route exact path="/home" component={UserHome} />
        <Route exact path="/booking" component={BookingForm} />
        <Route component={Err404} />
      </Switch>
    </Router>
  )
}
export default App
