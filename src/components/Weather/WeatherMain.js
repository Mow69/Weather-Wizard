import React, { Component } from "react";
import { getWeatherData } from "../../services/OwpService";
import Search from "../Search/Search";
import Weather from "./Weather";

class WeatherMain extends Component {
  constructor(props) {
    super(props);

    // Initialisation du state
    // Avant même l'affichage du composant
    this.state = {
      searchTerm: "",
      error: "",
      city: "",
      icon: "",
      temperature: "",
      status: "",
      loading: true,
      displayWeatherCard: false
    };
  }

  updateSearchValue = e => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    this.setState({
      searchTerm: searchTerm
    });
  };

  enterKeySearch = e => {
    if (e.key === "Enter") {
      this.search(e);
    }
  };

  search = async e => {
    this.setState({ displayWeatherCard: true, loading: true });
    console.log("Mon terme de recherche est : ", this.state.searchTerm);

    try {
      const data = await getWeatherData(this.state.searchTerm);

      console.log("Mes données dans search", data);

      setTimeout(() => {
        this.setState({
          city: data.name,
          icon: data.weather[0].id,
          temperature: data.main.temp,
          status: data.weather[0].description,
          loading: false,
          displayWeatherCard: true,
          error: ""
        });
      }, 1400);
    } catch (err) {
      this.setState({
        loading: false,
        displayWeatherCard: false,
        error: err.response.data.message
      });
    }
  };

  render = () => {
    const { city, icon, temperature, status } = this.state;

    return (
      <>
        <Search
          error={this.state.error}
          handleSubmit={this.search}
          searchValue={this.state.searchTerm}
          updateValue={this.updateSearchValue}
          handleKeyDown={this.enterKeySearch}
          textPlaceholder="Rechercher une ville..."
        />
        <Weather
          loading={this.state.loading}
          display={this.state.displayWeatherCard}
          city={city}
          icon={icon}
          status={status}
          temperature={temperature}
        />
      </>
    );
  };
}

export default WeatherMain;
