import React, { Component } from "react";
import "../banner.css";

export class Banner extends Component {
  render() {
    return (
      <>
        <div className="banner-container">
          <h1>conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </>
    );
  }
}

export default Banner;
