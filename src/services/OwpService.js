import Axios from "axios";
import {PARAM_URL, FORECAST_URL, PARAM_FORECAST_URL, WEATHER_URL} from "../constants";

export const getWeatherData = async city => {
  try {
    const response = await Axios.get(
        `${WEATHER_URL}?q=${city}&APPID=${process.env.REACT_APP_API_KEY}${PARAM_URL}`
    );

    console.log("Ma data dans getWeatherData", response.data);

    return response.data;
  } catch (err) {
    console.log("Une erreur est survenue", err);
  }
};


export const getForecastData = async city => {
  try {
    const response = await Axios.get(
        `${FORECAST_URL}?q=${city}&APPID=${process.env.REACT_APP_API_KEY}${PARAM_URL}${PARAM_FORECAST_URL}`
    );

    console.log("Ma data dans getForecastrData", response.data);

    return response.data;
  } catch (err) {
    console.log("Une erreur est survenue", err);
  }
};