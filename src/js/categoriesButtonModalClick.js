import { refs } from './refs.js';

refs.modalButtonOpen.addEventListener('click', categoriesButtonModalClick);

export default function categoriesButtonModalClick() {
  refs.renderContainerCategoriesTheme.classList.toggle('is-hidden');
}
