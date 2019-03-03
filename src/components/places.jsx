import React, { Component } from "react";
import { getPlaces } from "../Service/services/placeService";
import { paginate } from "../utils/paginate";
import { getCountries } from "../Service/services/countryService";
import _ from "lodash";
import Country from "./common/country";
import Pagination from "./common/pagination";
import PlacesTable from "./placesTable";
import NavBar from "./common/navBar";
import MainNavBar from "./mainNavBar";
import NewPlace from "./common/newPlace";
import Search from "./common/search";

class Places extends Component {
  state = {
    places: "",
    currentPage: 1,
    pageSize: 7,
    countries: [],
    selectedCountry: "",
    sortColumn: { path: "name", order: "asc" }
  };

  componentDidMount() {
    const countries = [{ _id: "", name: "All countries" }, ...getCountries()];
    const places = [...getPlaces()];
    places.map(p => {
      return (p.imageLength = p.imageSrc.length);
    });
    this.setState({
      places,
      countries,
      selectedCountry: countries[0]
    });
  }

  handleLike = place => {
    const places = this.state.places;
    const index = places.indexOf(place);
    places[index] = { ...places[index] };
    places[index].liked = !places[index].liked;
    this.setState({ places });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSearchChange = ({ currentTarget }) => {
    this.setState({ selectedCountry: "", currentPage: 1 });
    const data = getPlaces();
    const filtered = data.filter(data =>
      data.name.toLowerCase().includes(currentTarget.value.toLowerCase())
    );
    this.setState({ places: filtered });
  };

  handleCountrySelect = country => {
    this.setState({ selectedCountry: country, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      places: allPlaces,
      pageSize,
      selectedCountry,
      currentPage,
      sortColumn
    } = this.state;

    const filtered =
      selectedCountry && selectedCountry._id
        ? allPlaces.filter(m => m.country._id === selectedCountry._id)
        : allPlaces;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const places = paginate(sorted, currentPage, pageSize);

    return (
      <main style={{ bacgkroundColor: "red" }}>
        <MainNavBar />
        <div className="row">
          <div className="col-3">
            <Country
              items={this.state.countries}
              selectedItem={this.state.selectedCountry}
              onItemSelect={this.handleCountrySelect}
            />
          </div>
          <div className="col">
            <NewPlace />
            <NavBar count={filtered.length} />
            <Search onChange={() => this.handleSearchChange} />
            <PlacesTable
              places={places}
              sortColumn={this.state.sortColumn}
              onDelete={this.handleBook}
              onLike={this.handleLike}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Places;
