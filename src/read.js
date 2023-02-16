import Notiflix from 'notiflix';
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';

Notiflix.Loading.pulse();
defaultLocalStorage();
addModalOpenListeners();
headerLogic();



window.setTimeout(Notiflix.Loading.remove(), 5000);

