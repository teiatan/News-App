import { getCategories } from '../API/getCategories.js';
import { refs } from '../refs.js';

export async function renderCategories() {
  const categories = await getCategories();
  const categoriesList = categories.map(category => {
    return `<li class="categories__item">
    <a href="#${category.name}" class="categories__link">${category.name}</a>
    </li>`;
  });
  refs.categoriesList.insertAdjacentHTML('beforeend', categoriesList.join(''));
}
