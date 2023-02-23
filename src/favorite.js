import Notiflix from 'notiflix';
import { addEventListenerForBurgerBtn } from './js/mobileMenu';
import { currentLinkUnderline } from './js/currentLinkUnderline'
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';
import { addListenersForMobileHeader, viewportWidthCheck } from './js/headerSearchForm';
import { currentLinkUnderline } from './js/currentLinkUnderline';
import { showFavoritePagination } from './js/pagination/favoritePagination.js';
import { changeTheme, addDarkClass } from './js/changeTheme';
import {searchByForm} from './js/headerSearchForm'
import {showFavoritePagination} from'./js/pagination/favoritePagination.js'

Notiflix.Loading.pulse();
defaultLocalStorage();
headerLogic();
addModalOpenListeners();
addListenersForMobileHeader();
currentLinkUnderline();
viewportWidthCheck();
addEventListenerForBurgerBtn();
searchByForm();
showFavoritePagination();
window.setTimeout(Notiflix.Loading.remove(), 5000);