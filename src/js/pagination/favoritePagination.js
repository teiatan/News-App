import {test} from '../render-functions/renderFavoriteNews.js';
import { showFavouriteNews } from '../render-functions/renderFavoriteNews.js';
const paginConteinBtn = document.getElementById('pagination');
const favorite = test;
const perPage = 3;
const pages = Math.ceil(favorite.length / perPage);

export const news = [];
const paginationMarkUp = [];

paginConteinBtn.addEventListener('click', onPaginBtnClick);

export function showFavoritePagination() {

   if(favorite.length === 0) {
      return;
   } 

   for(let i = 1; i <= pages; i += 1) {
      const onePaginationBtnMarkup = `<button class="page-nmb" data-page="${i}">${i}</button>`;
      paginationMarkUp.push(onePaginationBtnMarkup);
   } 

   paginConteinBtn.insertAdjacentHTML('beforeend', paginationMarkUp.join(''));
}

function onPaginBtnClick(evt) {
   evt.preventDefault();

   const paginBtnEl = evt.target.classList.contains('page-nmb');

   if(!paginBtnEl) {
       return;
   }

   const pageNum = evt.target.dataset.page;
   const start = (pageNum - 1) * perPage;
   const end = start + perPage;

   const markupOfNewsForShowingByPagination = favorite.slice(start, end);
   news = [...markupOfNewsForShowingByPagination];
   showFavouriteNews(news);
}

showFavoritePagination();


// export news