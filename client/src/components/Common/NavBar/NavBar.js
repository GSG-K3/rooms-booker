
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Background from '../../../Images/back12.jpg'
class NavBar extends Component {
  // state = {
  //   navBarStatus : true
  // }

  // //change the value of navBarStatus to show Evets component
  // handleEvent = () => {
  //   this.setState({ navBarStatus: true })
  // }

  // //change the value of navBarStatus to show Rooms component
  // handleRoom = () => {
  //   this.setState({ navBarStatus: false })
  // }

  render () {
    // const { navBarStatus } = this.state
    return (
      <div className ='container_nav'>
        <div className='container__div_nav'>
          <ul className='container__div__list'>
            <li className='container__div__list__item'>
              <Link to='/' >
                <button className='link' >Events</button>
              </Link>
            </li>
            <li className='container__div__list__item'>
              <Link to='/rooms' >
                <button className='link'>Rooms</button>
              </Link>
            </li>
          </ul>
          <img src={Background} alt='back' />
        </div>
      </div>
    )
  }
}

export default NavBar
