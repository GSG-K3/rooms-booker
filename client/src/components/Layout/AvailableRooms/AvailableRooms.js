import React, { Component } from 'react'

import './AvailableRooms.css'
import addRoomIcon from '../../../Images/addRoom.png'
import { Link } from 'react-router-dom'
class AvailableRooms extends Component {
  render () {
    let availableRooms = localStorage.getItem('availableRooms')
    let date = localStorage.getItem('date')
    let enddate = localStorage.getItem('enddate')
    availableRooms = JSON.parse(availableRooms)
    date = new Date(date)
    enddate = new Date(enddate)
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
                  <Link to = {{
                    pathname: '/booking',
                    state: {
                      roomName: room.room_name,
                      roomId: room.room_id,
                      date: date,
                      enddate: enddate
                    }
                  }}>
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
            <p className='no_room_message'>There is no available rooms</p>
          )}
        </div>
      </div>
    )
  }
}

export default AvailableRooms
