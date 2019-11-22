import React from "react";

import './Icon.scss';

const Icon = ({ icon }) => (
  <p className="mb-1 text-center weather-icon">
    <i className={`wi wi-owm-${icon}`}></i>
  </p>
);

export default Icon;
