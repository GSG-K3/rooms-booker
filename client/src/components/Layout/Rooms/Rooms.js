import React, { Component } from "react";
import axios from "axios";
import "./style.css";

import SearchAvailableRooms from "../SearchAvailableRooms/SearchAvailableRooms";
class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      shownCardId: "",
      show: false,
    };
  }

  componentDidMount() {
    axios
      .get("/api/rooms")
      .then((res) => this.setState({ rooms: res.data }))
      .catch((err) => console.log(err));
  }

  showInfo = (id) => {
    this.setState((prevState) => ({
      shownCardId: id,
      show: !prevState.show,
    }));
  };

  render() {
    const { rooms, shownCardId, show } = this.state;
    return (
      <div>
      <ul className="rooms">
        {rooms.map((rooms) => {
          return (
            <div key={rooms.room_id} className="rooms__card">
              <h2 onClick={() => this.showInfo(rooms.room_id)}>
                {rooms.room_name}
              </h2>
              {rooms.room_id === shownCardId && show ? (
                <div className="rooms__card__content">
                  <li className="li"> capacity : {rooms.capacity}</li>
                  <li className="li"> space : {rooms.space + " m"}</li>
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
          );
        })} 
      </ul></div>
     
    );
  }
}

export default Rooms;
