import React from 'react'
// const { CLIENT_ID, API_KEY, DISCOVERY_DOCS, SCOPES } = process.env
const gapi = window.gapi
const CLIENT_ID = '558072145685-hl8laqhvbqcd0f5vfrnt61v1ts1ls5lh.apps.googleusercontent.com'
const API_KEY = 'AIzaSyBaXfE46xxRXpcw7vSUmIZaKlwJrec1bGY'
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
const SCOPES = 'https://www.googleapis.com/auth/calendar'

const CalenderApi = (event) => {
  // make authontication by google account
  gapi.load('client:auth2', () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    })
    gapi.client.load('calendar', 'v3')
    // check if user is login
    gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        const request = gapi.client.calendar.events.insert({
          calendarId: 'primary',
          resource: event

        })
        // open calendar in new window
        request.execute((event) => {
          window.open(event.htmlLink)
          console.log(event)
        })
      })
  })
}

export default CalenderApi
