import { getCategories } from '../API/getCategories.js';
import { refs } from '../refs.js';
import { showNewsByCategory } from './renderNewsByCategory.js';

export async function renderCategories() {
  // пішов взяв категорії з API
  const categories = await getCategories();
  // кагорії порізав 6 для відображення на десктопі, а остальні 14 для відображення в модалці
  const categoriesNewDesktop = categories.slice(0, 6);
  const categoriesNew2Desktop = categories.slice(6, 50);
  // порізав 20 для відображення на мобілці
  const categoriesNewMobile = categories.slice(0, 50);
  // порізав 4 для відображення на таблетці
  // порізав 16 для відображення на таблетці
  const categoriesNewTablet = categories.slice(0, 4);
  const categoriesNew2Tablet = categories.slice(4, 50);
  // рендер категорій на таблетці

  const categoriesMarupTablet = categoriesNewTablet
    .map(({ display_name }) => {
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
    .map(({ display_name }) => {
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
    .map(({ display_name }) => {
      return `
        <li class="filter-category__item-desktop">
          <button class="categories__link_other">${display_name}</button>
        </li>
      `;
    })
    .join('');
  refs.renderContainerCategoriesTheme.insertAdjacentHTML(
    'beforeend',
    categorieMarkup2
  );

  // рендер категорій на таблетці для модалки
  const categorieMarkup2Tablet = categoriesNew2Tablet
    .map(({ display_name, name }) => {
      return `
        <li class="filter-category__item-tablet">
          <button class="categories__link_other">${display_name}</button>
        </li>
      `;
    })
    .join('');
  refs.renderContainerCategoriesTheme.insertAdjacentHTML(
    'beforeend',
    categorieMarkup2Tablet
  );

  // рендер категорій на мобілці для модалки
  const categorieMarkup2Mobile = categoriesNewMobile
    .map(({ display_name, name }) => {
      return `
        <li class="filter-category__item-mobile">
          <button class="categories__link_other">${display_name}</button>
        </li>
      `;
    })
    .join('');
  refs.renderContainerCategoriesTheme.insertAdjacentHTML(
    'beforeend',
    categorieMarkup2Mobile
  );
}
export function handleCategoryClick(event) {
  const categoryForSearch = event.target.textContent;

  if (
    event.target.closest('.categories-render-container__list-desktop') ||
    event.target.closest('.categories-render-container__list-mobile') ||
    event.target.closest('.categories-render-container__list-tablet') ||
    event.target.closest('.other--categories__filters-list') ||
    (event.target.closest('.other--categories__filters') &&
      !event.target.closest('.categories-render-container__other-categories'))
  ) {
    showNewsByCategory(categoryForSearch);
  }
}

const categoryButtons = document.querySelectorAll(
  '.categories-render-container'
);

categoryButtons.forEach(button => {
  button.addEventListener('click', handleCategoryClick);
});
