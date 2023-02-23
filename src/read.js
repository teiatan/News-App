import Notiflix from 'notiflix';
import { addEventListenerForBurgerBtn } from './js/mobileMenu';
import { currentLinkUnderline } from './js/currentLinkUnderline'
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';
import { addListenersForMobileHeader, viewportWidthCheck } from './js/headerSearchForm';
import { currentLinkUnderline } from './js/currentLinkUnderline';
import { changeTheme, addDarkClass } from './js/changeTheme';
import { showReadNews } from './js/render/renderReadNews';
import {searchByForm} from './js/headerSearchForm'

Notiflix.Loading.pulse();
defaultLocalStorage();
headerLogic();
addModalOpenListeners();
headerLogic();
addListenersForMobileHeader();
viewportWidthCheck();
currentLinkUnderline();
addEventListenerForBurgerBtn();
searchByForm();
showReadNews();
window.setTimeout(Notiflix.Loading.remove(), 5000);
