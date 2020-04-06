import React, { Component } from "react";
import { Link } from "react-router-dom";

export class singleArticle extends Component {
  state = {
    article: {},
    comments: [],
    body: "",
    user: ""
  };

  componentDidMount() {
    const { slug } = this.props.match.params;
    fetch(`https://conduit.productionready.io/api/articles/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${localStorage.getItem("authToken")}`
      }
    })
      .then(res => res.json())
      .then(({ article }) => this.setState({ article: article }));

    fetch(`https://conduit.productionready.io/api/articles/${slug}/comments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${localStorage.getItem("authToken")}`
      }
    })
      .then(res => res.json())
      .then(comments => {
        console.log(comments.comments);
        this.setState({ comments: comments.comments });
      });
  }

  blogDelete = () => {
    const { slug } = this.props.match.params;
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>Title</h1>
          <div>
            <img></img>
            <h6>author</h6>
          </div>
          <div>
            <h3>article body</h3>
          </div>
          <div>
            <form>
              <textarea></textarea>
              <input type="submit"></input>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default singleArticle;
