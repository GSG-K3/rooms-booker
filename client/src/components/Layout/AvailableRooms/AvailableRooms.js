import React, { Component } from 'react'

import './AvailableRooms.css'
import addRoomIcon from '../../../Images/addRoom.png'
import { Link } from 'react-router-dom'
class AvailableRooms extends Component {
  render () {
    const { availableRooms } = this.props
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
                    {room.room_name}
                  </h2>
                  <Link to='/booking'>
                    <img
                      src={addRoomIcon}
                      className='available-rooms-container__available-room__addIcon'
                      alt='addIcon'
                    />
                  </Link>
                </div>
              )
            })
          ) : (
            <p className='message'>There is no available rooms</p>
          )}
        </div>
      </div>
    )
  }
}

export default AvailableRooms
