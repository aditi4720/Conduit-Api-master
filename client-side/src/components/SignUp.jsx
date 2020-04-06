import React, { Component } from "react";
import "../signup.css";
import { withRouter } from "react-router-dom";
import Loader from "./Loader";

export class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    loading: false
  };

  handleSubmit = event => {
    this.setState({ loading: true });
    event.preventDefault();
    fetch("https://conduit.productionready.io/api/users", {
      method: "POST",
      body: JSON.stringify({ user: this.state }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(({ user }) => {
        this.props.changeUser(user);
        this.props.history.push("/home");
        this.setState({ loading: false });
      });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return this.state.loading ? (
      <Loader />
    ) : (
      <>
        <div className="form-banner">
          <h1>Sign Up</h1>
          <p>Need an account?</p>
        </div>
        <div className="form-container">
          <form className="form-section" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
            ></input>
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            ></input>
          </form>
          <button className="form-btn" onClick={this.handleSubmit}>
            Sign Up
          </button>
        </div>
      </>
    );
  }
}

export default withRouter(SignUp);
