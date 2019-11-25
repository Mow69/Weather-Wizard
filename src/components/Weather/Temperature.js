import React from 'react';

const Temperature = ({ value }) => (
  <h3 className="text-center">{Math.round(value)}°C</h3>
);

export default Temperature;