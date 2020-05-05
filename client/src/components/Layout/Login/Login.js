import React, { Component } from "react";
import "./Login.css";
import axios from "axios";

class Login extends Component {

state = {
  email:'',
  password:'',
  notEmpty: false,
  message:''
}

handleForm = (e) => {
  e.preventDefault();
  const data = {email: this.state.email, password: this.state.password }

  axios
.post("/api/login",data)
.then(result => {
  if (result.data.status === 'sucess') {
alert('sucess');

  } else {
  this.setState({notEmpty:true , message: result.data.message })
  }
})
.catch((err) => console.log(err))
}

handleInput = (e)=> {
  e.preventDefault();
const name = e.target.name
const value = e.target.value
this.setState({[name]: value, notEmpty:false})
}

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <div className="login-form">
          <h1> LogIn </h1>

          <div className="login-form__email">
            <input type="email" name="email"  onChange={this.handleInput}
 className="login-form__email__input" placeholder="Email" />
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
          {this.state.notEmpty ? <p> {this.state.message} </p> : null}

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
