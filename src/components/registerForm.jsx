import React from "react";
import { Link } from "react-router-dom";
import Form from "./common/form";
import MainNavBar from "./mainNavBar";
const Joi = require("joi");

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
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
      .label("Password"),
    name: Joi.string()
      .alphanum()
      .required()
      .max(16)
      .label("Name")
  };

  doSumbit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <MainNavBar />
        <h1 id="header">TravelShare</h1>
        <div className="registerFormWrapper">
          <form className="registerForm">
            <h2 id="formTextHeader">Register</h2>
            <br />
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}
            {this.renderButton("Sumbit")}
            <small id="formTextSmall" className="form-text">
              Already a member? Sign in <Link to="/login">here</Link>!
            </small>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
