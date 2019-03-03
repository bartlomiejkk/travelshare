import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MainNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">
                TravelShare
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MainNavBar;
