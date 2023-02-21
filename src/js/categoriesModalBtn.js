import { refs } from './refs.js';

refs.modalOtherBtns.addEventListener('click', categoriesButtonModalClick);

export default function categoriesButtonModalClick() {
  refs.renderContainerCategoriesTheme.classList.toggle('is-hidden');
  refs.modalOtherArrow.classList.toggle('switched');

  function handleClickOutside(e) {
    if (
      !refs.renderContainerCategoriesTheme.contains(e.target) &&
      !refs.modalOtherBtns.contains(e.target)
    ) {
      refs.renderContainerCategoriesTheme.classList.remove('is-hidden');
      refs.modalOtherArrow.classList.remove('switched');
      document.removeEventListener('click', handleClickOutside);
    }
  }

  setTimeout(() => {
    document.addEventListener('click', handleClickOutside);
  }, 0);
}
