import React, { Component } from "react";
import queryString from "query-string";
import "font-awesome/css/font-awesome.css";
import MainNavBar from "./mainNavBar";
import { getPlace } from "../Service/services/placeService";
import { getStory } from "../Service/services/storyService";

class DisplayPlace extends Component {
  state = {
    index: 0,
    classes: "infoText"
  };

  render() {
    const { location, history } = this.props;
    const { id } = queryString.parse(location.search);
    const place = getPlace(id);
    const story = getStory(id).story;

    if (!place || place.imageSrc.length === 0) {
      history.replace("/not-found");
      return;
    }

    const nextImage = () => {
      if (this.state.index !== place.imageSrc.length - 1) {
        const index = this.state.index + 1;
        this.setState({ index });
      }
    };

    const previousImage = () => {
      if (this.state.index !== 0) {
        const index = this.state.index - 1;
        this.setState({ index });
      }
    };

    const handleButtonClass = () => {
      return this.state.classes === "infoText show"
        ? "btn btn-warning btn-sm"
        : "btn btn-secondary btn-sm";
    };

    const handleClasses = () => {
      if (this.state.classes === "infoText")
        this.setState({ classes: "infoText show" });

      if (this.state.classes === "infoText show")
        this.setState({ classes: "infoText hide" });

      if (this.state.classes === "infoText hide")
        this.setState({ classes: "infoText show" });
    };

    return (
      <main>
        <MainNavBar />
        <h1 id="newPlaceHeader">{`${place.name} (${this.state.index + 1}/${
          place.imageSrc.length
        })`}</h1>
        <div style={{ border: "1px solid black" }}>
          <div className={this.state.classes}>
            <div id="innerInfoText">{story}</div>
          </div>
          <img
            style={{ width: "100%", height: 550 }}
            alt={place.name}
            src={place.imageSrc[this.state.index]}
          />
          <br />
          <button
            className="btn btn-warning btn-sm"
            disabled={this.state.index === 0}
            onClick={() => previousImage()}
            style={{ width: "50%", height: 50 }}
          >
            Previous
          </button>
          <button
            className="btn btn-warning btn-sm"
            disabled={this.state.index === place.imageSrc.length - 1}
            onClick={() => nextImage()}
            style={{ width: "50%", height: 50 }}
          >
            Next
          </button>
        </div>
        <br />
        <div>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => history.push("/home")}
            style={{ width: 40, height: 40, fontSize: 18 }}
          >
            <i className="fa fa-arrow-left" />
          </button>
          <button
            className={handleButtonClass()}
            onClick={() => handleClasses()}
            style={{
              width: 40,
              height: 40,
              marginLeft: "44.7%"
            }}
          >
            <i className="fa fa-info" style={{ fontSize: 24 }} />
          </button>
        </div>
      </main>
    );
  }
}

export default DisplayPlace;
