import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './popup.css'
class Popup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      room: ''
    }
  }

  render () {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <p>You booked <strong>{this.props.room}</strong> room for your event  successfully !</p>
          <div className='btns_div'>
            <Link className='text-link' to='/'>
              <button className='back_btn'>Back</button>
            </Link>
            <button className='send_btn'>Send Invitation</button>
          </div>
        </div>
      </div>)
  }
}

export default Popup
