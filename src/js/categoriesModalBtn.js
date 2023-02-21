import { refs } from './refs.js';

refs.modalOtherBtns.addEventListener('click', categoriesButtonModalClick);

export default function categoriesButtonModalClick() {
  refs.renderContainerCategoriesTheme.classList.toggle('is-hidden');
  refs.modalOtherArrow.classList.toggle('switched');

  refs.renderContainerCategoriesTheme.addEventListener('click', e => {
    e.stopPropagation();
  });

  // закриття модалки при кліку за межами

  setTimeout(() => {
    window.addEventListener('click', handleClickOutside);
  }, 0);

  function handleClickOutside(e) {
    if (!refs.renderContainerCategoriesTheme.contains(e.target)) {
      refs.modalOtherArrow.classList.remove('switched');
      window.removeEventListener('click', handleClickOutside);
    }
  }
}

// refs.modalText.
/* window.addEventListener('resize', handleResize);


export default function handleResize() {
  if(window.innerWidth >= 768) {
    refs.modalText.textContent = 'Others';
  }
  else {
    refs.modalText.textContent = 'Categories';
  }
}
  handleResize(); */
