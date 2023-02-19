import Notiflix from 'notiflix';
import { refs } from './js/refs';
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';
import { onSearchBtnClick, onSearchFormFocusLose } from './js/headerSearchForm';

Notiflix.Loading.pulse();
defaultLocalStorage();
addModalOpenListeners();
headerLogic();



window.setTimeout(Notiflix.Loading.remove(), 5000);
refs.searchFormOpeningButton.addEventListener('click', onSearchBtnClick);
refs.searchFormInput.addEventListener('blur', onSearchFormFocusLose);
