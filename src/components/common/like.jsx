import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";

export class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        style={{ cursor: "pointer", color: "blue" }}
        onClick={() => this.props.onClick()}
        className={classes}
      />
    );
  }
}

export default Like;
