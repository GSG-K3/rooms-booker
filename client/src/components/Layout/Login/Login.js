import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <form>
        <div className="login-form">
          <h1> LogIn </h1>

          <div className="form-email">
            <input type="email" className="email-input" placeholder="Email" />
          </div>

          <div className="form-password">
            <input
              type="password"
              className="password-input"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <button type="submit" className="back-btn">
            Back
          </button>
        </div>
      </form>
    );
  }
}
export default Login;
