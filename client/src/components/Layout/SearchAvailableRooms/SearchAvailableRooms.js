import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import axios from 'axios'

import searchIcon from '../../../Images/search.png'
import calenderIcon from '../../../Images/calendar_icon.png'
import clockIcon from '../../../Images/clock_icon.png'
import AvailableRooms from '../AvailableRooms/AvailableRooms'

import './SearchAvailableRooms.css'
import 'react-datepicker/dist/react-datepicker.css'

class SearchAvailableRooms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomId: [],
      startDate: new Date(),
      display: false,
      availableRooms: [],
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  searchAvailableRooms = () => {  
    const date = moment(this.state.startDate.toLocaleString()).format('YYYY-MM-DD h:mm:ss')
    axios
      .get(`/api/available-rooms/${date}`)
      .then((res) => this.setState({ roomId: res.data })).then(() => {
        this.setState({
          availableRooms: [],
        })
        this.filterRooms()
      }
      )
      .catch(err => err)
  }

  filterRooms() {
    const { rooms } = this.props
    let temp = []
    let { roomId, availableRooms } = this.state

    for (let i = 0; i < roomId.length; i++) { temp.push((rooms.filter(room => (room.room_id === roomId[i].room_id)))) }

    temp.forEach((room) => {
      availableRooms.push(room[0].room_name)
    });

    this.setState({ display: true })
  }

  render() {
    return (
      <div className='available-rooms-container'>
        <div className="available-rooms-container__search-bar">
          <DatePicker
            placeholderText='Enter Date'
            className='available-rooms-container__date-picker'
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat='dd/MM/yyyy'
            showTimeSelect
          />
          <img
            src={searchIcon}
            className='available-rooms-container__iconDiv__search'
            onClick={this.searchAvailableRooms}
          />
        </div>
        {this.state.display ? <div className = "date-and-time"><div className = 'date'><img src = {calenderIcon} className = 'icon'/>{this.state.startDate.toLocaleDateString()}</div><div className = 'time'><img src = {clockIcon} className = 'icon'/>{this.state.startDate.toLocaleTimeString()}</div></div>:<div> </div>}
        {this.state.display ? <AvailableRooms availableRooms={this.state.availableRooms} /> : <p className = "message"> Enter Date to check available rooms. </p>}
      </div>
    )
  }
}

export default SearchAvailableRooms
