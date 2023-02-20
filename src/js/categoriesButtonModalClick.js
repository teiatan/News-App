import { refs } from './refs.js';

refs.modalOtherBtns.addEventListener('click', categoriesButtonModalClick);

export default function categoriesButtonModalClick() {
  refs.renderContainerCategoriesTheme.classList.toggle('is-hidden');
}
