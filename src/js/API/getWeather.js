import axios from "axios";
import { createMarkup } from "../render-functions/renderWeather";

const API_KEY = '91d751a02dafc0c836af10d6250528cb';
const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather?';

export async function fetchDefaultWeather() {
  const url = `${ENDPOINT}q=Kyiv&units=metric&appid=${API_KEY}`;
  try {
    const data = await axios.get(url);
    return data;
    //  console.log(data);
  } catch (error) {
    console.log(error);
  }
}
  // fetchDefaultWeather();

// getGeoposition(); 


export  async function getGeoposition() {
    if (navigator.geolocation) {
      // if browser support geolocation api
   return await navigator.geolocation.getCurrentPosition(onSuccess);
    } else {
      alert('Your browser not support geolocation api');
    }
}

export  async function onSuccess(position) {
    const { latitude, longitude } = position.coords; // getting lat and lon of the user device from coords obj
    return await fetchWeatherByGeo(latitude, longitude).then(data => createMarkup(data))
  }

export  async function fetchWeatherByGeo(lat, lon) {
    const url = `${ENDPOINT}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    try {
      return data = await axios.get(url);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  export let weatherMarkup = `<li class="weather-item card">Temperature in Nowhere is -100C </li>`;