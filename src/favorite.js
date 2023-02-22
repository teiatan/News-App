import Notiflix from 'notiflix';
import { refs } from './js/refs';
import { currentLinkUnderline } from './js/currentLinkUnderline'
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';

import { addListenersForMobileHeader, viewportWidthCheck } from './js/headerSearchForm';
import { currentLinkUnderline } from './js/currentLinkUnderline';

import {showFavouriteNews} from './js/render-functions/renderFavoriteNews';

import { showFavoritePagination } from './js/pagination/favoritePagination.js';



Notiflix.Loading.pulse();
defaultLocalStorage();
addModalOpenListeners();
headerLogic();

window.setTimeout(Notiflix.Loading.remove(), 5000);

showFavouriteNews();
showFavoritePagination();

window.setTimeout(Notiflix.Loading.remove(), 5000);
addListenersForMobileHeader();
viewportWidthCheck();
currentLinkUnderline();



