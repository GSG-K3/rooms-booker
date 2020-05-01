import React, { Component } from 'react'

import searchIcon from '../../../Images/serach 2.png'

import './SearchAvailableRooms.css'

import AvailableRooms from '../AvailableRooms/AvailableRooms'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

class SearchAvailableRooms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Rooms: [{Name: 'Gaza', isReserved: false}, {Name: 'Nablus', isReserved: true}],
      startDate:new Date()
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  searchAvailableRooms = () => {
      const Rooms = this.state.Rooms
      let availableRooms = Rooms.filter(Rooms => Rooms.isReserved === false)
      console.log(availableRooms)
      return (
        <div className = 'Available-rooms-containers'>
          {/* <AvailableRooms availableRooms = { availableRooms }/> */}
          <h1>kudfjskfs</h1>
        </div>
      )
  }

  render () {
    return (
      <div className='available-rooms-container'>
        <DatePicker
          placeholderText = 'Enter Date'
          className = 'available-rooms-container__date-picker'
          selected = {this.state.startDate}
          onChange = {this.handleChange}
          dateFormat = 'dd/MM/yyyy'
          showTimeSelect
        />
        <img
          src={searchIcon}
          className='available-rooms-container__iconDiv__search'
          onClick={this.searchAvailableRooms}
        />
      </div>
    )
  }
}

export default SearchAvailableRooms
