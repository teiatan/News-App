export const refs = {
  body: document.body,
  header: document.querySelector('.header'),
  burgerBtn: document.querySelector('.menu-button-burger'),
  navHome: document.querySelector('.navigation__item--home'),
  navFavorite: document.querySelector('.navigation__item--favorite'),
  navRead: document.querySelector('.navigation__item--read'),
  navWrapper: document.querySelector('.navigation'),
  headerSignInBtn: document.querySelector('.auth-btn__sign-in'),
  headerSignOutBtn: document.querySelector('.auth-btn__sign-out'),

  renderContainerHome: document.querySelector('.render-container--home'),
  formSearch: document.querySelector('.search-form'),
  formSearchInput: document.querySelector('.search-form__input'),
  negativeSearch: document.querySelector('.negative-search'),
  developerModal: document.querySelector('.modal-developer'),
  developerModalBtnClose: document.querySelector(".modal__btn--close"),
  authModalBtnClose: document.querySelector('.modal__close-btn'),

  // відкриття/закриття модалок
  modalOpenBtns: document.querySelectorAll('[data-modal-open]'),
  modalCloseBtns: document.querySelectorAll('[data-modal-close]'),
  // авторизація

  authEmailInput: document.querySelector('.js-auth__email-input'),
  authPasswordInput: document.querySelector('.js-auth__password-input'),
  authEntranceBtn: document.querySelector('.js-auth__entrance-btn'),
  authRegistrationBtn: document.querySelector('.js-auth__registration-btn'),
  authModal: document.querySelector('.modal-auth'),
  navigationHomeLink: document.querySelector('a[data-link="home"]'),
  navigationFavoriteLink: document.querySelector('a[data-link="favorite"]'),
  navigationReadLink: document.querySelector('a[data-link="read"]'),
  searchFormOpeningButton: document.querySelector('.header__search-form-opening-btn'),
  searchForm: document.querySelector('.search-form'),
  searchFormInput: document.querySelector('.search-form__input'),

  
  

  favouriteNewsContainer: document.querySelector('.render-container'),

  renderContainerCategoriesDesktop: document.querySelector('.categories-render-container__list-desktop'),
  renderContainerCategoriesMobile: document.querySelector('.categories-render-container__list-mobile'),
  renderContainerCategoriesTablet: document.querySelector('.categories-render-container__list-tablet'),
  renderContainerCategoriesTheme: document.querySelector('.other--categories__filters-list'),
  modalText: document.querySelector('.other-categories__button-text'),
  modalOtherBtns: document.querySelector('.other-categories__button'),
  modalOtherArrow: document.querySelector('.other-categories__icon-arrow'),
  renderContainerReadPage: document.querySelector('.render-container--read'),

  navHomeLink: document.querySelector('.render-container--read'),

  // pagination
  paginConteinBtn: document.getElementById('pagination'),
  prevBtn: document.querySelector('.js-prev-page'),
  nextBtn: document.querySelector('.js-next-page'),

};
