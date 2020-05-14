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
        <div className="event_card">
          <div className='color_div_yellow'></div>
          <div className='color_div_blue'></div>
          <div className='color_div_lightBlue'></div>
          <div className='event_title_div'>
        <h2>{event_title}</h2>
        <p>{event_date.slice(0,10)}</p>
          </div>
        <div className='read_more_div'>
        <Link className='more_link' to = {{pathname:`/event/${this.props.event.event_id}`
      }}>
        <small>more ...</small>
        </Link>
        </div>
        </div>
      </div> 
      
    )
  }
}

export default Event
