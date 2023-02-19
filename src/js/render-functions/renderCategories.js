import { geCategories } from '../API/getCategories.js';
import { refs } from '../refs.js';

export async function renderCategories() {
  console.log(2344);
  const categories = await geCategories();

  const markup = categories
    .map(category => {
      return `<li class="categories__item">
            <a href="#" class="categories__link">${category}</a>
        </li>`;
    })
    .join('');
  refs.renderContainerCategories.insertAdjacentHTML('afterbegin', markup);
}
