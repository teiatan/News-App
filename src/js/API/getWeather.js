import axios from "axios";

const API_KEY = '91d751a02dafc0c836af10d6250528cb';
const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather?';



// getGeoposition();



export async function fetchDefaultWeather() {
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




