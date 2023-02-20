import { getCategories } from '../API/getCategories.js';
import { refs } from '../refs.js';

export async function renderCategories() {
  // пішов взяв категорії з API
  const categories = await getCategories();
  // кагорії порізав 6 для відображення на десктопі, а остальні 14 для відображення в модалці
  const categoriesNewDesktop = categories.slice(0, 6);
  const categoriesNew2Desktop = categories.slice(6, 20);
  // порізав 20 для відображення на мобілці
  const categoriesNewMobile = categories.slice(0, 20);
  // порізав 4 для відображення на таблетці
  // порізав 16 для відображення на таблетці
  const categoriesNewTablet = categories.slice(0, 4);
  const categoriesNew2Tablet = categories.slice(4, 20);
  // рендер категорій на таблетці
  const categoriesMarupTablet = categoriesNewTablet
    .map(({ display_name, name }) => {
      return `
        <li class="categories__item">
          <button class="categories__link">${display_name}</button>
        </li>
      `;
    })
    .join('');
  refs.renderContainerCategoriesTablet.insertAdjacentHTML(
    'afterbegin',
    categoriesMarupTablet
  );
  // рендер категорій на десктопі
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
  // рендер категорій на десктопі для модалки
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
