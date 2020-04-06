import React, { Component } from "react";
import "../aside.css";
import Tag from "./Tag";

export class Aside extends Component {
  render() {
    return (
      <>
        <div className="aside-container">
          <div>
            <h6>Popular Tags</h6>
          </div>
          <div className="tag-container">
            <Tag />
            <Tag />
          </div>
        </div>
      </>
    );
  }
}

export default Aside;
