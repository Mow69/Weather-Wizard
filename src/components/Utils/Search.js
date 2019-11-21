import React from "react";

const Search = ({ searchValue, handleSubmit, updateValue }) => {
    return (
        <div className="container mt-3 mb-3">
            <div className="row">
                <div className="col-10 col-md-6 m-auto">
                    <input
                        type="text"
                        className="form-control"
                        value={searchValue}
                        onChange={updateValue}
                        placeholder="Rechercher une ville..."
                    />
                </div>
            </div>
            <div className="row">
                <div className="col text-center mt-3">
                    <button onClick={handleSubmit} className="btn btn-primary">
                        Rechercher
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Search;
