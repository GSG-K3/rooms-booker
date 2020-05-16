import React, { Component } from "react";
import Profile from "../../../Images/Ellipse 2.jpg";
import Delete from "../../../Images/delete.jpg";
import Edit from "../../../Images/Edit.png";
import { Link } from "react-router-dom";
import ServerErr from '../../Errors/Err500/ServerErr'
import ClipLoader from 'react-spinners/ClipLoader'

import "./userHome.css";
import axios from "axios";
class UserHome extends Component {

  goBack = () => {
    this.props.history.push('/');
  };

  state = {
    events: [],
    email: "",
    userId: "",
    userName: "",
    errorFound: false
  };

  componentDidMount() {

    const { history } = this.props
    axios.get('/api/check').then(({ data }) => {

      const { success, email, userId, userName } = data

      if (success) {
        this.setState({
          email, userId, userName
        }, () => {

          const { userId } = this.state
          axios.get(`/api/user-events/${userId}`)
            .then(res => {
              this.setState({ events: res.data })
            }
            )
            .catch((err) => this.setState({ errorFound: !this.state.errorFound }));

        })

      } else {
        return history.push('/login')
      }

    })
  }

  render() {
    const { userName, events } = this.state

    return (
      <>
        {
          this.state.errorFound ?
            <ServerErr />
            :
            events == [] || userName == "" ?
              <div className="loading-spinner">
                <ClipLoader
                  className="loading-spinner__home"
                  sizeUnit={'px'}
                  size={80}
                  color={'#123abc'}
                />
              </div>
              :
              <div className="component_continer">
                <div className="user_profile__div">
                  <img src={Profile} />
                  <h2>{userName}</h2>
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
                            <img src={Delete} alt="delete" />
                          </div>
                          <div>
                            <Link
                              to={{
                                pathname: `/event/edit/${event.event_id}`,
                                state: { event: event },
                              }}
                              className="btn">

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
              </div>
        }
      </>
    );
  }
}
export default UserHome;
