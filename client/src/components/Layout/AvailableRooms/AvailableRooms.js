import React, { Component } from 'react'
import history from './history'

import './AvailableRooms.css'
import addRoomIcon from '../../../Images/addRoom.png'

class AvailableRooms extends Component {

  routeToBookForm () {
    console.log(',jdghksdb')
    history.push('/booking')
  }

  render () {
    return (
      <div>
        <p className = "available-rooms-title">Available Rooms</p>
        <div className='available-rooms-container'>
          {this.props.AvailableRooms.map((AvailableRoom, i) => {
            return (<div key={i} className = "available-rooms-container__available-room">
              <h2 className = "available-rooms-container__available-room__room-name">{this.props.AvailableRooms[i].Name}</h2>
              <img src={addRoomIcon} className = "available-rooms-container__available-room__addIcon" onClick = {this.routeToBookForm}/>
            </div>)
          })}
        </div>
      </div>
    )
  }
}

export default AvailableRooms
