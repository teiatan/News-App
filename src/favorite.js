import Notiflix from 'notiflix';
import { addEventListenerForBurgerBtn } from './js/mobileMenu';
import { currentLinkUnderline } from './js/currentLinkUnderline'
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';
import { addListenersForMobileHeader, viewportWidthCheck } from './js/headerSearchForm';
import { currentLinkUnderline } from './js/currentLinkUnderline';
import {showFavouriteNews} from './js/render/renderFavoriteNews';
import { showFavoritePagination } from './js/pagination/favoritePagination.js';
import { changeTheme, addDarkClass } from './js/changeTheme';
import {searchByForm} from './js/headerSearchForm'

Notiflix.Loading.pulse();
defaultLocalStorage();
headerLogic();
addModalOpenListeners();
showFavouriteNews();
addListenersForMobileHeader();
currentLinkUnderline();
viewportWidthCheck();
addEventListenerForBurgerBtn();
searchByForm();
showFavouriteNews();
window.setTimeout(Notiflix.Loading.remove(), 5000);