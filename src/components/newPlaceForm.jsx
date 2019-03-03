import React from "react";
import MainNavBar from "./mainNavBar";
import Form from "./common/form";
import { getCountries } from "../Service/services/countryService";
import { getPlace } from "../Service/services/placeService";
const Joi = require("joi");

class NewPlaceForm extends Form {
  state = {
    data: { title: "", countryId: "" },
    countries: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .max(50)
      .label("Place"),
    countryId: Joi.string()
      .required()
      .label("Country"),
    visitors: Joi.number()
      .required()
      .max(300)
      .min(0)
      .label("Visitors")
  };

  componentDidMount() {
    const countries = getCountries();
    this.setState({ countries });

    const placeId = this.props.match.params.id;
    if (placeId === "new") return;

    const place = getPlace(placeId);
    if (!place) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(place) });
  }

  mapToViewModel(place) {
    return {
      _id: place._id,
      title: place.title,
      countryId: place.country._id,
      imageLength: place.imageLength,
      visitors: place.visitors
    };
  }

  doSubmit = () => {
    // Talk to the server
  };

  render() {
    return (
      <div>
        <MainNavBar />
        <div className="newPlaceFormWrapper">
          <h2 id="newPlaceHeader">Share Your Moments</h2>
          <form id="newPlaceForm" onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Place")}
            {this.renderSelect("countryId", "Country", this.state.countries)}
            {this.renderInput("visitors", "Visitors (M/year)")}
            {this.renderFile("file", "Photograph", "image/png")}
            {/* {this.renderButton("Add", "newPlaceForm")}  -- Not connected to the database */}
          </form>
        </div>
      </div>
    );
  }
}

export default NewPlaceForm;
