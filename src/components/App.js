import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Weather from "./Weather/Weather";
import Search from "./Utils/Search";


class App extends Component {
    constructor(props) {
        super(props);

        // Initialisation du state
        // Avant même l'affichage du composant
        this.state = {
            searchTerm: "",
            city: "",
            icon: "",
            temperature: "",
            status: "",
            loading: true
        };
    }

    componentDidMount = async () => {
        const data = await this.getData();
        console.log("Mes données dans componentDidMount", data);

        this.setState({
            city: data.name,
            icon: data.weather[0].id,
            temperature: data.main.temp,
            status: data.weather[0].description,
            loading: false
        });
        // .then(res => res.data)
        // .then(res => console.log("Ma data dans then de componentDidMount", res.data))
        // .catch(err => console.log("Une erreur a été remontée par le rejet de la promesse", err));
        // console.log("Ma variable res", res);
    };

    getData = async () => {
        try {
            // console.log("API KEY", process.env.REACT_APP_API_KEY);
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${process.env.REACT_APP_API_KEY}&lang=fr&units=metric`
            );

            console.log("Ma data dans getData", response.data);

            return response.data;
        } catch (err) {
            console.log("Une erreur est survenue", err);
        }
        // Méthode avec Axios :
        // Un attribut data est disponible directement dans ma réponse
        // Axios.get retourne une promesse.
        // On peut donc récupérer la valeur remontée par la résolution de la promesse
        // avec la fonction .then
        // return Axios.get(
        //   "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=a42440fccba80afd3945199f9f599063&lang=fr&units=metric"
        // // ).then(res => console.log(res.data.main.temp))
        // );
        // Méthode native JS :
        // Je dois convertir ma réponse en JSON
        // et chaîner une autre fonction pour manipuler mon contenu
        // fetch("https://api.openweathermap.org/data/2.5/weather?q=London&APPID=a42440fccba80afd3945199f9f599063")
        //   .then(res => res.json())
        //   .then(jsonContent => console.log(jsonContent));
    };

    updateSearchValue = (e) => {
        const searchTerm = e.target.value;
        this.setState({
            searchTerm: searchTerm
        });
    }

    search = (e) => {
        alert("Je vais rechercher " + this.state.searchTerm);
    }

    render = () => {
        const { city, icon, temperature, status } = this.state;

        return (
            <>
                <Header />
                <Search handleSubmit={this.search} searchValue={this.state.searchTerm} updateValue={this.updateSearchValue} />
                <Weather loading={this.state.loading} city={city} icon={icon} status={status} temperature={temperature} />
            </>
        );
    };
}

export default App;
