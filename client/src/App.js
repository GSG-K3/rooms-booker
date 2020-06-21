import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Common/Header/Header'
import Login from './components/Layout/Login/Login.js'
import UserHome from './components/Layout/UserHome/UserHome'
import EventInfo from './components/Layout/EventInfo/EventInfo'
import NavBar from './components/Common/NavBar/NavBar'
import BookingForm from './components/Common/BookingForm/BookingForm'
import Err404 from './components/Errors/Err404/NotFound'
import EditEvent from './components/Common/EditEvent/EditEvent'
import Rooms from './components/Layout/Rooms/Rooms'

function App () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={NavBar} />
        <Route exact path="/home/:id" component={UserHome} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/event/edit/:id" component={EditEvent} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/booking" component={BookingForm} />
        <Route exact path ='/event/:id' component={EventInfo}/>
        <Route component={Err404} />
      </Switch>
    </Router>
  )
}
export default App
