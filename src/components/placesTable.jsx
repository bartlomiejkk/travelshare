import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Like from "./common/like";
import { Link } from "react-router-dom";

class PlacesTable extends Component {
  render() {
    const { places, sortColumn, onDelete, onLike, onSort } = this.props;
    const columns = [
      { path: "name", label: "Place" },
      { path: "country.name", label: "Country" },
      { path: "imageLength", label: "Photos" },
      { path: "visitors", label: "Visitors (M/year)" },
      {
        key: "like",
        content: place => (
          <Like liked={place.liked} onClick={() => onLike(place)} />
        )
      },
      {
        key: "delete",
        content: place => (
          <Link
            to={`/places/explore?id=${place._id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <button className="btn btn-warning btn-sm">Explore</button>
          </Link>
        )
      }
    ];
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody
          data={places}
          onDelete={onDelete}
          onLike={onLike}
          columns={columns}
        />
      </table>
    );
  }
}

export default PlacesTable;
