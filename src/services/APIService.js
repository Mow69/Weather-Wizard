import Axios from "axios";
import {CITY_ENDPOINT} from "../constants";

export const getWeatherData = () => {
    const res =  Axios.get(CITY_ENDPOINT).then(res => res.data);
    return res.data;
};

export const getMainData = () => {
    return getWeatherData.main.temp;
};
