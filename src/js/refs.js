export const refs = {
  body: document.body,

  //хедер
  header: document.querySelector('.header'),
  burgerBtn: document.querySelector('.menu-button-burger'),
  navHome: document.querySelector('.navigation__item--home'),
  navFavorite: document.querySelector('.navigation__item--favorite'),
  navRead: document.querySelector('.navigation__item--read'),
  navWrapper: document.querySelector('.navigation'),

  // відкриття/закриття модалок
  modalOpenBtns: document.querySelectorAll('[data-modal-open]'),
  modalCloseBtns: document.querySelectorAll('[data-modal-close]'),

  //кнопки модалки авторизації
  headerSignInBtn: document.querySelector('.auth-btn__sign-in'),
  headerSignOutBtn: document.querySelector('.auth-btn__sign-out'),
  authModalBtnClose: document.querySelector('.modal__close-btn'),

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
  searchFormLabel: document.querySelector('.search-form__label'),

  //форма пошуку
  formSearch: document.querySelector('.search-form'),
  formSearchInput: document.querySelector('.search-form__input'),

  //заглушка для пошуку
  negativeSearch: document.querySelector('.negative-search'),
  
  //модалка розробники
  developerModal: document.querySelector('.modal-developer'),
  developerModalBtnClose: document.querySelector(".modal__btn--close"),
  
  //контейнери для рендеру
  renderContainerHome: document.querySelector('.render-container--home'),
  favouriteNewsContainer: document.querySelector('.render-container'),
  renderContainerCategoriesDesktop: document.querySelector('.categories-render-container__list-desktop'),
  renderContainerCategoriesMobile: document.querySelector('.categories-render-container__list-mobile'),
  renderContainerCategoriesTablet: document.querySelector('.categories-render-container__list-tablet'),
  renderContainerCategoriesTheme: document.querySelector('.other--categories__filters-list'),
  renderContainerReadPage: document.querySelector('.render-container--read'),
  navHomeLink: document.querySelector('.render-container--read'),
  
  //категорії
  modalText: document.querySelector('.other-categories__button-text'),
  modalOtherBtns: document.querySelector('.other-categories__button'),
  modalOtherArrow: document.querySelector('.other-categories__icon-arrow'),
};
