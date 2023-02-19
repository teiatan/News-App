import axios from "axios";
import { createMarkup } from "../render-functions/renderWeather";

export async function fetchDefaultWeather() {
  const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather?';
  const API_KEY = '91d751a02dafc0c836af10d6250528cb';
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

getGeoposition(); 


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
    const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather?';
    const API_KEY = '91d751a02dafc0c836af10d6250528cb';
    const url = `${ENDPOINT}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    try {
      return data = await axios.get(url);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  export let weatherMarkup = `  <li class="weather-item card">
    <div class="weather-header">
     <p class="weather-degrees">23&#176c</p>
    <div>
       <p class="weather-condition">Sunny</p>
        <!-- <svg class="weather-geo-icon" width="24px">
                <use href="./images/icons.svg#icon-geo"></use>
              </svg> -->
       <p class="weather-town">Saugus</p>
     </div>
  </div>

   <img class="weather-img"
         src=""
        alt="Weather icon"
         width="165"
         height="156"/>
   <p class="weather-date">Monday</p>
   <p class="weather-date">20 Feb 2023</p>
   <a class="weather-link" href="https://sinoptik.ua" target="_blank">weather for week</a>
 </li>`;