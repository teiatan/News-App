import Notiflix from 'notiflix';
import { addEventListenerForBurgerBtn } from './js/mobileMenu';
import { refs } from './js/refs';
import { currentLinkUnderline } from './js/currentLinkUnderline'
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';

import { addListenersForMobileHeader, viewportWidthCheck } from './js/headerSearchForm';
import { currentLinkUnderline } from './js/currentLinkUnderline';

import {showFavouriteNews} from './js/render-functions/renderFavoriteNews';
import { changeTheme, addDarkClass } from './js/changeTheme';

Notiflix.Loading.pulse();
defaultLocalStorage();
headerLogic();
addModalOpenListeners();

window.setTimeout(Notiflix.Loading.remove(), 5000);

showFavouriteNews();

window.setTimeout(Notiflix.Loading.remove(), 5000);
addListenersForMobileHeader();
viewportWidthCheck();
currentLinkUnderline();

addEventListenerForBurgerBtn();

changeTheme();
addDarkClass();

