import React, { Component } from 'react'

import './AvailableRooms.css'
import addRoomIcon from '../../../Images/addRoom.png'
import { Link } from 'react-router-dom'

class AvailableRooms extends Component {
  deleteDublicate (availableRooms) {
    const temp = []
    for (let i = 0; i < availableRooms.length; i++) {
      if (temp.includes(availableRooms[i]) !== true) {
        temp.push(availableRooms[i])
      }
    }
    return temp
  }

  render () {
    let { availableRooms } = this.props
    availableRooms = this.deleteDublicate(availableRooms)

    return (
      <div>
        <p className='available-rooms-title'>Available Rooms</p>
        <div className='available-rooms-container'>
          {availableRooms ? (
            availableRooms.map((room, i) => {
              return (
                <div
                  key={i}
                  className='available-rooms-container__available-room'
                >
                  <h2 className='available-rooms-container__available-room__room-name'>
                    {availableRooms[i]}
                  </h2>
                  <Link to='/booking'>
                    <img
                      src={addRoomIcon}
                      className='available-rooms-container__available-room__addIcon'
                    />
                  </Link>
                </div>
              )
            })
          ) : (
            <p className = "message">There is no available rooms</p>
          )}
        </div>
      </div>
    )
  }
}

export default AvailableRooms
