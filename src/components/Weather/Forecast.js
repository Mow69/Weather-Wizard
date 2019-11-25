import React from "react";
import Temperature from "./Temperature";
import "./Weather.scss";
import { DoubleBounce } from "better-react-spinkit";
import FIcon from "./fIcon";

const Forecast = ({ display, fCity, fIcon, fTemperature, fStatus, loading, fDate }) => {
    if (!display) return <div></div>;

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
                            <h2>{fCity}</h2>
                            <p>{fDate}</p>
                            <p className="m-0">{fStatus}</p>
                        </div>
                        <div className="card-body">
                            <FIcon fIcon={fIcon} />
                            <Temperature value={fTemperature} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
