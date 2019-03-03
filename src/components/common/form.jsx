import React, { Component } from "react";
import Input from "./input";
import Select from "./select";
import File from "./file";
const Joi = require("joi");

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return !error ? null : error.details[0].message;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton = (label, id = "", ...rest) => {
    return (
      <button
        id={`sumbitBtn-${id}`}
        className="btn btn-info"
        disabled={this.validate() ? true : false}
        {...rest}
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        type={type}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { errors } = this.state;
    return (
      <Select
        name={name}
        label={label}
        options={options}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };

  renderFile = (name, label, accept) => {
    const { errors } = this.state;
    return (
      <File
        name={name}
        label={label}
        accept={accept}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };
}
export default Form;
