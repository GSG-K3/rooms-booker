import React, { Component } from 'react'
import Profile from '../../../Images/Ellipse 2.jpg'
import Delete from '../../../Images/delete.jpg'
import Edit from '../../../Images/Edit.png'
import './UserHome.css'
import axios from 'axios'
class UserHome extends Component {
  state = {
    events :[]
  }
  componentDidMount () {
    const id = 11
       axios.get(`/api/user-events/${id}`)
      .then(res=>this.setState({events: res.data}))
      .catch(err => console.log(err))   
   }


  render () {
    return <div className='Component_continer'>
      <div className='User_profile__div'>
        <img src={Profile} />
        <h2>Bayan_Seder</h2>
      </div>
      <div className='Events_continer__div'>
        <h3 className='Events'>Your Events</h3>
        {this.state.events.map((event)=>{
      return  <div className='Event_card'>
    <div className='Event_title'>
      <h3>{event.event_title}</h3>
      <p>{event.event_date}</p>
    </div>
    <div className='Event_option'>
      <div>
      <img src={Delete} alt='delete' />
      </div>
      <div>
      <img src={Edit} alt='edit' />
      </div>
    </div>
  </div>
    })}
      </div>
      <button className='Back_button'>Back</button>
    </div>
  }
}
export default UserHome
