import { refs } from './refs';

export function onSearchBtnClick() {
    refs.searchFormOpeningButton.classList.add('is-hidden');
    refs.searchForm.classList.remove('is-hidden');
    refs.searchFormInput.focus();
}

export function onSearchFormFocusLose() {
    refs.searchFormOpeningButton.classList.remove('is-hidden');
    refs.searchForm.classList.add('is-hidden'); 
}
