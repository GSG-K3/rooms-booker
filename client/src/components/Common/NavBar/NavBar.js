
import React, { Component } from "react"

import "./NavBar.css"
import Rooms from '../../Layout/Rooms/Rooms'
import Events from '../../Layout/Events/Events'

class NavBar extends Component {
  state = {
    navBarStatus : true
  }

  //change the value of navBarStatus to show Evets Component
  handleEvent = () => {
    this.setState({ navBarStatus: true })
  }

  //change the value of navBarStatus to show Rooms Component
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
        {navBarStatus?<Events/>:<Rooms/>}
      </div>
    )
  }
}

export default NavBar
