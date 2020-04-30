import React, { Component } from 'react'
import Calender from '../../../Images/calendar_icon.png'
import Clock from '../../../Images/clock_icon.png'
import RoomIcon from '../../../Images/room_icon.png'
import './bookingForm.css'
import axios from 'axios'

class BookingForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userId : 5,
      date: '22/8/2020',
      time: '9:00_11:00 Am',
      room: {
        room_id: 2,
        room_name: 'Moscow'
      },
      reminder: false
    }
  }

  handelChange = (e) => {
    const name = e.target.name
    const value =e.target.value
    this.setState({[name]: value})
  }
  handelChecked = ()=> {
      this.setState({reminder : this.state.reminder===false ? true : false})
  }

   handelSubmit =(e) => {
      e.preventDefault();
      const formData = this.state
      axios.post( '/api/booking', formData)
      .then(response => console.log('response :',response))
      .catch(err => console.log(err))
    
  }

  render () {
    return (
      <div>
        <div className="date_info_continer__div">
          <div className="date_info__div">
            <img src={Calender} alt='calender' />
            <h4>{this.state.date}</h4>
          </div>
          <div className="date_info__div">
            <img src={Clock} alt='clock' />
            <h4>{this.state.time}</h4>
          </div>
          <div className="date_info__div">
            <img src={RoomIcon} alt='room' />
            <h4>{this.state.room.room_name}</h4>
          </div>
        </div>
        <form className="booking_form">
          <p>Please re-fill the following fileds to complete your booking process:</p>
          <hr className="label_line"/>
          <input type="text" name="name" onChange={this.handelChange} placeholder="Your Name" />
          <input type="text" name="title" onChange={this.handelChange} placeholder="Event Title" />
          <input type="text" name="description" onChange={this.handelChange} placeholder="Event Description" />
          <input type="text" name="notes" onChange={this.handelChange} placeholder=" Notes" />
          <div className="remind_me_input__div">
            <label htmlFor="reminder" className="radio_input"><input type="radio" onClick={this.handelChecked} checked={this.state.reminder} />Remind me</label>
          </div>
          <div className="buttons_continer">
            <button className="back_button" onClick={this.hadelReturn} >Back</button>
            <button type='submit' onClick={this.handelSubmit} className="book_button">Book</button>
          </div>
        </form>
      </div>
    )
  }
}

export default BookingForm
