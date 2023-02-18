import { refs } from '../refs';
import { getCategories } from '../API/getCategories';

refs = {
  categoryContainerEl: document.querySelector('.filter-category__container'),
  otherList: document.querySelector('.filter-category__others-container'),
  othersBtEl: document.querySelector('.filter-category__others-button > span'),
  listButtons: document.querySelector('.filter-category__list-bt'),
  loader: document.querySelector('.news-loader__container.container'),
  pagination: document.querySelector('.pagination_search'),
  listNews: document.querySelector('ul.list-news'),
};

async function renderCategories() {
  const categories = await getCategories();
  const categoriesList = categories.map(category => {
    return `<li class="filter-category__item">
        <button class="filter-category__button" data-category="${category}">${category}</button>
        </li>`;
  });
  refs.categoryContainerEl.insertAdjacentHTML(
    'beforeend',
    categoriesList.join('')
  );
}

export { renderCategories };
