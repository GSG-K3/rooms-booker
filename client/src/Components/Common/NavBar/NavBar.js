import React, { Component } from "react"

import "./NavBar.css"
import AvailableRooms from "../AvailableRooms/AvailableRooms"

class NavBar extends Component {
  state = {
    navBarStatus : true
  }

  handleEvent = () => {
    this.setState({ navBarStatus: true })
  }

  handleRoom = () => {
    this.setState({ navBarStatus: false })
  }

  render() {
    const {navBarStatus} = this.state
    return (
      <div className ='container'>
        <nav className='container__navbar'>
          <ul className='container__navbar__list'>
            <li className='container__navbar__list__events-item'>
              <button className='link' onClick={this.handleEvent}>Event</button>
            </li>
            <li className='container__navbar__list__rooms-item'>
              <button className='link' onClick={this.handleRoom}>Room</button>
            </li>
          </ul>
        </nav>
        {navBarStatus?<h1>Event is Here!</h1>:<h1>Room is Here!</h1>}
      </div>
    )
  }
}

export default NavBar
