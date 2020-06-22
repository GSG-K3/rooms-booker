import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './NavBar.css'
import Rooms from '../../Layout/Rooms/Rooms'
import Events from '../../Layout/Events/Events'

class NavBar extends Component {
  state = {
    navBarStatus : true
  }

  //change the value of navBarStatus to show Evets component
  handleEvent = () => {
    this.setState({navBarStatus: true})
    const { history } = this.props
    history.push('/')
  }

  //change the value of navBarStatus to show Rooms component
  handleRoom = () => {
    this.setState({navBarStatus: false})
    const { history } = this.props
    history.push('/rooms')
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

export default withRouter(NavBar)
