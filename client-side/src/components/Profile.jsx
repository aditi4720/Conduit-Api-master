import React, { Component } from "react";
import "../profile.css";

export class Profile extends Component {
  render() {
    return (
      <>
        <div className="profile-banner">
          <section>
            <img src="" alt="userimage"></img>
            <h1>Username</h1>
          </section>
          <section className="follow-btn">
            <button>+ Follow username</button>
          </section>
        </div>
      </>
    );
  }
}

export default Profile;
