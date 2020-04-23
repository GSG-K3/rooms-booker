import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './NavBar.css'

class NavBar extends Component {
  render () {
    return (
      <Router>
        <div className = 'container'>
          <nav className = 'navbar-style'>
            <ul className = 'navbar-list'>
              <li className = 'events-item'>
                <Link to = '/events'>Events</Link>
              </li>
              <li className = 'rooms-item'>
                <Link to = '/rooms'>Rooms</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path = '/events'>
              <div>Hi in Events</div>
            </Route>
            <Route exact path = '/rooms'>
              <div>Hi in Rooms</div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default NavBar
