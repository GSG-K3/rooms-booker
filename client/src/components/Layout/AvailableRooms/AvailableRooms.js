import React, { Component } from 'react'
import calenderIcon from '../../../Images/calendar_icon.png'
import clockIcon from '../../../Images/clock_icon.png'
import './AvailableRooms.css'
import addRoomIcon from '../../../Images/addRoom.png'
import { Link } from 'react-router-dom'
class AvailableRooms extends Component {
  render () {
    let availableRooms = localStorage.getItem('availableRooms')
    let startTime = localStorage.getItem('startTime')
    let endTime = localStorage.getItem('endTime')
    availableRooms = JSON.parse(availableRooms)
    startTime = new Date(startTime)
    endTime = new Date(endTime)
    return (
      <div>
        <div className="date-and-time">
          <div className="availabale_room_date">
            <img src={calenderIcon} className="icon" />
            <h3>{startTime.toLocaleDateString()}</h3>
          </div>
          <div className="availabale_room_date">
            <img src={clockIcon} className="icon" />
            <h3>{startTime.toLocaleTimeString()}</h3>
            <h3>To</h3>
            <h3>{endTime.toLocaleTimeString()}</h3>
          </div></div>
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
                      startTime: startTime,
                      endTime: endTime
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
