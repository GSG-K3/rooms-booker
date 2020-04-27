import React from 'react'
import './SearchEvent.css'
import Serachlogo from '../../../Images/Serach.png'

function SearchEvent () {
  return (

    <div className='SearchEvent'>
      <div>
        <input type='text'
          placeholder='Search for Event '
        />
      </div>
      <div className='Search'>
        <img
          className='Search_logo'
          src={Serachlogo}
          alt='logo'/>
      </div>
    </div>

  )
}
export default SearchEvent
