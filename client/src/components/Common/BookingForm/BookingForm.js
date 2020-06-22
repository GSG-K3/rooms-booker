import React, { Component } from 'react'
import Calender from '../../../Images/calendar_icon.png'
import Clock from '../../../Images/clock_icon.png'
import RoomIcon from '../../../Images/room_icon.png'
import './bookingForm.css'
import axios from 'axios'
import Popup from './Popup'
import moment from 'moment'
import logout from '../../Layout/logout/logout'

class BookingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: null,
      date: '',
      roomId: null,
      roomName: '',
      reminder: false,
      showPopup: false,
    }
  }

  componentDidMount() {
    // check if user login successfully
    const { history } = this.props;
    axios.get("/api/check").then(({ data }) => {
      const { success } = data;
      if (success) {
        let { roomName, roomId, date } = this.props.location.state
        date = moment(date.toLocaleString()).format('YYYY-MM-DD H:mm:ss')
        this.setState({
          roomName: roomName,
          date: date,
          userId: data.userId,
          roomId: roomId,
        })
      } else return history.push('/login')
    })
  }

  handelChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }

  toggleReminder = () => {
    this.setState({ reminder: !this.state.reminder });
  };
//handeling submit form to add event for the user 
  handelSubmit = (e) => {
    e.preventDefault()
    const formData = this.state
    axios
      .post('/api/booking', formData)
      .then((response) => this.setState({ showPopup: !this.state.showPopup }))
      .catch((err) => this.setState({ message: err.response.data.message }))
  }

  goBack = () => {
    this.props.history.push('/rooms/available-rooms')
  }

  render() {
    const { roomName, date, showPopup } = this.state

    return (
      <div>
        <div className='logout'>
          <p
            onClick={() => {
              logout()
            }}
          >
            Logout
          </p>
        </div>

        <div className='date_info_continer__div'>
          <div className='date_info__div'>
            <img src={Calender} alt='calender' />
            <h4>{date.slice(0, 10)}</h4>
          </div>
          <div className='date_info__div'>
            <img src={Clock} alt='clock' />
            <h4>{date.slice(10, 19)}</h4>
          </div>
          <div className='date_info__div'>
            <img src={RoomIcon} alt='room' />
            <h4>{roomName}</h4>
          </div>
        </div>
        <form className='booking_form'>
          <p>
            Please re-fill the following fileds to complete your booking
            process:
          </p>
          <hr className='label_line' />
          <input
            type='text'
            name='name'
            onChange={this.handelChange}
            placeholder='Your Name'
          />
          <input
            type='text'
            name='title'
            onChange={this.handelChange}
            placeholder='Event Title'
          />
          <input
            type='text'
            name='description'
            onChange={this.handelChange}
            placeholder='Event Description'
          />
          <input
            type='text'
            name='notes'
            onChange={this.handelChange}
            placeholder=' Notes'
          />
          <div className='remind_me_input__div'>
            <label htmlFor='reminder' className='radio_input'>
              <input
                type='radio'
                onClick={this.toggleReminder}
                checked={this.state.reminder}
              />
              Remind me
            </label>
          </div>
          {this.state.message ? (
            <p className='edit_form_message'> {this.state.message} </p>
          ) : null}
          <div className='buttons_continer'>
            <button className='back_button' onClick={this.goBack}>
              Back
            </button>
            <button
              type='submit'
              onClick={this.handelSubmit}
              className='book_button'
            >
              Book
            </button>
          </div>
        </form>
        {showPopup ? <Popup room={roomName} /> : null}
      </div>
    )
  }
}

export default BookingForm
