import { refs } from './refs';

export function onSearchBtnClick() {
    refs.searchButton.classList.add('is-hidden');
    refs.searchForm.classList.remove('is-hidden');
    refs.searchFormInput.focus();
}

export function onSearchFormFocusLose() {
    refs.searchButton.classList.remove('is-hidden');
    refs.searchForm.classList.add('is-hidden'); 
}
