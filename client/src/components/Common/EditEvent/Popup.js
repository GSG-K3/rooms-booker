import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './popup.css'
class Popup extends Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <p> Event Edited Successfully!</p>
          <div className='btns_div'>
            <Link className='text-link' to='/home'>
              <button className='back_btn'>OK</button>
            </Link>
          </div>
        </div>
      </div>)
  }
}

export default Popup
