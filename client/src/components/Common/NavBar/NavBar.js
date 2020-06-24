
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Background from '../../../Images/back12.jpg'
class NavBar extends Component {
  render () {
    return (
      <div className ='container_nav'>
        <div className='container__div_nav'>
          <ul className='container__div__list'>
            <li className='container__div__list__item'>
              <Link to='/' >
                <button className='link' >EVENTS</button>
              </Link>
            </li>
            <li className='container__div__list__item'>
              <Link to='/rooms' >
                <button className='link'>ROOMS</button>
              </Link>
            </li>
          </ul>
          {/* <img src={Background} alt='back' /> */}
        </div>
      </div>
    )
  }
}

export default NavBar
