import React, { Component } from 'react'

import './AvailableRooms.css'

class AvailableRooms extends Component {
  render () {
    return (
      <div>
        <h4>Available Rooms</h4>
        <div className='movies-container'>
          {this.props.AvailableRooms.map((AvailableRoom, i) => (
            <div key={i}>
              <h1>{this.props.AvailableRooms[i].Name}</h1>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default AvailableRooms
