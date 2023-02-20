import { getCategories } from '../API/getCategories.js';
import { refs } from '../refs.js';

export async function renderCategories() {
  const categories = await getCategories();
  const categoriesNewDesktop = categories.slice(0, 6);
  const categoriesNew2Desktop = categories.slice(6, 20);

  const categoriesMarkup = categoriesNewDesktop
    .map(({ display_name, name }) => {
      return `
        <li class="categories__item">
          <button class="categories__link">${display_name}</button>
        </li>
      `;
    })
    .join('');
  refs.renderContainerCategoriesDesktop.insertAdjacentHTML(
    'afterbegin',
    categoriesMarkup
  );
  const categorieMarkup2 = categoriesNew2Desktop
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
