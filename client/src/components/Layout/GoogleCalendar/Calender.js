// const { CLIENT_ID, API_KEY, DISCOVERY_DOCS, SCOPES } = process.env
const gapi = window.gapi
const { REACT_APP_CLIENT_ID } = process.env
const { REACT_APP_API_KEY } = process.env
const { REACT_APP_DISCOVERY_DOCS } = process.env
const { REACT_APP_SCOPES } = process.env

const CalenderApi = (event) => {
  // make authontication by google account
  gapi.load('client:auth2', () => {
    gapi.client.init({
      apiKey: REACT_APP_API_KEY,
      clientId: REACT_APP_CLIENT_ID,
      discoveryDocs: REACT_APP_DISCOVERY_DOCS,
      scope: REACT_APP_SCOPES
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
