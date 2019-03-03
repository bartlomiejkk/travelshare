import React from "react";

const Search = props => {
  return (
    <div>
      <div className="form-group">
        <input
          name="search"
          placeholder="Search..."
          className="form-control"
          onChange={props.onChange(props)}
        />
      </div>
    </div>
  );
};

export default Search;
