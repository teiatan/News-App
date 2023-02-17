
const API_KEY = '91d751a02dafc0c836af10d6250528cb';
const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather?';

async function fetchDefaultWeather() {
  const url = `${ENDPOINT}q=Kyiv&units=metric&appid=${API_KEY}`;
  try {
    return (data = await axios.get(url));
    //  console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchDefaultWeather();

async function getGeoposition() {
  if (navigator.geolocation) {
    // if browser support geolocation api
    navigator.geolocation.getCurrentPosition(onSuccess);
  } else {
    alert('Your browser not support geolocation api');
  }
}
function onSuccess(position) {
  const { latitude, longitude } = position.coords; // getting lat and lon of the user device from coords obj
  fetchWeatherByGeo(latitude, longitude);
}

async function fetchWeatherByGeo(lat, lon) {
  const url = `${ENDPOINT}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  try {
    return (data = await axios.get(url));
  } catch (error) {
    console.log(error);
  }
}
getGeoposition();

export const weatherMarkup = `<li class="weather-item card"><div class="weather-header">header</div><img class=weather-img>img</><p class="weather-date">DATE</p><a class="weather-link">LINK</a></li>`;