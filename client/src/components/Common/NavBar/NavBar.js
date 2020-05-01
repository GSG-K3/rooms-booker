import React, { Component } from "react"

import "./NavBar.css"
import Events from '../../Layout/Events/Events'
import AvailableRooms from '../../Layout/SearchAvailableRooms/SearchAvailableRooms'
import SearchAvailableRooms from "../../Layout/SearchAvailableRooms/SearchAvailableRooms"

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
        <div className='container__div'>
          <ul className='container__div__list'>
            <li className='container__div__list__events-item'>
              <button className='link' onClick={this.handleEvent}>Events</button>
            </li>
            <li className='container__div__list__rooms-item'>
              <button className='link' onClick={this.handleRoom}>Rooms</button>
            </li>
          </ul>
        </div>
        {navBarStatus?<Events />:<SearchAvailableRooms />}
      </div>
    )
  }
}

export default NavBar