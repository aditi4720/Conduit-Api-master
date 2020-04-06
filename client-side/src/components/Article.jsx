import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../article.css";

export class Article extends Component {
  render() {
    return (
      <>
        <div className="article-banner">
          <div>
            <h1>article title</h1>
          </div>
          <div>
            <div>
              <img></img>
              <div>
                <h6>author-name</h6>
                <date>1oct,2019</date>
              </div>
              <div>
                <Button variant="secondary">+ Follow</Button>
              </div>
              <div>
                <Button variant="secondary">Favourites</Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Article;
