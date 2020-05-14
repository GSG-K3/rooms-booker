import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import axios from 'axios'

import searchIcon from '../../../Images/search.png'
import calenderIcon from '../../../Images/calendar_icon.png'
import clockIcon from '../../../Images/clock_icon.png'
import AvailableRooms from '../AvailableRooms/AvailableRooms'
import ServerErr from '../../Errors/Err500/ServerErr'
import './SearchAvailableRooms.css'
import 'react-datepicker/dist/react-datepicker.css'

class SearchAvailableRooms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
      display: false,
      availableRooms: [],
      errFound: false
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
    })
  }

  searchAvailableRooms =  () => {
    const date = moment (this.state.startDate.toLocaleString ()).format (
      'YYYY-MM-DD H:mm:ss'
    )
    axios
      .get(`/api/available-rooms`, {
        params: {
          date: date,
        },
      })
      .then((res) => this.setState({ availableRooms: res.data, display: true }))
      .catch((err) => this.setState({ errFound: !this.state.errFound }))
  }

  renderAvailableRooms() {
    return (
      this.state.errorFound ?
        <ServerErr />
        :
        <div>
        <div className='date-and-time'>
          <div className='date'>
            <img src={calenderIcon} className='icon' />
            {this.state.startDate.toLocaleDateString ()}
          </div>
          <div className='time'>
            <img src={clockIcon} className='icon' />
            {this.state.startDate.toLocaleTimeString ()}
          </div>
        </div>
        <AvailableRooms availableRooms={this.state.availableRooms} date = {this.state.startDate}/>
      </div>
    )
  }

  render() {
    return (
      <div className='available-rooms-container'>
        <div className='available-rooms-container__search-bar'>
          <DatePicker
            placeholderText='Enter Date'
            className='available-rooms-container__date-picker'
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat='dd/MM/yyyy'
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="time"
          />
          <img
            src={searchIcon}
            className='available-rooms-container__iconDiv__search'
            onClick={this.searchAvailableRooms}
            alt='search'
          />
        </div>
        {this.state.availableRooms.length > 0 ? (
          this.renderAvailableRooms()
        ) : (
            <p className='message'> Enter Date to check available rooms. </p>
          )}
      </div>
    )
  }
}

export default SearchAvailableRooms
