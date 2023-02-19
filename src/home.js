import Notiflix from 'notiflix';
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';
import { refs } from './js/refs';
import { getMostViewedNews } from './js/API/getMostViewedNews';
import { showMostViewedNews } from './js/render-functions/renderMostViewedNews';
import { getNewsByFormInput } from './js/API/getNewsByFormInput';
import { showNewsByFormInput } from './js/render-functions/renderNewsByFormInput';
import { fetchDefaultWeather } from './js/API/getWeather';

Notiflix.Loading.pulse();
defaultLocalStorage();
addModalOpenListeners();
headerLogic();
showMostViewedNews(getMostViewedNews());
//showNewsByFormInput(getNewsByFormInput());
window.setTimeout(Notiflix.Loading.remove(), 5000);

async function ggg() {
    const results = await fetchDefaultWeather();
    localStorage.city = results.data.name;
    localStorage.temperature = results.data.main.temp;
    localStorage.dateOfWeather = results.data.main.temp;
    // window.setTimeout(document.querySelector('.weather-item').innerHTML = `<li class="weather-item card">Temperature in ${localStorage.city} ${localStorage.temperature}</li>`, 5000);
    //window.setTimeout(document.querySelector('.weather-item').insertAdjacentHTML('afterbegin', `<h1>header</h1>`));
    
};
ggg();
function aaa() {
    console.log(document.querySelector('.weather-item'));
}
