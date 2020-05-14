import React, { Component } from 'react'
import './eventInfo.css'

class EventInfo extends Component {
  render () {
    const data = sessionStorage.getItem('event')
    const eventInfo = JSON.parse(data)
    return (
      <div className='eventinfo'>

        <div>
          <h2 className ='eventinfo__title'> {eventInfo.event_title} </h2>
          <p className='eventinfo__information'> information about event</p>
        </div>

        <div className='event_info'>

          <div className ='event_info__description'>
            <h3> {eventInfo.event_description}</h3>
          </div>
          <div className ='event_info__date'>
            <h3> {eventInfo.event_date}</h3>
          </div>
          <div className ='event_info__room'>
            <p>Room</p>
            <h3>{eventInfo.room_name}</h3>
          </div>

          <div className ='event_info__author'>
            <p>Author of this event</p>
            <h3> {eventInfo.event_author}</h3>
          </div>

          <div className ='event_info__note'>
            <p>Notes</p>
            <h3> {eventInfo.event_note}</h3>
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
