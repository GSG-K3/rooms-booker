import React, { Component } from "react";
import Calender from "../../../Images/calendar_icon.png";
import Clock from "../../../Images/clock_icon.png";
import RoomIcon from "../../../Images/room_icon.png";
import "./editEvent.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import logout from "../../Layout/logout/logout";

class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 3,
      date: "2020-05-23T11:00:00.000Z",
      roomId: 5,
      room_name: "Moscow",
      showPopup: false,
      eventId: "",
      eventTitle: "",
      eventAuthor: "",
      eventDescription: "",
      eventNote: "",
      message: null,
    };
  }

  componentDidMount() {
    const { history } = this.props;
    axios.get("/api/check").then(({ data }) => {
      const { success } = data;

      if (success) {
        let event = this.props.location.state.event;
        this.setState({
          eventId: event.event_id,
          eventTitle: event.event_title,
          eventAuthor: event.event_author,
          eventDescription: event.event_description,
          eventNote: event.event_note,
        });
      } else return history.push("/login");
    });
  }

  handelChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, message: null });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    const editData = {
      eventId: this.state.eventId,
      eventTitle: this.state.eventTitle,
      eventAuthor: this.state.eventAuthor,
      eventDescription: this.state.eventDescription,
      eventNote: this.state.eventNote,
    };
    axios
      .post("/api/update-event", editData)
      .then((response) => this.setState({ showPopup: !this.state.showPopup }))
      .catch((err) => this.setState({ message: err.response.data.message }));
  };

  render() {
    const { eventTitle, eventAuthor, eventDescription, eventNote } = this.state;
    return (
      <div>
              <div className="logout">
          <p
            onClick={() => {
              logout();
            }}
          >
            Logout
          </p>
        </div>

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
        <form className="edit_form">
          <p>
            Please re-fill the following fileds to complete your EDIT process:
          </p>
          <hr className="label_line" />
          <input
            type="text"
            name="eventTitle"
            onChange={this.handelChange}
            placeholder="Event Title *"
            value={eventTitle}
          />
          <input
            type="text"
            name="eventAuthor"
            onChange={this.handelChange}
            placeholder="Event Author *"
            value={eventAuthor}
          />
          <input
            type="text"
            name="eventDescription"
            onChange={this.handelChange}
            placeholder="Event Description"
            value={eventDescription}
          />
          <input
            type="text"
            name="eventNote"
            onChange={this.handelChange}
            placeholder=" event Notes"
            value={eventNote}
          />
          {this.state.message ? (
            <p className="edit_form_message"> {this.state.message} </p>
          ) : null}

          <div className="buttons_continer">
            <Link to="/home" className="text-link">
              <button className="back_button">Back</button>
            </Link>
            <button
              type="submit"
              onClick={this.handelSubmit}
              className="save_button"
            >
              Save
            </button>
          </div>
        </form>
        {this.state.showPopup ? <Popup /> : null}
      </div>
    );
  }
}

export default EditEvent;
