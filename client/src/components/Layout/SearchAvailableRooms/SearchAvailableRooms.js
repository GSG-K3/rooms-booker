import React, { Component } from 'react'
import { useState } from 'react'

import searchIcon from '../../../Images/serach.png'

import './SearchAvailableRooms.css'

import AvailableRooms from '../AvailableRooms/AvailableRooms'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

class SearchAvailableRooms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      RoomsId: [],
      startDate:new Date(),
      displayAvailableRooms: false,
      availableRooms: []
    }
  }



  handleChange = (date) => {
    console.log(date)
    this.setState({
      startDate: date,
    })
  }


  searchAvailableRooms = () => {
    const date = this.state.startDate.toLocaleString()
    this.setState({displayAvailableRooms: true})
    const Rooms = this.state.RoomsId
    // this.state.availableRooms = Rooms.filter(Rooms => Rooms.isReserved === false)
    axios.get(`/api/available-rooms/${date}`)
    .then(res => this.setState({RoomsId: res.result}))
    .catch(err => err)

    console.log(Rooms);
  }

  render () {
    return (
      <div className='available-rooms-container'>
        <div className = "available-rooms-container__search-bar">
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
          {this.state.displayAvailableRooms ? <div className = "date-and-time">{this.state.startDate.toLocaleString()}</div>:<div> </div>}
          {this.state.displayAvailableRooms ? <AvailableRooms AvailableRooms = {this.state.availableRooms}/>:<div> </div> }
      </div>
    )
  }
}

export default SearchAvailableRooms
