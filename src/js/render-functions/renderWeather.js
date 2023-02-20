import { format } from 'date-fns';
import { fetchDefaultWeather, getGeoposition, fetchWeatherByGeo} from '../API/getWeather';
export let weatherMarkup;

async function createDefaultWeatherMarkup() {
  const data = await fetchDefaultWeather();
  createMarkup(data);
}
createDefaultWeatherMarkup();

export function createMarkup(data) {
    const { temp } = data.data.main;
    const weather = data.data.weather[0];
    const { icon } = data.data.weather[0];

    const weatherMarkup = `<li class="weather-item card">
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

  //console.log(weatherMarkup);
    return weatherMarkup;
}

