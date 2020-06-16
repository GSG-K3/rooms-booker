import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    message: null,
  };

  componentDidMount() {
    const { history } = this.props;
    axios.get("/api/check").then(({ data }) => {
      const { success,userId} = data;
      if (success)  {
        this.setState({userId: userId})
        history.push(`/home/${userId}`)
      }        
    });
  }

  handleForm = (e) => {
    e.preventDefault();
    const data = { email: this.state.email, password: this.state.password };

    axios
      .post("/api/login", data)
      .then((result) => {
        if (result.status === 200) {
          this.props.history.push(`/home/${result.data.userId}`);
        }
      })
      .catch((err) => this.setState({ message: err.response.data.message }));
  };

  handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value, message: null });
  };
  render() {
    return (
      <form className="form-container">
        <div className="login-form">
          <h1> LogIn </h1>
          <div className="login-form__email">
            <input
              type="email"
              name="email"
              onChange={this.handleInput}
              className="login-form__email__input"
              placeholder="Email"
            />
          </div>
          <div className="login-form__password">
            <input
              type="password"
              name="password"
              onChange={this.handleInput}
              className="login-form__password__input"
              placeholder="Password"
            />
          </div>
          {this.state.message ? <p> {this.state.message} </p> : null}
          <button
            type="submit"
            onClick={this.handleForm}
            className="login-form__login__btn"
          >
            Login
          </button>

            <button type="submit" className="login-form__back__btn" onClick={()=> this.props.history.push("/")}
            > Back
            </button>
        </div>
      </form>
    );
  }
}
export default Login;
