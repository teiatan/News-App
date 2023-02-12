export const refs = {
    navHome: document.querySelector('.navigation__item--home'),
    navFavorite: document.querySelector('.navigation__item--favorite'),
    navRead: document.querySelector('.navigation__item--read'),
    headerSignInBtn: document.querySelector('.auth-btn__sign-in'),
    headerSignOutBtn: document.querySelector('.auth-btn__sign-out'),

// відкриття/закриття модалок
    modalOpenBtns:document.querySelectorAll('[data-modal-open]'),
    modalCloseBtns:document.querySelectorAll('[data-modal-close]'),

// авторизація

    authEmailInput: document.querySelector('.js-auth__email-input'),
    authPasswordInput: document.querySelector('.js-auth__password-input'),
    authEntranceBtn: document.querySelector('.js-auth__entrance-btn'),
    authRegistrationBtn: document.querySelector('.js-auth__registration-btn'),
    authModal: document.querySelector('.modal-auth')

};