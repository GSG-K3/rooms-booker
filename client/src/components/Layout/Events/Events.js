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
      searchQuery: '',
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

  setSearchQuery = name => this.setState({ searchQuery: name.target.value})
  

  render () {
  const { events, searchQuery} = this.state
  const filterSearch = events.filter(event => event.event_title.toLowerCase().indexOf(searchQuery.toLowerCase())!== -1)
    return (

      <div>
        <NavBar />
        <div className='SearchEvent'>
          <div>
            <input type='text'
              placeholder='Search for Event ... '
              onChange={this.setSearchQuery}
              value ={searchQuery}
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
              filterSearch.map((event)=> <Event event={event} />)
             }
        </div>
      </div>
    )
  }
}

export default Events
