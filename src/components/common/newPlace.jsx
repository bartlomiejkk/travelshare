import React from "react";
import { Link } from "react-router-dom";

const NewPlace = () => {
  return (
    <div>
      <Link to="/places/new" style={{ color: "white", textDecoration: "none" }}>
        <button className="btn btn-primary">Add location </button>
      </Link>
    </div>
  );
};

export default NewPlace;
