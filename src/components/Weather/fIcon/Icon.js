import React from "react";

import './Icon.scss';

const FIcon = ({ fIcon }) => (
  <p className="mb-1 text-center weather-icon">
    <i className={`wi wi-owm-${fIcon}`}></i>
  </p>
);

export default FIcon;
