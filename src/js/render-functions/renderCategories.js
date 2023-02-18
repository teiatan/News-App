import { refs } from '../refs';
import { getCategories } from '../API/getCategories';

const refs = {
  categoryContainerEl: document.querySelector('.filter-category__container'),
  otherList: document.querySelector('.filter-category__others-container'),
  othersBtEl: document.querySelector('.filter-category__others-button > span'),
  listButtons: document.querySelector('.filter-category__list-bt'),
  loader: document.querySelector('.news-loader__container.container'),
  pagination: document.querySelector('.pagination_search'),
  listNews: document.querySelector('ul.list-news'),
};

let selectedCategoryEl;
let currentNumberCategories = 0;
let outsideCategories = 0;
let windowWidth = 0;

async function getCategoryRender() {
  // получение категорий
  const categories = await getCategories();

  // рендер категорий
  const markup = categories
    .map(category => {
      return `<li class="filter-category__item" data-category="${category.slug}">
            <button class="filter-category__button" type="button">
                <span class="filter-category__button-text">${category.name}</span>
            </button>
        </li>`;
    })
    .join('');
  refs.categoryContainerEl.insertAdjacentHTML('beforeend', markup);

  // рендер кнопки "еще"
  const markup2 = categories
    .map(category => {
      `<li class="filter-category__item filter-category__others">
    <button class="filter-category__others-button" type="button">
        <span class="filter-category__others-button-text">Еще</span>
    </button>
</li>`;
    })
    .join('');
  refs.categoryContainerEl.insertAdjacentHTML('beforeend', markup2);

  // рендер категорий в "еще"
  const markup3 = categories

    .map(category => {
      return `<li class="filter-category__others-item" data-category="${category.slug}">
            <button class="filter-category__others-button" type="button">
                <span class="filter-category__others-button-text">${category.name}</span>
            </button>
        </li>`;
    })
    .join('');
  refs.otherList.insertAdjacentHTML('beforeend', markup3);

  // скрытие категорий в "еще"
  const categoryItems = document.querySelectorAll('.filter-category__item');
  categoryItems.forEach(item => {
    if (currentNumberCategories < 6) {
      item.classList.remove('filter-category__item-hidden');
      currentNumberCategories += 1;
    } else {
      item.classList.add('filter-category__item-hidden');
      outsideCategories += 1;
    }
  });
  refs.othersBtEl.textContent = `Еще ${outsideCategories}`;
}

function onClickOther(e) {
  e.preventDefault();
  const target = e.target;
  const category = target.dataset.category;
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  if (target.nodeName === 'BUTTON') {
    selectedCategory = category;
    selectedCategoryEl = target;
  }
  if (selectedCategoryEl) {
    selectedCategoryEl.classList.remove('filter-category__button-active');
  }
  selectedCategoryEl = target;
  selectedCategoryEl.classList.add('filter-category__button-active');
  refs.listButtons.textContent = selectedCategoryEl.textContent;
  refs.listButtons.classList.add('filter-category__list-bt-active');
  document
    .querySelector('.page-container-cat')
    .classList.remove('pagination-cat-hidden');
  refs.pagination.classList.add('pagination-cat-hidden');
  refs.listNews.innerHTML = '';
  refs.loader.classList.remove('news-loader__container-hidden');
  refs.loader.classList.add('news-loader__container-visible');
  // console.log(selectedCategory);
  // console.log(selectedCategoryEl);
  // console.log(selectedCategoryEl.textContent);
}

export { getCategoryRender };
