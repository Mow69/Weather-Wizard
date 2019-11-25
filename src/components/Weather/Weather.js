import React from "react";
import Icon from "./Icon/";
import Temperature from "./Temperature";

import "./Weather.scss";
import Loader from "../Utils/Loader";

// Composant fonctionnel
// Il reçoit UN argument qu'on éclate en plusieurs variables avec la syntaxe de décomposition
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition
// Ce composant n'a aucun état
// Il ne fait que recevoir des propriétés
// Et les affiche
const Weather = ({ display, city, icon, temperature, status, loading }) => {
  if (!display) return <div></div>;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 col-md-5 col-lg-4 col-xl-3 m-auto">
          <div className="card shadow mt-3 weather-card">
            <div className="card-header text-center">
              <h2>{city}</h2>
              <p className="m-0">{status}</p>
            </div>
            <div className="card-body">
              <Icon icon={icon} />
              <Temperature value={temperature} />
            </div>
            <div className="card-footer text-center">
              <a href={`/forecast/${city}`} className="btn btn-primary">
                Voir les prévisions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
