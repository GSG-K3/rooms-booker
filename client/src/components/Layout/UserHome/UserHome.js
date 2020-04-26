import React from 'react'
import Profile from '../../../img/Ellipse 2.jpg'
import Delete from '../../../img/delete.jpg'
import Edit from '../../../img/Edit.png'
import './UserHome.css'

function UserHome () {
  return (
    <div className='big_continer'>
      <div className='user_profile'>
        <img src={Profile} />
        <h2>Bayan_Seder</h2>
      </div>
      <div className='continer_div'>
        <h3 className='events'>Your Events</h3>
        <div className='event_card'>
          <div className='title'>
            <h3>How to destroy your life</h3>
            <p>23/2/2022</p>
          </div>
          <div className='event_option'>
            <img src={Delete} alt='delete' />
            <img src={Edit} alt='edit' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserHome
