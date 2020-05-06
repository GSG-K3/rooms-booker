import React, { Component } from "react";
import Calender from "../../../Images/calendar_icon.png";
import Clock from "../../../Images/clock_icon.png";
import RoomIcon from "../../../Images/room_icon.png";
import "./editEvent.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "./Popup";
class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 3,
      date: "2020-05-23T11:00:00.000Z",
      roomId: 5,
      room_name: "Moscow",
      showPopup: false,
      event_id: "",
        event_id: "",
        event_title: "",
        event_author: "",
        event_description: "",
        event_note: "",
    };
  }

  componentDidMount() {
    let eventId = this.props.match.params.id;
    axios
      .get(`/api/edit-event/${eventId}`)
      .then((res) => {
        this.setState({            
          event_id: res.data.event_id,
          event_title: res.data.event_title,
          event_author: res.data.event_author,
          event_description: res.data.event_description,
          event_note: res.data.event_note
          
        });        
      })
      .catch((err) => console.log(err));
  }

  handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    console.log(this.state);
    
  };

  handelSubmit = (e) => {
    e.preventDefault();
    const editData = this.state;
    axios
      .post('/api/update-event', editData)
      .then((response) => {
        if (response.status === 200) {
          console.log("res :", response);
          return this.setState({showPopup : !this.state.showPopup})

        }
        // else  alert('A small error happend in the server in this booking operation!! try again !!')
      })
      .catch((err) => console.log(err));
  };

  render() {
    const {
      event_title,
      event_author,
      event_description,
      event_note,
    } = this.state;
    return (
      <div>
        <div className="date_info_continer__div">
          <div className="date_info__div">
            <img src={Calender} alt="calender" />
            <h4>{this.state.date.slice(0, 10)}</h4>
          </div>
          <div className="date_info__div">
            <img src={Clock} alt="clock" />
            <h4>{this.state.date.slice(11, 16)}</h4>
          </div>
          <div className="date_info__div">
            <img src={RoomIcon} alt="room" />
            <h4>{this.state.room_name}</h4>
          </div>
        </div>
        <form className="booking_form">
          <p>
            Please re-fill the following fileds to complete your EDIT process:
          </p>
          <hr className="label_line" />
          <input
            type="text"
            name="event_title"
            onChange={this.handelChange}
            placeholder="Event Title"
            value={event_title}
          />
          <input
            type="text"
            name="event_author"
            onChange={this.handelChange}
            placeholder="Event Author"
            value={event_author}
          />
          <input
            type="text"
            name="event_description"
            onChange={this.handelChange}
            placeholder="Event Description"
            value={event_description}
          />
          <input
            type="text"
            name="event_note"
            onChange={this.handelChange}
            placeholder=" event Notes"
            value={event_note}
          />

          <div className="buttons_continer">
            <Link to="/home" className="text-link">
              <button className="back_button">Back</button>
            </Link>
            <button
              type="submit"
              onClick={this.handelSubmit}
              className="book_button"
            >
              Save
            </button>
          </div>
        </form>
        {this.state.showPopup ?  
          <Popup room={event_title} />  
            : null  
        }  
      </div>
    );
  }
}

export default EditEvent;
