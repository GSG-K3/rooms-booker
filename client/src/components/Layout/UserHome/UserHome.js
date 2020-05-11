import React, { Component } from "react";
import Profile from "../../../Images/Ellipse 2.jpg";
import Delete from "../../../Images/delete.jpg";
import Edit from "../../../Images/Edit.png";
import { Link } from "react-router-dom";
import "./userHome.css";
import axios from "axios";
import Popup from "../../Common/DeleteEvent/Popup";
class UserHome extends Component {
  goBack = () => {
    this.props.history.goBack();
  };
  state = {
    events: [],
    showPopup: false,
    eventId: "",
    eventName:""
  };
  componentDidMount() {

    const id = 3;
    axios
      .get(`/api/user-events/${id}`)
      .then((res) => this.setState({ events: res.data }))
      .catch((err) => console.log(err));
  }

  handelSubmit = (id,name) => {
    this.setState({ showPopup: !this.state.showPopup, eventId: id , eventName:name});
  };

  render() {
    return (
      <div className="component_continer">
        <div className="user_profile__div">
          <img src={Profile} />
          <h2>Bayan_Seder</h2>
        </div>
        <div className="events_continer__div">
          <h3 className="events">Your Events</h3>
          {this.state.events.map((event) => {
            return (
              <div key={event.event_id} className="event_card">
                <div className="event_title">
                  <h3>{event.event_title}</h3>
                  <p>{event.event_date}</p>
                </div>
                <div className="event_option">
                  <div>
                    <img
                      onClick={() => {
                        this.handelSubmit(event.event_id,event.event_title);
                      }}
                      src={Delete}
                      alt="delete"
                    />
                  </div>
                  <div>
                    <Link
                      to={{
                        pathname: `/event/edit/${event.event_id}`,
                        state: { event: event },
                      }}
                      className="btn"
                    >
                      <img src={Edit} alt="edit" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="back_button"
          onClick={() => {
            this.goBack();
          }}
        >
          Back
        </button>
        {this.state.showPopup ? (
          <Popup
            handelSubmit={this.handelSubmit}
            eventId={this.state.eventId}
            eventName={this.state.eventName}

          />
        ) : null}
      </div>
    );
  }
}
export default UserHome;
