import { getCategories } from '../API/getCategories.js';
import { refs } from '../refs.js';

export async function renderCategories() {
  const categories = await getCategories();
  const categoriesNew = categories.slice(0, 5);
  const categoriesNew2 = categories.slice(5, 20);
  const categoriesMarkup = categoriesNew
    .map(({ display_name, name }) => {
      return `
        <li class="categories__item">
          <a href="#${name}" class="categories__link">${display_name}</a>
        </li>
      `;
    })
    .join('');
  refs.renderContainerCategories.insertAdjacentHTML(
    'afterbegin',
    categoriesMarkup
  );
}
