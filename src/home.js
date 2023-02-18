import Notiflix from 'notiflix';
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';
import { refs } from './js/refs';
import { getMostViewedNews } from './js/API/getMostViewedNews';
import { showMostViewedNews } from './js/render-functions/renderMostViewedNews';
import { getNewsByFormInput } from './js/API/getNewsByFormInput';
import { showNewsByFormInput } from './js/render-functions/renderNewsByFormInput';
import { developers } from './developers';
import { getCategoryRender } from './js/render-functions/renderCategories';

Notiflix.Loading.pulse();
getCategoryRender();
defaultLocalStorage();
addModalOpenListeners();
headerLogic();
showMostViewedNews(getMostViewedNews());
//showNewsByFormInput(getNewsByFormInput());
window.setTimeout(Notiflix.Loading.remove(), 5000);
