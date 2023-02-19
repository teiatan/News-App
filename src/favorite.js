import Notiflix from 'notiflix';
import { refs } from './js/refs';
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';
import { addListenersForMobileHeader } from './js/headerSearchForm';


Notiflix.Loading.pulse();
defaultLocalStorage();
addModalOpenListeners();
headerLogic();



window.setTimeout(Notiflix.Loading.remove(), 5000);
addListenersForMobileHeader();
