import Notiflix from 'notiflix';
import { addEventListenerForBurgerBtn } from './js/mobileMenu';
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import {
  addListenersForMobileHeader,
  viewportWidthCheck,
} from './js/headerSearchForm';
import { addModalOpenListeners } from './js/modalOpening';
import { currentLinkUnderline } from './js/currentLinkUnderline';
import { showMostViewedNews } from './js/render/renderMostViewedNews';
import { getMostViewedNews } from './js/API/getMostViewedNews';
import { onSubmitSearchForm } from './js/API/getNewsByFormInput';
import { showNewsByFormInput } from './js/render/renderNewsByFormInput';
import { developers } from './developers';
import { renderDevelopers } from './js/renderDevelopers';
import { renderCategories } from './js/render/renderCategories';
import { categoriesModalBtn } from './js/categoriesModalBtn';
import { changeTheme, addDarkClass } from './js/changeTheme';
import { addNewsToReadArrayInLocalStorage } from './js/addNewsToReadArrayInLocalStorage';
import { addNewsToFavoriteArrayInLocalStorage } from './js/addNewstoFavoriteLocalStorige';


Notiflix.Loading.pulse();
renderCategories();
defaultLocalStorage();
addModalOpenListeners();
headerLogic();
showMostViewedNews(getMostViewedNews());
addListenersForMobileHeader();
currentLinkUnderline();
viewportWidthCheck();
addEventListenerForBurgerBtn();
window.setTimeout(Notiflix.Loading.remove(), 5000);
