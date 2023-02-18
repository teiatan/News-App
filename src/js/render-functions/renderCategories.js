import { getCategory } from '../API/getCategories';

const refs = {
  categoryContainerEl: document.querySelector('.filter-category__container'),
  otherList: document.querySelector('.filter-category__others-container'),
  othersBtEl: document.querySelector('.filter-category__others-button > span'),
  listButtons: document.querySelector('.filter-category__list-bt'),
  loader: document.querySelector('.news-loader__container.container'),
  pagination: document.querySelector('.pagination_search'),
  listNews: document.querySelector('ul.list-news'),
};

export function getCategoryRender() {
  getCategory().then(data => {
    const categories = data.results;
    const categoryList = categories.map(category => {
      return `<li class="filter-category__item">
        <button class="filter-category__button" data-category="${category.name}">
        <span class="filter-category__button-text">${category.name}</span>
        </button>
        </li>`;
    });
    refs.categoryContainerEl.insertAdjacentHTML(
      'beforeend',
      categoryList.join('')
    );
  });
}
