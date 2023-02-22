import Notiflix from 'notiflix';
import { addEventListenerForBurgerBtn } from './js/mobileMenu';
import { refs } from './js/refs';
import { currentLinkUnderline } from './js/currentLinkUnderline'
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';
import { addListenersForMobileHeader, viewportWidthCheck } from './js/headerSearchForm';
import { currentLinkUnderline } from './js/currentLinkUnderline';
import { changeTheme, addDarkClass } from './js/changeTheme';
import { showReadNews } from './js/render-functions/renderReadNews';
import {clickonSearchForm} from './js/headerSearchForm'

Notiflix.Loading.pulse();
defaultLocalStorage();
headerLogic();
addModalOpenListeners();
headerLogic();
showReadNews();


window.setTimeout(Notiflix.Loading.remove(), 5000);
addListenersForMobileHeader();
viewportWidthCheck();
currentLinkUnderline();

addEventListenerForBurgerBtn();

//changeTheme();
//addDarkClass();
refs.searchForm.addEventListener("submit", clickonSearchForm);
 function clickonSearchForm(){
   window.location.href = 'index.html' }
