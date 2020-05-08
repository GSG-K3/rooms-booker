import React, { Component } from 'react'

const EventInfo = props => {
  const data = sessionStorage.getItem('EventInfo')
  const eventinfo = JSON.parse(data)

  return (
    <div>
      <h2>{eventinfo.event_title}</h2>
    </div>
  )
}
export default EventInfo
