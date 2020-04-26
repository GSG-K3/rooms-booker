import React from 'react'
import GSGlog from '../../../Images/gsg_logo.jpg'
import Profile from '../../../Images/Ellipse 2.jpg'
import './Header.css'

function Header () {
  return (
    <div className='header'>
      <img className='logo' src={GSGlog} alt='logo' />
      <img className='profile' src={Profile} alt='profile' />
    </div>
  )
}

export default Header
