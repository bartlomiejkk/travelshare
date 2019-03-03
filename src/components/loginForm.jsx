import React from "react";
import Form from "./common/form";
import MainNavBar from "./mainNavBar";
import { Link } from "react-router-dom";
const Joi = require("joi");

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .max(32)
      .label("Username"),
    password: Joi.string()
      .required()
      .min(6)
      .max(16)
      .label("Password")
  };

  doSubmit = () => {
    // Call the server
    console.log("Form submitted.");
  };

  render() {
    return (
      <div>
        <MainNavBar />
        <h1 id="header">TravelShare</h1>
        <div className="loginFormWrapper">
          <form className="loginForm" onSubmit={this.handleSubmit}>
            <h2 id="formTextHeader">Login</h2>
            <br />
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Sumbit")}
            <small id="formTextSmall" className="form-text">
              Don't have an account? Click <Link to="/register">here</Link> to
              sign up!
            </small>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
