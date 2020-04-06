import React from "react";
import { Link } from "react-router-dom";
import "../header.css";

export default function Header(props) {
  return (
    <div>
      <>
        <nav className="navbar">
          <div className="logo">
            <h1>
              <Link to="/" className="logo-txt">
                conduit
              </Link>
            </h1>
          </div>
          <ul className="navbar-list">
            {props.user ? (
              <>
                <Link to="/home" className="link-txt">
                  Home
                </Link>
                <Link to="/newarticle" className="link-txt">
                  New Article
                </Link>
                <Link to="/settings" className="link-txt">
                  Settings
                </Link>
                <Link to="/profile" className="link-txt">
                  {props.user.user.username}
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="link-txt">
                  Cover
                </Link>
                <Link to="/signin" className="link-txt">
                  Sign In
                </Link>
                <Link to="/signup" className="link-txt">
                  Sign Up
                </Link>
              </>
            )}
          </ul>
        </nav>
      </>
    </div>
  );
}
