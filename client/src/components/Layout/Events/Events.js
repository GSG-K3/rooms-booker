import React, { Component } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import axios from 'axios'
import './events.css'
import Event from '../Event/Event'


class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      searchQuery: '',
    }
  }
  componentDidMount() {
    axios.get('/api/events')
      .then((res) => {
        this.setState({
          events: res.data
        })
      })
      .catch((err) => console.log(err))
  }

  setSearchQuery = name => this.setState({ searchQuery: name.target.value })
  filterSearch = () => {
    const { events, searchQuery } = this.state
    return events.filter(event => event.event_title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1)
  }

  render() {
    const { events, searchQuery } = this.state
    return (
      <>{
        !events ?
          <div className="loading-spinner">
            <ClipLoader
              className="loading-spinner__home"
              sizeUnit={'px'}
              size={80}
              color={'#123abc'}
            />
          </div>
          :
          <div>
            <div className='SearchEvent'>
              <div>
                <input type='text'
                  placeholder='Search for Event ... '
                  onChange={this.setSearchQuery}
                  value={searchQuery}
                />
              </div>
            </div>

            <div className="events">
              {
                this.filterSearch().map(event => {
                  return <Event event={event} />
                })
              }
            </div>
          </div>
      }
      </>
    )
  }
}

export default Events
