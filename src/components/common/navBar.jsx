import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar">
      <span className="navbar-brand mb-0 h1">
        Displaying {props.count} {props.count === 1 ? "location" : "locations"}
      </span>
    </nav>
  );
};

export default NavBar;
