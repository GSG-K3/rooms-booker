import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./popup.css";
import DeleteEvent from "../DeleteEvent/DeleteEvent";

class Popup extends Component {
  goBack = () => {
    this.props.handelSubmit();
  };

  render() {
    let id = this.props.eventId;
    return (
      <div className="popup">
        <div className="popup_inner">
          <p>
            Are you sure , you want to delete{" "}
            <strong>{this.props.eventName}</strong> Event
          </p>
          <div className="btns_div">
            <button
              onClick={() => {
                this.goBack();
              }}
              className="back_btn"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                DeleteEvent(id);
              }}
              className="delete_btn"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
