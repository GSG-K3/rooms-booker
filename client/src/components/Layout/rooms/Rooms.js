import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/rooms")
      .then((res) => this.setState({ rooms: res.data }))
      .catch((err) => console.log(err));
  }

  showInfo = (e) => {
    const info = e.target.nextSibling;
    
    if (info === null || info.className === "li" ) return;
    if (info.style.display === "block") {
      info.style.display = "none";

    } else {
      info.style.display = "block";

    }
  };

  render() {
    const { rooms } = this.state;
    return (
      <ul className="rooms">
        {rooms.map((rooms) => {
          return (
            <div>
              <div onClick={this.showInfo} className="rooms__card">
                <h2 >{rooms.room_name}</h2>
                <div className="rooms__card__content">
                  <li  className="li"> capacity : {rooms.capacity}</li>
                  <li  className="li"> space : {rooms.space + ' m'}</li>
                  <li  className="li"> {rooms.datashow ? 'DataShow' : null}</li>
                  <li  className="li"> {rooms.wifi? 'Wifi' : null }</li>
                  <li  className="li"> {rooms.coffee_bar ? 'Coffee Bar' : null}</li>
                  <li  className="li"> {rooms.white_board ? 'White Board ' : null}</li>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default Rooms;


{

