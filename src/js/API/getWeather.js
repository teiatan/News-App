import axios from "axios";
import { format } from 'date-fns';
export let weatherMarkup;
const API_KEY = '91d751a02dafc0c836af10d6250528cb';
const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather?';


createDefaultWeatherMarkup(); 
// getGeoposition();

async function fetchDefaultWeather() {
  const url = `${ENDPOINT}q=Kyiv&units=metric&appid=${API_KEY}`;
  try {
    return data = await axios.get(url);
    //  console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// fetchDefaultWeather();

// function getGeoposition() {
//   if (navigator.geolocation) {
//     // if browser support geolocation api
//     navigator.geolocation.getCurrentPosition(onSuccess);
//   } else {
//     alert('Your browser not support geolocation api');
//   }
// }

// async function onSuccess(position) {
//   const { latitude, longitude } = position.coords; // getting lat and lon of the user device from coords obj
//   await fetchWeatherByGeo(latitude, longitude).then(data => createMarkup(data));
// }

// async function fetchWeatherByGeo(lat, lon) {
//   const url = `${ENDPOINT}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//   try {
//     return await axios.get(url);
//   } catch (error) {
//     console.log(error);
//   }
// }

async function createDefaultWeatherMarkup() {
  const data = await fetchDefaultWeather();
  await createMarkup(data);
 }


 function createMarkup(data){
const { temp } = data.data.main;
const weather = data.data.weather[0];
const { icon } = data.data.weather[0];

weatherMarkup = `<li class="weather-item card">
  <div class="weather-header">
    <p>${Math.floor(temp)}</p>
    <div>
      <p>${weather.main}</p>
      <p>${data.data.name}</p>
    </div>

  </div>
  <img class="weather-img"
        // src="https://openweathermap.org/img/wn/${icon}@4x.png"
        alt="Weather icon"
        width="165"
        height="156"/>
  <p class="weather-day">${format(new Date(), 'eee')}</p>
  <p class="weather-date">${format(new Date(), 'dd LLL y')}</p>
  <a class="weather-link" href="https://sinoptik.ua" target="_blank">weather for week</a>
</li>`;

return weatherMarkup;
 }
