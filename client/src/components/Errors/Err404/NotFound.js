import React, { Component } from 'react'
import Emoji from '../../../Images/handDown.png'
import './notFound.css'

class Err404 extends Component {
  render () {
    return (
      <div className='continer_div'>
        <h2>ERROR</h2>
        <div className='icon_div'>
          <h1>4</h1> <img src={Emoji} /><h1>4</h1>
        </div>
        <h3>Page Not Found</h3>
      </div>
    )
  }
}

export default Err404
