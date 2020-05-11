import React from 'react'
import GSGlog from '../../../Images/gsg_logo.jpg'
import Profile from '../../../Images/Ellipse 2.jpg'
import './Header.css'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className='header'>
      <img className='logo' src={GSGlog} alt='logo' />
      <Link to = {'/home'}>
        <img className='profile' src={Profile} alt='profile'/></Link>
    </div>
  )
}

export default Header
