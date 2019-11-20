import Axios from "axios";
import { CITY_ENDPOINT } from "../constants";

export const getCities = () => {
  return Axios.get(CITY_ENDPOINT).then(res => res.data)};

export const getCity = async id => {
  const res = await Axios.get(`${CITY_ENDPOINT}/${id}`);
  return res.data;
}