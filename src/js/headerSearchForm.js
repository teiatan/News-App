import { refs } from './refs';

function onSearchBtnClick() {
    refs.searchFormOpeningButton.classList.add('is-hidden');
    refs.searchForm.classList.remove('is-hidden');
    refs.searchFormInput.focus();
}

function onSearchFormFocusLose() {
    refs.searchFormOpeningButton.classList.remove('is-hidden');
    refs.searchForm.classList.add('is-hidden'); 
}

export function addListenersForMobileHeader() {
    refs.searchFormOpeningButton.addEventListener('click', onSearchBtnClick);
    refs.searchFormInput.addEventListener('blur', onSearchFormFocusLose);
}