import React from "react";

const NotFound = () => (
  <div className="jumbotron bg-white">
    <h1 className="display-4">Page non trouvée !</h1>
    <p className="lead">
      Désolé, cette page n'existe pas.
    </p>
    <a className="btn btn-primary btn-lg" href="/" role="button">
      Retour à l'accueil
    </a>
  </div>
);

export default NotFound;
