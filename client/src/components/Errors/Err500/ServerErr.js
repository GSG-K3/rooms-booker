import React, { Component } from 'react'
import SettingIcon from '../../../Images/roundGear.png'
import './serverErr.css'
class ServerErr extends Component {
  render() {
    return (
      <div className='error_continer_div'>
        <h2>ERROR</h2>
        <div className='server_icon'>
          <h1>5</h1><img src={SettingIcon} alt='error' /><img src={SettingIcon} alt='error' />
        </div>
        <h3>Internal Server Error</h3>
      </div>

    )
  }
}

export default ServerErr
