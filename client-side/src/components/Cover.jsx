import React, { Component } from "react";
import Banner from "../components/Banner";
import Feed from "../components/Feed";
import Aside from "../components/Aside";
import "../home.css";

export class Cover extends Component {
  state = {
    articles: null
  };

  componentDidMount() {
    fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0")
      .then(res => res.json())
      .then(({ articles }) => this.setState({ articles }));
  }

  render() {
    return (
      <>
        <h1>COVER</h1>
        <div>
          <Banner />
        </div>
        <div className="body-container">
          <Feed articles={this.state.articles} />
          <Aside />
        </div>
      </>
    );
  }
}

export default Cover;
