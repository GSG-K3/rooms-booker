import React, { Component } from 'react'
import './eventInfo.css'
import Background from '../../../Images/background.jpg'

class EventInfo extends Component {
  render () {
    const data = sessionStorage.getItem('event')
    const eventInfo = JSON.parse(data)
    return (
      <div className='eventinfo'>

        <div className='eventinfo__info'>
          <h2 className ='eventinfo__title'> {eventInfo.event_title} </h2>
          <p className='eventinfo__details'> details about event</p>
        </div>

        <div className='event_info'>
          <div> <img src={Background}/></div>
          <div className='event_info__desc'>
            <div className ='event_info__description'>
              <h3> {eventInfo.event_description}</h3>
            </div>
            <div className ='event_info__date'>
              <h3> {eventInfo.event_date.slice(0, 10)}</h3>
              <h3> {eventInfo.event_date.slice(11, 19)}</h3>
            </div>
            <div className ='event_info__room'>
              <p>Room</p>
              <h3>{eventInfo.room_name}</h3>
            </div>

            <div className ='event_info__author'>
              <p>Organizer</p>
              <h3> {eventInfo.event_author}</h3>
            </div>

            <div className ='event_info__note'>
              <p>Notes</p>
              <h3> {eventInfo.event_note}</h3>
            </div>
          </div>
        </div>
        <div className ='eventinfo_button'>

          <div>
            <button className='eventinfo_button__back' onClick={this.props.history.goBack} >Back</button>
          </div>

          <button className='eventinfo_button__remindme'>Remind me</button>

        </div>

      </div>
    )
  }
}
export default EventInfo
