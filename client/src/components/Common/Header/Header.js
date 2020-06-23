import React, { Component } from "react";
import GSGlog from "../../../Images/gsg_logo.jpg";
import Profile from "../../../Images/Ellipse 2.jpg";
import "./Header.css";
import { Link } from "react-router-dom";
import logout from "../../Layout/logout/logout";

// through withRouter You can get access to the history object’s properties
// withRouter will pass updated match,location, and history props to the wrapped component whenever it renders.
import { withRouter } from "react-router";
import axios from "axios";
import Login from "../../Layout/Login/Login";

class Header extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      email: "",
      userId: "",
      userName: "",
      success: false,
      open: false,
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };
  handleButtonClick = () => {
    axios.get("/api/check").then(({ data }) => {
      const { success } = data;

      this.setState((state) => {
        return {
          open: !state.open,
          success: success,
        };
      });
    });
  };

  show = () => {
    const { history } = this.props;
    axios.get("/api/check").then(({ data }) => {
      const { success, email, userId, userName } = data;
      if (success) {
        this.setState({ email, userId, userName }, () => {
          history.push(`/home/${userId}`);
        });
      } else {
        return history.push("/login");
      }
    });
  };

  render() {
    const { userId } = this.state;
    return (
      <div className="header">

        <Link to={"/"} className="header_link">
          <img
            className="logo"
            src={GSGlog}
            alt="logo"
            onClick={this.showlog}
          />
        </Link>
        {/*         <Link to = {{pathname:`/home/${userId}`}}>
          <img className='profile' src={Profile} alt='profile' onClick={this.handleButtonClick}>/></img> </Link>
 */}


 <div className="App">
        <div className="container" ref={this.container}>
        <button type="button" className="profile" class="button" onClick={this.handleButtonClick}>
            ☰
          </button>

          
          {this.state.open && (
            <div class="container">
              <ul className="ul">
              <li  onClick={this.show} >
                
                {this.state.success ? (
                    <div className="Home">
                      <p>
                        Home
                      </p>
                    </div>
                  ) : <p> Login </p>} </li>
                  {this.state.success ? ( <li>
                    <div>
                      <p
                        onClick={() => {
                          logout();
                        }}
                      >
                        Logout
                      </p>
                    </div>
                  </li>) : null}
              </ul>
            </div>
          )}
        </div>
      </div>





{/*         <div className="container" ref={this.container}>
          <img
            className="profile"
            src={Profile}
            alt="profile"
            onClick={this.handleButtonClick}
          />
          {this.state.open && (
            <div class="container">
              <ul className="ul">
                <li  onClick={this.show} >
                
                {this.state.success ? (
                    <div className="Home">
                      <p>
                        Home
                      </p>
                    </div>
                  ) : <p> Login </p>} </li>
               
                  {this.state.success ? ( <li>
                    <div>
                      <p
                        onClick={() => {
                          logout();
                        }}
                      >
                        Logout
                      </p>
                    </div>
                  </li>) : null}
                
              </ul>
            </div>
          )}
        </div>
 */}    
   </div>
    );
  }
}

export default withRouter(Header);
