import React, { Component } from 'react'

import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './NavBar.css'

const Events = () => <div> Hi to Events </div>
const Rooms = () => <div> Hi to Rooms </div>

class NavBar extends Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar-style'>
            <ul className='navbar-list'>
              <li className='events-item'>
                <Link to='/events'>Events</Link>
              </li>
              <li className='rooms-item'>
                <Link to='/rooms'>Rooms</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/events' component = {Events}/>
            <Route exact path='/rooms' component = {Rooms}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default NavBar
