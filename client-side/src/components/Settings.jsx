import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class Settings extends Component {
  state = {
    user: {
      image: "",
      bio: "",
      email: "",
      username: "",
      password: ""
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      user: {
        [name]: value
      }
    });
  };

  componentDidMount = () => {
    fetch("https://conduit.productionready.io/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${localStorage.getItem("authToken")}`
      }
    })
      .then(res => res.json())
      .then(({ user }) => {
        this.setState({ user: user });
      });
  };

  handleClick = () => {
    fetch("https://conduit.productionready.io/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "appplication/json",
        authorization: `Token ${localStorage.getItem("authToken")}`
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(user => {
        this.props.history.push("/");
      });
  };

  // handleLogout = () => {
  //   localStorage.removeItem("authToken");
  //   this.props.history.push("/");
  // };

  render() {
    const { image, bio, username, email, password } = this.state.user;
    return (
      <>
        {localStorage.authToken ? (
          <>
            <div className="form-banner">
              <h1>Settings</h1>
            </div>
            <div className="form-container">
              <form className="form-section">
                <input
                  type="text"
                  placeholder="URL of the profile picture"
                  value={image}
                  onChange={this.handleChange}
                  name="image"
                ></input>
                <input
                  cols="20"
                  type="text"
                  placeholder="Bio"
                  value={bio}
                  onChange={this.handleChange}
                  name="bio"
                ></input>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                  name="username"
                ></input>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleChange}
                  name="email"
                ></input>
                <input
                  type="password"
                  placeholder="New Password"
                  value={password}
                  onChange={this.handleChange}
                  name="password"
                ></input>
              </form>
              <button className="form-btn" onClick={this.handleClick}>
                Update Profile
              </button>
              <button className="form-btn" onClick={this.handleLogout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Redirect to="/login" />
          </>
        )}
      </>
    );
  }
}

export default Settings;
