import { getCategories } from '../API/getCategories.js';
import { refs } from '../refs.js';

export async function renderCategories() {
  const categories = await getCategories();
  const categoriesMarkup = categories
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
