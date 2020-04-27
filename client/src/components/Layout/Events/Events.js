import React, { Component } from 'react'
import axios from 'axios'
import './Events.css'

class Events extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount () {
    axios.get('/api/events')
      .then((res) => {
        this.setState({
          events: res.data
        })
      })
      .catch((err) => console.log(err))
  }

  render () {
    const { events } = this.state
    return (
      <div className="events">

        {
          events.map(event => {
            return (
             
              <div className="event">
                <h2 >{event.event_title}</h2>
                <p >{event.event_date}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Events
