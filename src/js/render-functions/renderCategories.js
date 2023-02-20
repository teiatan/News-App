import { getCategories } from '../API/getCategories.js';
import { refs } from '../refs.js';

export async function renderCategories() {
  const categories = await getCategories();
  const categoriesNew = categories.slice(0, 6);
  const categoriesNew2 = categories.slice(6, 20);

  const categoriesMarkup = categoriesNew
    .map(({ display_name, name }) => {
      return `
        <li class="categories__item">
          <button class="categories__link">${display_name}</button>
        </li>
      `;
    })
    .join('');
  refs.renderContainerCategories.insertAdjacentHTML(
    'afterbegin',
    categoriesMarkup
  );
  const categorieMarkup2 = categoriesNew2
    .map(({ display_name, name }) => {
      return `
        <li class="filter-category__item">
          <button class="categories__link_other">${display_name}</button>
        </li>
      `;
    })
    .join('');
  refs.renderContainerCategoriesTheme.insertAdjacentHTML(
    'beforeend',
    categorieMarkup2
  );
}
