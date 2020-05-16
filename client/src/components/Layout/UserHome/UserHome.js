import React, { Component } from "react";
import Profile from "../../../Images/Ellipse 2.jpg";
import Delete from "../../../Images/delete.jpg";
import Edit from "../../../Images/Edit.png";
import { Link } from "react-router-dom";
import ServerErr from "../../Errors/Err500/ServerErr";
import ClipLoader from "react-spinners/ClipLoader";
import logout from "../logout/logout"
import "./userHome.css";
import axios from "axios";
import Popup from "../../Common/DeleteEvent/Popup";

class UserHome extends Component {
  goBack = () => {
    this.props.history.push('/');
  };
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      showPopup: false,
      eventId: "",
      eventName: "",
      errorFound: false,
      message: null,
      loading: true,
      email: "",
      userId: "",
      userName: "",

    };
  }


  componentDidMount() {
    const { history } = this.props;
    axios.get("/api/check").then(({ data }) => {
      const { success, email, userId, userName } = data;

      if (success) {
        this.setState({
          email, userId, userName
        }, () => {

          const { userId } = this.state
          axios.get(`/api/user-events/${userId}`)
            .then(res => {
              this.setState({ events: res.data, loading: false })
            }
            )
            .catch((err) => {
              if (err.response.data.status === 403)
                this.setState({ message: err.response.data.message, loading: false });
              else this.setState({ errorFound: !this.state.errorFound });

            })
        })

      } else {
        return history.push("/login");
      }
    });
  }

  handelSubmit = (id, name) => {
    this.setState({
      showPopup: !this.state.showPopup,
      eventId: id,
      eventName: name,
    });
  };

  render() {
    const { events, errorFound, loading, userName } = this.state;

    return (
      <>
        {errorFound ?
          <ServerErr /> : (
            <div className="component_continer">
            <div className="logout">
            <p  onClick={() => {logout()}}>Logout</p>
            </div>

              <div className="user_profile__div">
                <img src={Profile} />
                <h2>{userName}</h2>
              </div>
              <div className="events_continer__div">

                {this.state.message ? <p className="events_message"> {this.state.message} </p> : null}

                <div className="loading-spinner">
                  <ClipLoader
                    className="loading-spinner__home"
                    sizeUnit={"px"}
                    size={80}
                    color={"#123abc"}
                    loading={loading}

                  />
                  <h3 className="events">Your Events</h3>

                </div>

                {events.map((event) => {
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
                              this.handelSubmit(event.event_id, event.event_title);
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
                })
                }
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
          )
        }</>
    )
  }
}
export default UserHome;
