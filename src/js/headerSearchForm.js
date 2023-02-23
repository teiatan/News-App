import { refs } from './refs';

window.addEventListener('resize', viewportWidthCheck);

function onSearchBtnClick() {
        refs.searchFormOpeningButton.classList.add('is-hidden');
        refs.searchForm.classList.remove('is-hidden');
        refs.searchFormInput.focus();
}

function onSearchFormFocusLose() {
    if (window.innerWidth < 768) {
        refs.searchFormOpeningButton.classList.remove('is-hidden');
        refs.searchForm.classList.add('is-hidden');
    }
}

export function viewportWidthCheck() {
    if (window.innerWidth >= 768) {
        refs.searchForm.classList.remove('is-hidden');
    } else if (window.innerWidth < 768) {
        refs.searchForm.classList.add('is-hidden');
    }
}

export function addListenersForMobileHeader() {
    refs.searchFormInput.addEventListener("input", () => {
        refs.searchFormLabel.classList.add('is-hidden');
        });
    refs.searchFormOpeningButton.addEventListener('click', onSearchBtnClick);
    refs.searchFormInput.addEventListener('blur', onSearchFormFocusLose);
}

export function searchByForm() {
    refs.searchForm.addEventListener("submit", clickonSearchForm);
}

refs.searchForm.addEventListener("submit", clickonSearchForm);
export function clickonSearchForm(){
   //window.location.href = 'index.html' 
};