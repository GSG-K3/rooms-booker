import React, { Component } from "react";
import Calender from "../../../Images/calendar_icon.png";
import Clock from "../../../Images/clock_icon.png";
import RoomIcon from "../../../Images/room_icon.png";
import "./bookingForm.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import logout from "../../Layout/logout/logout";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 3,
      date: "2020-05-23T11:00:00.000Z",
      roomId: 5,
      roomName: "Moscow",
      reminder: false,
      showPopup: false,
      showNote: false,
    };
  }

  componentDidMount() {
    const { history } = this.props;
    axios.get("/api/check").then(({ data }) => {
      const { success } = data;

      if (!success) return history.push("/login");
    });
  }

  handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  toggleReminder = () => {
    this.setState({ reminder: !this.state.reminder });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.name != null &&
      this.state.title != null &&
      this.state.description != null
    ) {
      const formData = this.state;
      axios
        .post("/api/booking", formData)
        .then((response) => this.setState({ showPopup: !this.state.showPopup }))
        .catch((err) =>
          alert(`An Error happend : ${err.message} !! try again !!`)
        );
    } else this.setState({ showNote: !this.state.showNote });
  };

  render() {
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
            <h4>{this.state.roomName}</h4>
          </div>
        </div>
        <form className="booking_form">
          <p>
            Please re-fill the following fileds to complete your booking
            process:
          </p>
          <hr className="label_line" />
          {this.state.showNote ? (
            <small className="message">Please fill the first 3 fields</small>
          ) : null}
          <input
            type="text"
            name="name"
            onChange={this.handelChange}
            placeholder="Your Name"
          />
          <input
            type="text"
            name="title"
            onChange={this.handelChange}
            placeholder="Event Title"
          />
          <input
            type="text"
            name="description"
            onChange={this.handelChange}
            placeholder="Event Description"
          />
          <input
            type="text"
            name="notes"
            onChange={this.handelChange}
            placeholder=" Notes"
          />
          <div className="remind_me_input__div">
            <label htmlFor="reminder" className="radio_input">
              <input
                type="radio"
                onClick={this.toggleReminder}
                checked={this.state.reminder}
              />
              Remind me
            </label>
          </div>
          <div className="buttons_continer">
            <Link to="/" className="text-link">
              <button className="back_button">Back</button>
            </Link>
            <button
              type="submit"
              onClick={this.handelSubmit}
              className="book_button"
            >
              Book
            </button>
          </div>
        </form>
        {this.state.showPopup ? <Popup room={this.state.roomName} /> : null}
      </div>
    );
  }
}

export default BookingForm;
