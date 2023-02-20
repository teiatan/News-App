export const refs = {
  renderContainerCategories: document.querySelector(
    '.categories-render-container__list'
  ),
  renderContainerCategoriesTheme: document.querySelector(
    '.other--categories__filters-list'
  ),
  modalOtherBtns: document.querySelector('.other-categories__button'),

  navHome: document.querySelector('.navigation__item--home'),
  navFavorite: document.querySelector('.navigation__item--favorite'),
  navRead: document.querySelector('.navigation__item--read'),
  navWrapper: document.querySelector('.navigation-wrapper'),
  headerSignInBtn: document.querySelector('.auth-btn__sign-in'),
  headerSignOutBtn: document.querySelector('.auth-btn__sign-out'),

  renderContainerHome: document.querySelector('.render-container--home'),
  formSearch: document.querySelector('.search-form'),
  formSearchInput: document.querySelector('.search-form__input'),
  negativeSearch: document.querySelector('.negative-search'),

  // відкриття/закриття модалок
  modalOpenBtns: document.querySelectorAll('[data-modal-open]'),
  modalCloseBtns: document.querySelectorAll('[data-modal-close]'),

  // авторизація

  authEmailInput: document.querySelector('.js-auth__email-input'),
  authPasswordInput: document.querySelector('.js-auth__password-input'),
  authEntranceBtn: document.querySelector('.js-auth__entrance-btn'),
  authRegistrationBtn: document.querySelector('.js-auth__registration-btn'),
  authModal: document.querySelector('.modal-auth'),

  searchFormOpeningButton: document.querySelector(
    '.header__search-form-opening-btn'
  ),
  searchForm: document.querySelector('.search-form'),
  searchFormInput: document.querySelector('.search-form__input'),

  navFavoriteLink: document.querySelector('a[data-link="favorite"]'),
  navReadLink: document.querySelector('a[data-link="read"]'),
  navHomeLink: document.querySelector('a[data-link="home"]'),

  favouriteNewsContainer: document.querySelector('.render-container'),
};
