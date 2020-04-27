import React, { Component } from 'react'

import './NavBar.css'

import AvailableRooms from '../AvailableRooms/AvailableRooms'

class NavBar extends Component {
  rooms () {
    return (<div>hanana</div>)
  }

  render () {
    return (
      <div className='container'>
        <nav className='container__navbar'>
          <ul className='container__navbar__list'>
            <li className='container__navbar__list__events-item'>
              <button className = 'events' onClick = { this.rooms}>Events</button>
              </li>
              <li className='container__navbar__list__rooms-item'>
              <button className = 'rooms' onClick = { () => {
                return <AvailableRooms />
              }}>Rooms</button>
              </li>
            </ul>
          </nav>
        </div>
      
    )
  }
}

export default NavBar
