import React from "react";

// Définition sous forme de fonction
const City = ({ id, name, country, temp_min, temp_max }) => (
  <div className="col-12 col-lg-4 p-2 border">
    <p>{name}, {country}</p>
      <p>{temp_min}</p>
      <p>{temp_max}</p>
      <p>
      <a href={`/city/${id}`} className="btn btn-sm btn-primary">Voir la fiche</a>
    </p>
  </div>
);

export default City;
