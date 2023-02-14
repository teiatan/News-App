import Notiflix from 'notiflix';
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';
import { refs } from './js/refs';
import { getMostViewedNews } from './js/apiService';
import { showNews, renderNewsCard } from './js/renderFunctions';

Notiflix.Loading.pulse();
defaultLocalStorage();
addModalOpenListeners();
headerLogic();
showNews(getMostViewedNews());

Notiflix.Loading.remove();
//getMostViewedNews();
