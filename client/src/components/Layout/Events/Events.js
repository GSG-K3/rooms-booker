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
      name:''
      // eventDate:''
    }
    // this.changeInput = this.changeInput.bind(this)
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

  changeInput =  (name , date) => {
    this.setState({ name: name.target.value 
    })
  }

  handleSearch = (e) =>{

    e.preventDefault()
    const {name}= this.state
    this.setState({eventName:name})
    const { eventName,events} = this.state

      if(eventName){

       events.map(eve => {
                    if (eventName === eve.event_title){
                       alert('Your username is: ' + eventName.value)
                       return
                    }
                    else{
                      return
                    }
                   })
      }

    }

  render () {
    const { events, eventName,name } = this.state

    return (

      <div>
        <NavBar />

        <div className='SearchEvent'>
          <div>
            <input type='text'
              placeholder='Search for Event '
              onChange={this.changeInput}
              value ={name}
            />
          </div>
          <div className='Search'>
            <button onClick ={this.handleSearch}>
            <img
              className='Search_logo'
              src={Serachlogo}
              alt='logo'

            />
            </button>
          </div>
        </div>

        <div className="events">

          
          // .filter(searchingfor(eventName))
    { !eventName?
            events.map(event => {
              return (
              <Event eventname = {event.event_title}/>
                // // <div className="event">
                //   {/* <h2>{event.event_title}</h2>
                //   <p>{event.event_date}</p> */}
                  
                // // </div>
              )
            })
            : (
            <Event eventname={eventName}/>)
            }
          

          
          
        </div>

      </div>

    )
  }
}

export default Events
