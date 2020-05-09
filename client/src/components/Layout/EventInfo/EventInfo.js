import React from 'react'

const EventInfo = (props) => {
  const data = sessionStorage.getItem('event')
  const eventInfo = JSON.parse(data)

  return (
    <div>
      <p> {eventInfo.event_title} </p>
      <p> {eventInfo.event_description}</p>
      <p> {eventInfo.event_author}</p>
      <p> {eventInfo.event_date}</p>
      <p> {eventInfo.event_note}</p>
    </div>
  )
}
export default EventInfo
