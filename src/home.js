import Notiflix from 'notiflix';
import { addEventListenerForBurgerBtn } from './js/mobileMenu';
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import {
  addListenersForMobileHeader,
  viewportWidthCheck,
} from './js/headerSearchForm';
import { addModalOpenListeners } from './js/modalOpening';
import { currentLinkUnderline } from './js/currentLinkUnderline';
import { getMostViewedNews } from './js/API/getMostViewedNews';
import { showMostViewedNews } from './js/render-functions/renderMostViewedNews';
import { onSubmitSearchForm } from './js/API/getNewsByFormInput';
import { showNewsByFormInput } from './js/render-functions/renderNewsByFormInput';

import { developers } from './developers';

import { renderCategories } from './js/render-functions/renderCategories';
import { categoriesModalBtn } from './js/categoriesModalBtn';

import { changeTheme, addDarkClass } from './js/changeTheme';
import { fetchDefaultWeather } from './js/API/getWeather';


Notiflix.Loading.pulse();
renderCategories();
defaultLocalStorage();
addModalOpenListeners();
headerLogic();
showMostViewedNews(getMostViewedNews());
showNewsByFormInput(onSubmitSearchForm());
window.setTimeout(Notiflix.Loading.remove(), 5000);

addListenersForMobileHeader();
currentLinkUnderline();

viewportWidthCheck();
addEventListenerForBurgerBtn();


changeTheme();
addDarkClass();
