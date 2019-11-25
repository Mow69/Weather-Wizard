import React from "react";

const Search = ({
  error,
  textPlaceholder,
  searchValue,
  handleSubmit,
  handleKeyDown,
  updateValue
}) => {
  let errorDiv = "";
  console.log("Erreur : ", error);
  if (error !== undefined && error !== "") {
    errorDiv = (
      <div className="row mt-2">
        <div className="col-10 col-md-6 m-auto">
          <p className="alert alert-danger mb-0">
            Une erreur est survenue : {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-10 col-md-6 m-auto">
          <input
            type="text"
            className="form-control"
            value={searchValue}
            onChange={updateValue}
            onKeyDown={handleKeyDown}
            placeholder={textPlaceholder}
          />
        </div>
      </div>
      {errorDiv}
      <div className="row">
        <div className="col text-center mt-2">
          <button onClick={handleSubmit} className="btn btn-dark">
            Rechercher
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
