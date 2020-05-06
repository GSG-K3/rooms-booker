import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import axios from 'axios'

import searchIcon from '../../../Images/search.png'
import AvailableRooms from '../AvailableRooms/AvailableRooms'

import './SearchAvailableRooms.css'
import 'react-datepicker/dist/react-datepicker.css'

class SearchAvailableRooms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      RoomsId: [],
      startDate:new Date(),
      displayAvailableRooms: false,
      availableRooms: [],
    }
  }
  
  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  searchAvailableRooms = () => {
    this.setState({displayAvailableRooms: true})
    if(this.state.displayAvailableRooms === true){
    let rooms = this.props.rooms
    let { RoomsId } = this.state
    const date = moment(this.state.startDate.toLocaleString()).format('YYYY-MM-DD h:mm:ss')
    axios
      .get(`/api/available-rooms/${date}`)
      .then((res) => this.setState({ RoomsId: res.data }))
      .catch(err => err)
    console.log(RoomsId)
      this.state.availableRooms = rooms.filter(function(room) {
        return !RoomsId.includes(room['room_id']); 
      })
      console.log(this.state.availableRooms)}
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
