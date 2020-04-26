import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <form>
        <div className="login-form">
          <h1> LogIn </h1>

          <div className="login-form__email">
            <input type="email" className="login-form__email__input" placeholder="Email" />
          </div>

          <div className="login-form__password">
            <input
              type="password"
              className="login-form__password__input"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-form__login__btn">
            Login
          </button>
          <button type="submit" className="login-form__back__btn">
            Back
          </button>
        </div>
      </form>
    );
  }
}
export default Login;
