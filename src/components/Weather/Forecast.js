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

      // Le tableau "list" dans data contient toutes nos prévisions
      // On analyse la structure des éléments, et on repère l'attribut dt_txt
      // Qui contient la date et l'heure
      // On va donc grouper les éléments du tableau par date uniquement
      // En extrayant la date depuis la chaîne de caractère
      // https://lodash.com/docs/4.17.15#groupBy
      const groupedList = _.groupBy(list, el => el.dt_txt.substring(0, 10));
      // Ma groupedList est donc un objet
      // dont chaque attribut est la date
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
          // Object.keys renvoie un tableau de tous les attributs disponibles dans un objet
          // Ici, on aura par exemple : 2019-11-25, 2019-11-26, etc...
          // On peut donc itérer sur ces attributs, pour refaire une boucle sur leur valeur : un tableau contenant les prévisions
          // la variable dateForecast contiendra donc successivement les dates renvoyées par l'API
          // (NB : On peut rendre un contenu JSX dans une constante ou une variable
          // Ici, de manière conditionnelle car je souhaite afficher mon titre H1 tout le temps)
          Object.keys(this.state.data).map((dateForecast, i) => (
              <div key={i}>
                <h2 className="mt-4 border-bottom">{dateForecast}</h2>
                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                  {/*
                _.get récupère la valeur de l'attribut passé en second paramètre,
                dans l'objet passé en premier paramètre
                https://lodash.com/docs/4.17.15#get
                La valeur située derrière chaque 'dateForecast' est un tableau
                de toutes les prévisions pour cette date.
                On peut donc faire notre boucle imbriquée à ce niveau.
                Chaque élément (appelé 'el' dans la boucle) est donc une prévision.
                */}
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