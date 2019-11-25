import React from "react";
import "./Weather.scss";
import Icon from "./Icon";
import Temperature from "./Temperature";

const ForecastItem = ({
  timestamp,
  icon,
  description,
  temperature,
  clouds
}) => {
  const itemDate = new Date(timestamp * 1000);
  const itemHour = itemDate.getHours();

  return (
    <div className="card shadow mt-3 weather-card forecast-item">
      <div className="card-header text-center bg-primary text-white">
        <h2>{itemHour}h</h2>
        <p className="m-0">{description}</p>
      </div>
      <div className="card-body">
        <Icon icon={icon} />
        <Temperature value={temperature} />
      </div>
      <div className="card-footer text-center">
        <h4>
          <span className="badge badge-light">
            <i className="wi wi-owm-804 mr-2"></i>
            {clouds}%
          </span>
        </h4>
      </div>
    </div>
  );
};

export default ForecastItem;
