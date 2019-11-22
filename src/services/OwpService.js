import Axios from "axios";
import { WEATHER_URL } from "../constants";

export const getWeatherData = async city => {
  try {
    const response = await Axios.get(
      `${WEATHER_URL}?q=${city}&APPID=${process.env.REACT_APP_API_KEY}&lang=fr&units=metric`
    );

    console.log("Ma data dans getWeatherData", response.data);

    return response.data;
  } catch (err) {
    console.log("Une erreur est survenue", err);
  }
};
