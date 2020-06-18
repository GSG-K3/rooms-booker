import React, { Component } from 'react'
import './eventInfo.css'
import Background from '../../../Images/background.jpg'

const gapi = window.gapi
const CLIENT_ID = '558072145685-hl8laqhvbqcd0f5vfrnt61v1ts1ls5lh.apps.googleusercontent.com'
const API_KEY = 'AIzaSyBaXfE46xxRXpcw7vSUmIZaKlwJrec1bGY'
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
const SCOPES = 'https://www.googleapis.com/auth/calendar'
class EventInfo extends Component {
  handelClick=()=>{
    const data = sessionStorage.getItem('event')
    const eventInformation = JSON.parse(data)
    const locationEvent =  ' YDRC /' + eventInformation.room_name + ' Room'

    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      })
      gapi.client.load('calendar', 'v3')
      gapi.auth2.getAuthInstance().signIn()
      .then( ()=> {
        var event = {
          'summary': eventInformation.event_title,
          'location': locationEvent,
          'description': eventInformation.event_description,
          'start': {
            'dateTime': eventInformation.event_date,
            'timeZone': 'Asia/Jerusalem'
          },
          'end': {
            'dateTime': '2020-07-28T10:00:00-07:00',
            'timeZone': 'Asia/Jerusalem'
          },
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 30}
            ]
          }
        }
        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event
        
        })
        request.execute((event) => {
          window.open(event.htmlLink);
          console.log(event);
          
        });
        
    
    
      })
          });

  }
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

          <button className='eventinfo_button__remindme' onClick={this.handelClick} >Remind me</button>

        </div>

      </div>
    )
  }
}
export default EventInfo
