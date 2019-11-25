import React, {Component} from "react";
import Header from "./Header";
import Weather from "./Weather/Weather";
import Forecast from "./Weather/Forecast"
import Search from "./Search/Search";
import {getForecastData, getWeatherData} from "../services/OwpService";

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
            loading: true,
            displayWeatherCard: false,

            mydatalist: undefined,
            fCity: "",
            fIcon: "",
            fTemperature: "",
            fStatus: "",
            fDate: "",
            items: [],
        };
    }

    updateSearchValue = e => {
        const searchTerm = e.target.value;
        console.log(searchTerm);
        this.setState({
            searchTerm: searchTerm
        });
    };

    enterKeySearch = e => {
        if (e.key === 'Enter') {
            this.search(e);
        }
    };

    search = async e => {
        this.setState({
            displayWeatherCard: true,
            loading: true
        });

        console.log("Mon terme de recherche est : ", this.state.searchTerm);

        try {
            const data = await getWeatherData(this.state.searchTerm);
            const forecastData = await getForecastData(this.state.searchTerm);

            console.log("Mes données dans search", data);

            setTimeout(() => {
                this.setState({
                    mydatalist: forecastData,
                    city: data.name,
                    icon: data.weather[0].id,
                    temperature: data.main.temp,
                    status: data.weather[0].description,
                    loading: false,
                    displayWeatherCard: true,
                    error: ""
                });
            }, 1400);
        } catch (err) {
            this.setState({
                loading: false,
                displayWeatherCard: false,
                error: err.response.data.message
            });
        }
        // TODO: peut etre faire un for in ici pour prendre en compte chaque élément 0 1 2 ...
        //  du tableau donné par la réponse correspndant a chaque tranche de 3heures de météo sur 5jours
        //   for(forecastDatas in forecastData)
    };

    // for (let i = 0; i < forecastData.list.length; i++) {
    //     this.setState({
    //         mydatalist: forecastData,
    //         fCity: forecastData.list[i].name,
    //         fIcon: forecastData.list[i].weather[0].id,
    //         fTemperature: forecastData.list[i].main.temp,
    //         fStatus: forecastData.list[i].weather[0].description,
    //
    //         fDate: (forecastData.list[i].dt_txt).slice(0, 10)
    //     })
    // }

//   this.setState({
//     city: forecastData.name,
//     icon: forecastData.weather[0].id,
//     temperature: forecastData.main.temp,
//     status: forecastData.weather[0].description,
//     loading: false,
//     displayWeatherCard: true
//   });
// }, 1400);

    render = () => {
        const {city, icon, temperature, status, fCity, fIcon, fTemperature, fStatus, fDate} = this.state;
        // const { city, icon, temperature, status } = this.state;
        if (this.state.mydatalist) {
            for (let i = 0; i < 2; i++) {
                this.state.items.push(
                    <Forecast
                        loading={this.state.loading}
                        display={this.state.displayWeatherCard}
                        fCity={this.state.mydatalist.list[i].name}
                        fIcon={this.state.mydatalist.list[i].weather[0].id}
                        fTemperature={this.state.mydatalist.list[i].main.temp}
                        fStatus={this.state.mydatalist.list[i].weather[0].description}
                        fDate={(this.state.mydatalist.list[i].dt_txt).slice(0, 10)}
                        key={i}
                    />
                );
            }
        }

        return (
            <>
                <Header/>
                <Search
                    handleSubmit={this.search}
                    searchValue={this.state.searchTerm}
                    updateValue={this.updateSearchValue}
                    handleKeyDown={this.enterKeySearch}
                />
                <Weather
                    loading={this.state.loading}
                    display={this.state.displayWeatherCard}
                    city={city}
                    icon={icon}
                    status={status}
                    temperature={temperature}
                />

                <div className="jsdfkjsdhf">
                    {this.state.items}

                </div>

            </>
        );
    };
}

export default App;
