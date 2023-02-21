import { refs } from './refs.js';

refs.modalOtherBtns.addEventListener('click', categoriesButtonModalClick);

export default function categoriesButtonModalClick() {
  refs.renderContainerCategoriesTheme.classList.toggle('is-hidden');
  refs.modalOtherArrow.classList.toggle('switched');
}

// refs.modalText.
window.addEventListener('resize', handleResize);

/* 
export default function handleResize() {
  if(window.innerWidth >= 768) {
    refs.modalText.textContent = 'Others';
  }
  else {
    refs.modalText.textContent = 'Categories';
  }
}
  handleResize(); */