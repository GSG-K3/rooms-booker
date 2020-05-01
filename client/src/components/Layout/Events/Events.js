import React, { Component } from 'react'
import axios from 'axios'
import './events.css'
import NavBar from '../../Common/NavBar/NavBar.js'
import Serachlogo from '../../../Images/Serach.png'
import Event from '../Event/Event'


class Events extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: [],
      eventName: '',
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

  changeInput =  (name) => {
    this.setState({ eventName: name.target.value.substr(0,20)
       })
  }

  render () {
  const { events, eventName} = this.state
  const filtertsearch = events.filter(
    (event) =>
    {
   return event.event_title.toLowerCase().indexOf(eventName.toLowerCase())!== -1
    }
  )
    return (

      <div>
        <NavBar />
        <div className='SearchEvent'>
          <div>
            <input type='text'
              placeholder='Search for Event ... '
              onChange={this.changeInput.bind(this)}
              value ={eventName}
            />
          </div>
          <div className='Search'>
            <img
              className='Search_logo'
              src={Serachlogo}
              alt='logo'
            /> 
          </div>
        </div>

        <div className="events">
            {
              filtertsearch.map((event)=>{
                return (
                 <Event event={event}  />
                )
              })
            }
        </div>
      </div>
    )
  }
}

export default Events
