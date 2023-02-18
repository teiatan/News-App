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

refs.otherList.addEventListener('click', onClickOther);
refs.listButtons.addEventListener('click', onClickList);

async function getCategoryRender() {
  if (!refs.categoryContainerEl) {
    return;
  }
  const category = await getCategory();
  const categoryMarkup = category
    .map(({ name }) => {
      return `<li class="filter-category__item">
            <a href="#" class="filter-category__link">${name}</a>
          </li>`;
    })
    .join('');
  refs.categoryContainerEl.insertAdjacentHTML('beforeend', categoryMarkup);

  const otherMarkup = category
    .map(({ name }) => {
      return `<li class="filter-category__item">
            <a href="#" class="filter-category__link">${name}</a>
          </li>`;
    })
    .join('');
  refs.otherList.insertAdjacentHTML('beforeend', otherMarkup);

  const listMarkup = category
    .map(({ name }) => {
      return `<li class="filter-category__item">
            <a href="#" class="filter-category__link">${name}</a>
          </li>`;
    })
    .join('');
  refs.listButtons.insertAdjacentHTML('beforeend', listMarkup);

  const otherList = document.querySelector(
    '.filter-category__others-container'
  );
  const listButtons = document.querySelector('.filter-category__list-bt');
  const othersBtEl = document.querySelector(
    '.filter-category__others-button > span'
  );
  const categoryContainerEl = document.querySelector(
    '.filter-category__container'
  );
  const listNews = document.querySelector('ul.list-news');
  const pagination = document.querySelector('.pagination_search');
  const loader = document.querySelector('.news-loader__container.container');

  function onClickOther(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'A') {
      return;
    }
    const value = e.target.textContent;
    listNews.innerHTML = '';
    pagination.innerHTML = '';
    loader.classList.remove('is-hidden');
    categoryContainerEl.classList.add('is-hidden');
    otherList.classList.add('is-hidden');
    listButtons.classList.add('is-hidden');
    othersBtEl.textContent = value;
  }

  function onClickList(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'A') {
      return;
    }
    const value = e.target.textContent;
    listNews.innerHTML = '';
    pagination.innerHTML = '';
    loader.classList.remove('is-hidden');
    categoryContainerEl.classList.add('is-hidden');
    otherList.classList.add('is-hidden');
    listButtons.classList.add('is-hidden');
    othersBtEl.textContent = value;
  }

  function onClickOthersBt(e) {
    e.preventDefault();
    categoryContainerEl.classList.remove('is-hidden');
    otherList.classList.remove('is-hidden');
    listButtons.classList.remove('is-hidden');
  }

  othersBtEl.addEventListener('click', onClickOthersBt);

  return category;
}

export { getCategoryRender };
