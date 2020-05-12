import React, { Component } from 'react'
import './event.css'
import { Link } from 'react-router-dom'
class Event extends Component {
  showInfo = () => {
    const { event} = this.props
    sessionStorage.setItem('event', JSON.stringify(event))
  }
  render () {
    const { event_title , event_date } = this.props
    return (
      <div  onClick={this.showInfo}>
        <Link className='event_link' to = {{pathname:`/event/${this.props.event.event_id}`
      }}>
        <div className="event">
        <h2>{event_title}</h2>
        <p>{event_date}</p>
        </div>
        </Link>
      </div> 
      
    )
  }
}

export default Event
