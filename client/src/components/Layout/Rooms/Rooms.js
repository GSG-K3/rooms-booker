import React, { Component } from "react";
import ClipLoader from 'react-spinners/ClipLoader'
import axios from "axios";
import "./style.css";
import ServerErr from './../../Errors/Err500/ServerErr'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import searchIcon from '../../../Images/search.png'
import calenderIcon from '../../../Images/calendar_icon.png'
import clockIcon from '../../../Images/clock_icon.png'
import AvailableRooms from '../AvailableRooms/AvailableRooms'


class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      shownCardId: "",
      show: false,
      errorFound : false ,
      showAvailableRooms : false ,
      startDate: new Date(),
      availableRooms: [],
      showForm : false,
    };
  }

  componentDidMount() {
    axios
      .get("/api/rooms")
      .then((res) => this.setState({ rooms: res.data }))
      .catch((err) => this.setState({errorFound : !this.state.errorFound}));
  }

  showInfo = (id) => {
    this.setState((prevState) => ({
      shownCardId: id,
      show: !prevState.show,
    }));
  };
  handleChange =  (date) => {
    this.setState ({
      startDate: date,
    })
  }

  searchAvailableRooms =  () => {
    const date = moment (this.state.startDate.toLocaleString ()).format (
      'YYYY-MM-DD h:mm:ss'
    )
    axios
      .get (`/api/available-rooms`, {
        params: {
          date: date,
        },
      })
      .then ( (res) => this.setState ({ availableRooms: res.data.rows, showAvailableRooms: true }))
      .catch ( (err) => this.setState({errFound : !this.state.errFound}))
  }
  renderAvailableRooms () {
    return  (
      <div>
        <div className='date-and-time'>
          <div className='date'>
            <img src={calenderIcon} className='icon' />
            {this.state.startDate.toLocaleDateString ()}
          </div>
          <div className='time'>
            <img src={clockIcon} className='icon' />
            {this.state.startDate.toLocaleTimeString ()}
          </div>
        </div>
        <AvailableRooms availableRooms={this.state.availableRooms} />
      </div>
    )
  }
  render() {
    const { rooms, shownCardId, show ,showAvailableRooms} = this.state;
    return (
      this.state.errorFound ? 
          <ServerErr />
          :
      <div>
        <div>
        <div className='available-rooms-container__search-bar'>
        <DatePicker
            placeholderText='Enter Date'
            className='available-rooms-container__date-picker'
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat='dd/MM/yyyy'
            timeFormat='HH:mm' 
            showTimeSelect
            />
          <img
            src={searchIcon}
            className='available-rooms-container__iconDiv__search'
            onClick={this.searchAvailableRooms}
            alt='search'
            />
            </div>
            {this.state.availableRooms.length > 0 ?  (
          this.renderAvailableRooms ()
        ) :  (
          <p className='search_message'> Enter Date to check available rooms </p>
        )}
        </div>
        <ul className="rooms">
          {!rooms ?
            <div className="loading-spinner">
              <ClipLoader
                className="loading-spinner__home"
                sizeUnit={'px'}
                size={80}
                color={'#123abc'}
              />
            </div>
          :
          rooms.map((rooms) => {
            return (!showAvailableRooms ?
              <div key={rooms.room_id} className="rooms__card">
                <h2 onClick={() => this.showInfo(rooms.room_id)}>
                  {rooms.room_name}
                </h2>
                {rooms.room_id === shownCardId && show ? (
                  <div className="rooms__card__content">
                    <li className="li"> capacity : {rooms.capacity}</li>
                    <li className="li"> space : {rooms.space}</li>
                    <li className="li"> {rooms.datashow ? "DataShow" : null}</li>
                    <li className="li"> {rooms.wifi ? "Wifi" : null}</li>
                    <li className="li">
                      {rooms.coffee_bar ? "Coffee Bar" : null}
                    </li>
                    <li className="li">
                      {rooms.white_board ? "White Board " : null}
                    </li>
                  </div>
                ) : null}
              </div>
            : null);
          })
          }
        </ul>
      </div>

    );
  }
}

export default Rooms;
