import React, { Component } from "react";
import { getCity } from "../../services/CityService";
import Loader from "../Utils/Loader";

class CityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      city: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    setTimeout(
      function() {
        getCity(id).then(city =>
          this.setState({
            loading: false,
            city: city
          })
        );
      }.bind(this),
      4000
    );
  }

  render = () => {
    if (this.state.loading) {
      return <Loader />;
    }

    return (
      this.state.city && (
        <div className="row">
          <div className="col">
            <h1>{this.state.city.name}</h1>
            <a href="/">Retour à la liste</a>
          </div>
        </div>
      )
    );
  };
}

export default CityPage;
