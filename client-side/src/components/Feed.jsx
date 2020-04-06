import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

export default function Feed(props) {
  return (
    <>
      <div className="feed-container">
        <div>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/">Your Feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Global Feed</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div>
          <ul>
            {props.articles &&
              props.articles.map(article => (
                <Card style={{ width: "50rem" }}>
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>{article.description}</Card.Text>
                    <Card.Link href="/article">Read More</Card.Link>
                    <Card.Link href="/profile">
                      {article.author.username}
                    </Card.Link>
                  </Card.Body>
                </Card>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
