import { refs } from './refs';

function onBurgerBtnClick(event) {
    event.currentTarget.classList.toggle('toggle-icon')
    refs.body.classList.toggle('overflow-hidden');
    console.log('on burger');
    refs.header.classList.toggle('is-opened');
};

export function addEventListenerForBurgerBtn() {
    refs.burgerBtn.addEventListener('click', onBurgerBtnClick);
}



