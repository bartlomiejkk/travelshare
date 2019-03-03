import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Places from "./components/places.jsx";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm.jsx";
import NewPlaceForm from "./components/newPlaceForm.jsx";
import DisplayPlace from "./components/displayPlace";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/places/explore" component={DisplayPlace} />
          <Route path="/places/:id" component={NewPlaceForm} />
          <Route path="/home" component={Places} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
