import React from 'react'
import './event.css'

const Event = (props) => {
  const { event } = props
  return (

    <div className="event">
      <h2> {event.event_title}</h2>
      <p>{event.event_date}</p>
    </div>
  )
}

export default Event
