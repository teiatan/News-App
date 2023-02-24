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

  let weatherMarkup = `<li class="weather-item card">
    <div class="weather-header">
     <p class="weather-header__degrees">${Math.floor(temp)}</p>
    <div>
       <p class="weather-header__condition">${weather.main}</p>
       <div class="weather-header__geowrap">
  <svg class="weather-header__geoicon">
                <use href="./img/sprite.svg#icon-geo"></use>
              </svg>
       <p class="weather-header__town">${data.data.name}</p>
       </div>
     </div>
  </div>
   <img class="weather-img"
         src="https://openweathermap.org/img/wn/${icon}@4x.png"
        alt="Weather icon"/>
   <p class="weather-date">${format(new Date(), 'eee')}</p>
   <p class="weather-date">${format(new Date(), 'dd LLL y')}</p>
   <div class="weather-linkwrap">
    <a class="weather-linkwrap__link" href="https://sinoptik.ua" target="_blank">weather for week</a>
   </div> 
 </li>`

  // console.log(weatherMarkup);

    return weatherMarkup;
}

