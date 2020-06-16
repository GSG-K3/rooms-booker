import React, { Component } from 'react'
import GSGlog from '../../../Images/gsg_logo.jpg'
import Profile from '../../../Images/Ellipse 2.jpg'
import './Header.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import axios from 'axios'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      userId: '',
      userName: ''
    }
  }

  show = ()=> {
    const { history } = this.props
    axios.get('/api/check').then(({ data }) => {
      const { success, email, userId, userName } = data
      console.log(data)
      if (success) {
        this.setState({
          email, userId, userName
        })
      } else {
        return history.push('/login')
      }
    })
  }

  render () {
    const { userId } = this.state 
    return (
      <div className='header'>
        <Link to={'/'} className='header_link'>
          <img className='logo' src={GSGlog} alt='logo' />
        </Link>
        <Link to = {{pathname:`/home/${userId}`}}>
          <img className='profile' src={Profile} alt='profile' onClick={this.show}/></Link></div>
    )
  }
}
export default withRouter(Header)
