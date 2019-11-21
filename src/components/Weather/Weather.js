import React from "react";
import Icon from "./Icon/";
import Temperature from "./Temperature";

import "./Weather.scss";
import { DoubleBounce } from "better-react-spinkit";

const Weather = ({ city, icon, temperature, status, loading }) => {
  if (loading) {
    return <div className="mt-3 d-flex justify-content-center">
      <DoubleBounce size={60} color="#CCC" />
    </div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 col-md-4 col-lg-3 m-auto">
          <div className="card shadow mt-3 weather-card">
            <div className="card-header text-center">
              <h2>{city}</h2>
              <p className="m-0">{status}</p>
            </div>
            <div className="card-body">
              <Icon icon={icon} />
              <Temperature value={temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
