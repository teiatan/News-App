import Notiflix from 'notiflix';
import { refs } from './js/refs';
import { currentLinkUnderline } from './js/currentLinkUnderline'
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';
import { addListenersForMobileHeader, viewportWidthCheck } from './js/headerSearchForm';
import { currentLinkUnderline } from './js/currentLinkUnderline';
import { changeTheme, addDarkClass } from './js/changeTheme';

Notiflix.Loading.pulse();
defaultLocalStorage();
addModalOpenListeners();
headerLogic();



window.setTimeout(Notiflix.Loading.remove(), 5000);
addListenersForMobileHeader();
viewportWidthCheck();
currentLinkUnderline();
changeTheme();
addDarkClass();