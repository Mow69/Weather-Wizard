import Axios from "axios";
import {CITY_ENDPOINT} from "../constants";

export const getWeatherData = () => {
    const res =  Axios.get(CITY_ENDPOINT).then(res => res.data);
    return res.data;
};

export const getMainData = () => {
    return getWeatherData.main.temp;
};


export const getData =  () => {
        return Axios.get(
            CITY_ENDPOINT);

    };
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


