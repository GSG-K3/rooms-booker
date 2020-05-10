import React, { Component } from 'react'
import './eventInfo.css'

class EventInfo extends Component {
 goBack = () => { 
   this.props.history.goBack()
   }

render(){
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

      <div className ='event_info__room'>
        <h2>Address_Room:</h2>
        <p>{eventInfo.room_name}</p>
      </div>

      <div className ='event_info__note'>
        <h2>Notes:</h2>
        <p> {eventInfo.event_note}</p>
      </div>

    </div>
    <div className ='eventinfo_button'>

      <div>
        <button className='eventinfo_button__back' onClick={ () => {
          this.goBack()
        }} >Back</button> 
      </div>

      <button className='eventinfo_button__remindme'>Remind me</button>

    </div>
    
  </div>
)
}
}
export default EventInfo

 
