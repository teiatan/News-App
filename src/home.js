import Notiflix from 'notiflix';
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';
import { refs } from './js/refs';
import { getMostViewedNews } from './js/API/getMostViewedNews';
import { showMostViewedNews } from './js/render-functions/renderMostViewedNews';
import { onSubmitSearchForm } from './js/API/getNewsByFormInput';
import { showNewsByFormInput } from './js/render-functions/renderNewsByFormInput';

import { developers } from './developers';
import { changeTheme, addDarkClass } from './js/changeTheme';

import { fetchDefaultWeather } from './js/API/getWeather';



Notiflix.Loading.pulse();
defaultLocalStorage();
addModalOpenListeners();
headerLogic();
showMostViewedNews(getMostViewedNews());
showNewsByFormInput(onSubmitSearchForm());
window.setTimeout(Notiflix.Loading.remove(), 5000);

changeTheme();
addDarkClass();

