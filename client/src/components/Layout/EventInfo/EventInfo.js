import React from 'react'
import './eventInfo.css'
const EventInfo = (props) => {
  const data = sessionStorage.getItem('event')
  const eventInfo = JSON.parse(data)

  return (
    <div className='eventinfo'>
      <div>
        <h2 className ='eventinfo__title'> {eventInfo.event_title} </h2>
      </div>
      <div className='event_info'>

        <div className ='event_info__description'>
          <h2>Description About The Event:</h2>
          <p> {eventInfo.event_description}</p>
        </div>

        <div className ='event_info__author'>
          <h2>Event Author:</h2>
          <p> {eventInfo.event_author}</p>
        </div>

        <div className ='event_info__date'>
          <h2>Event Date:</h2>
          <p> {eventInfo.event_date}</p>
        </div>

        <div className ='event_info__note'>
          <h2>Notes:</h2>
          <p> {eventInfo.event_note}</p>
        </div>

      </div>
      <div className ='eventinfo_button'>
        <div>
        <button className='eventinfo_button__back'>Back</button>
        </div>
        <button className='eventinfo_button__remindme'>Remind me</button>
      </div>
    </div>
  )
}
export default EventInfo
