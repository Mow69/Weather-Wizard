import React, { Component } from "react";
import { getCities } from "../../services/CityService";
import Search from "../Utils/Search";
import CityList from "./CityList";

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: Attention ce que je reçois de l'API c'est un objet, or le map() ne s'applique qu'aux tableaux
      citySearch: [],
      search: ""
    };
    this.cities = [];
  }

  componentDidMount = () => {
    getCities().then(cities => {
      this.cities = cities;
      this.setState({
        citySearch: cities
      });
    });
  };

  search = e => {
    const search = e.target.value;
    let citySearch = this.cities;

    if (search !== "") {
      citySearch = this.cities.filter(city => city.name.includes(search));
    }

    this.setState({
      citySearch: citySearch,
      search: search
    });
  };

  render = () => {
    return (
      <>
        <Search handleChange={this.search} searchTerm={this.state.search} />
        <div className="row mt-2">
          <CityList cities={this.state.citySearch} />
        </div>
      </>
    );
  };
}

export default Cities;