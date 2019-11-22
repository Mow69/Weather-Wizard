import React, { Component } from "react";
import Header from "./Header";
import Weather from "./Weather/Weather";
import Search from "./Search/Search";
import { getWeatherData } from "../services/OwpService";

class App extends Component {
  constructor(props) {
    super(props);

    // Initialisation du state
    // Avant même l'affichage du composant
    this.state = {
      searchTerm: "",
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
    if (e.key === 'Enter') {
      this.search(e);
    }
  };

  search = async e => {
    this.setState({ displayWeatherCard: true, loading: true });
    const data = await getWeatherData(this.state.searchTerm);

    console.log("Mes données dans search", data);

    setTimeout(() => {
      this.setState({
        city: data.name,
        icon: data.weather[0].id,
        temperature: data.main.temp,
        status: data.weather[0].description,
        loading: false,
        displayWeatherCard: true
      });
    }, 1400);
  };

  render = () => {
    const { city, icon, temperature, status } = this.state;

    return (
      <>
        <Header />
        <Search
          handleSubmit={this.search}
          searchValue={this.state.searchTerm}
          updateValue={this.updateSearchValue}
          handleKeyDown={this.enterKeySearch}
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

export default App;
