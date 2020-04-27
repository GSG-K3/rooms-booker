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
       axios.get('/api/user-events')
      .then(res=>this.setState({events: res.data}))
      .catch(err => console.log(err))   
   }


  render () {
    return <div className='big_continer'>
      <div className='user_profile'>
        <img src={Profile} />
        <h2>Bayan_Seder</h2>
      </div>
      <div className='continer_div'>
        <h3 className='events'>Your Events</h3>
        {this.state.events.map((event)=>{
      return  <div className='event_card'>
    <div className='title'>
      <h3>{event.event_title}</h3>
      <p>{event.event_date}</p>
    </div>
    <div className='event_option'>
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
      <button className='back_button'>Back</button>
    </div>
  }
}
export default UserHome
