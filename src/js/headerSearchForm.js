const searchButton = document.querySelector('.header__search-form-opening-btn');
const searchForm = document.querySelector('.search-form');
const searchFormInput = document.querySelector('.search-form__input');

function onSearchBtnClick() {
    searchButton.classList.add('is-hidden');
    searchForm.classList.remove('is-hidden');
    searchFormInput.focus();
}

searchButton.addEventListener('click', onSearchBtnClick);

searchFormInput.addEventListener('blur', () => {
    searchButton.classList.remove('is-hidden');
    searchForm.classList.add('is-hidden');
});
