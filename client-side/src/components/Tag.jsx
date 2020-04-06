import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import "../tag.css";

export class Tag extends Component {
  render() {
    return (
      <>
        <Badge pill variant="secondary" className="tag-btn">
          Tag
        </Badge>
      </>
    );
  }
}

export default Tag;
