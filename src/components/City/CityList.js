import React, { Component } from "react";
import City from "./City";

class CityList extends Component {
  render = () => {
    const { cities } = this.props;
    return cities.map(city => (
      <City id={city.id} name={city.name} key={city.id}  temp={city.main.temp} temp_min={city.main.temp_min} temp_max={city.main.temp_max} />
    ));
  };
}

export default CityList;
