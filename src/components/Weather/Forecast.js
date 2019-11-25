import React, { Component } from "react";
import _ from "lodash";
import Loader from "../Utils/Loader";
import { getForecastData } from "../../services/OwpService";
import ForecastItem from "./ForecastItem";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: "",
      data: null
    };
  }

  async componentDidMount() {
    const city = this.props.match.params.city;

    try {
      const data = await getForecastData(city);
      const list = data.list;

      const groupedList = _.groupBy(list, el => el.dt_txt.substring(0, 10));
      console.log(groupedList);

      this.setState({
        loading: false,
        error: "",
        data: groupedList
      });
    } catch {
      this.setState({
        error: "Error"
      });
    }
  }

  render = () => {
    const city = this.props.match.params.city;
    // On peut rendre un contenu JSX dans une constante ou une variable
    // Ici, de manière conditionnelle car je souhaite afficher mon titre H1 tout le temps
    const loader = this.state.loading ? <Loader /> : "";
    const error = this.state.error ? "Une erreur est survenue" : "";

    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <a href="/" className="btn btn-sm btn-info">
              Retour à l'accueil
            </a>
          </div>
        </div>
        <div className="row border-bottom mt-1 mb-4">
          <div className="col">
            <h1>{city} : Prévisions sur 5 jours</h1>
          </div>
        </div>
        {loader}
        {error}
        {this.state.data &&
          Object.keys(this.state.data).map((dateForecast, i) => (
            <div key={i}>
              <h2 className="mt-4 border-bottom">{dateForecast}</h2>
              <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                {_.get(this.state.data, dateForecast).map(el => (
                  <ForecastItem
                    timestamp={el.dt}
                    key={el.dt}
                    icon={el.weather[0].id}
                    temperature={el.main.temp}
                    description={el.weather[0].description}
                    clouds={el.clouds.all}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    );
  };
}

export default Forecast;
