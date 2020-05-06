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
    this.state.availableRooms = []
    // this.setState({displayAvailableRooms: true})
    // console.log(this.state.displayAvailableRooms);
    const date = moment(this.state.startDate.toLocaleString()).format('YYYY-MM-DD h:mm:ss')
    axios
      .get(`/api/available-rooms/${date}`)
      .then((res) => this.setState({ RoomsId: res.data,  displayAvailableRooms: true}))
      .catch(err => err)
    this.filterRooms()
    }

    filterRooms () {
      let rooms = this.props.rooms
      let temp = []
      let { RoomsId , availableRooms } = this.state
      for(let i = 0; i < RoomsId.length;i++)
      { temp.push((rooms.filter(room => (room.room_id === RoomsId[i].room_id))))}
      temp.forEach( (valuesObj) => {
        availableRooms.push(valuesObj[0].room_name)
      }); 
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
          {/* {this.state.displayAvailableRooms ? <div className = "date-and-time"><div className = 'date'><img src = {calenderIcon} className = 'icon'/>{this.state.startDate.toLocaleDateString()}</div><div className = 'time'><img src = {clockIcon} className = 'icon'/>{this.state.startDate.toLocaleTimeString()}</div></div>:<div> </div>} */}
          {this.state.displayAvailableRooms ? <AvailableRooms AvailableRooms = {this.state.availableRooms}/>:<div> </div> }
      </div>
    )
  }
}

export default SearchAvailableRooms
