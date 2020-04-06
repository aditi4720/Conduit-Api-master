import React, { Component } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import SignUp from "../src/components/SignUp";
import SignIn from "../src/components/SignIn";
import Cover from "./components/Cover";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile";
import { Route, Switch } from "react-router-dom";
import NewArticle from "./components/NewArticle";
import Article from "./components/Article";
import Settings from "./components/Settings";

export class App extends Component {
  state = {
    user: null
  };

  changeUser = user => {
    this.setState({ user });
  };

  vaildUser = token => {
    token = `Token ${token}`;
    fetch("https://conduit.productionready.io/api/user", {
      headers: {
        authorization: token
      }
    })
      .then(data => data.json())
      .then(user => {
        this.setState({ user });
      });
  };
  componentDidMount() {
    if (localStorage.authToken) {
      this.vaildUser(JSON.parse(localStorage.authToken));
    }
  }

  publicRoutes = () => {
    return (
      <Switch>
        <Route exact path="/" component={Cover} />
        <Route
          exactuser
          path="/signin"
          render={() => <SignIn changeUser={this.changeUser} />}
        />
        <Route
          exact
          path="/signup"
          render={() => <SignUp changeUser={this.changeUser} />}
        />
      </Switch>
    );
  };

  privateRoutes = () => {
    return (
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/newarticle" component={NewArticle} />
        <Route path="/article" component={Article} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
      </Switch>
    );
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <Header user={user} />
        {user || localStorage.token
          ? this.privateRoutes()
          : this.publicRoutes()}
      </>
    );
  }
}

export default App;
