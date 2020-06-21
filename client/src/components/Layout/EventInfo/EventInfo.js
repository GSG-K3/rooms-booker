import React, { Component } from 'react'
import './eventInfo.css'
import Background from '../../../Images/background.jpg'
import ClockIcon from '../../../Images/icons8-clock-128.png'
import CalendarIcon from '../../../Images/icons8-calendar-64.png'
import LocationIcon from '../../../Images/icons8-location-96.png'
import NoteIcon from '../../../Images/icons8-note-48.png'
import PersonIcon from '../../../Images/icons8-person-60.png'

const gapi = window.gapi
const CLIENT_ID = '558072145685-hl8laqhvbqcd0f5vfrnt61v1ts1ls5lh.apps.googleusercontent.com'
const API_KEY = 'AIzaSyBaXfE46xxRXpcw7vSUmIZaKlwJrec1bGY'
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
const SCOPES = 'https://www.googleapis.com/auth/calendar'

const iconStyle={height : "2em" , width : "2em" , marginRight : "1em"}
class EventInfo extends Component {
  //handelClick will send event info to google calendar
  handelClick=()=>{
    const data = sessionStorage.getItem('event')
    const eventInformation = JSON.parse(data)
    const locationEvent =  ' YDRC /' + eventInformation.room_name + ' Room'
 //make authontication by google account
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      })
      gapi.client.load('calendar', 'v3')
      //check if user is login 
      gapi.auth2.getAuthInstance().signIn()
      .then( ()=> {
        //make request body for the event 
        let event = {
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
        //add event to google calendar calendar
        let request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event
        
        })
        //open calendar in new window 
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
          {/* <p className='eventinfo__details'> details about event</p> */}
        </div>

        <div className='event_info'>
          <div> <img src={Background}/></div>
          <div className='event_info__desc'>
            <div className ='event_info__description'>
              <h3> {eventInfo.event_description}</h3>
            </div>
            <div className ='event_info__date'>
              <div className='event_date_icon_contener'>
                <img style={iconStyle} src={CalendarIcon} alt='Date' />
                <h3> {eventInfo.event_date.slice(0, 10)}</h3>
              </div>
              <div className='event_date_icon_contener'>
                <img style={iconStyle} src={ClockIcon} alt='Time' />
                <h3> {eventInfo.event_date.slice(11, 19)}</h3>
              </div>
            </div>
            <div className ='event_info__room'>
              <img style={iconStyle} src={LocationIcon} alt='room' />
              <h3>{eventInfo.room_name} Room /YDRC</h3>
              {/* <p>Room</p> */}
            </div>

            <div className ='event_info__author'>
              <img style={iconStyle} src={PersonIcon} alt='author' />
              {/* <p>Organizer</p> */}
              <h3> {eventInfo.event_author}</h3>
            </div>

            <div className ='event_info__note'>
              <img style={iconStyle} src={NoteIcon} alt='Note' />
              {/* <p>Notes</p> */}
              <h3> {eventInfo.event_note}</h3>
            </div>
          </div>
        </div>
        <div className ='eventinfo_button'>

          <button className='eventinfo_button__back' 
                  onClick={this.props.history.goBack} >Back</button>
          <button className='eventinfo_button__remindme' 
                  onClick={this.handelClick} >Remind me</button>

        </div>

      </div>
    )
  }
}
export default EventInfo
