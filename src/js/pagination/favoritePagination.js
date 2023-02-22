import {test} from '../render-functions/renderFavoriteNews.js';
import { showFavouriteNews } from '../render-functions/renderFavoriteNews.js';
const paginConteinBtn = document.getElementById('pagination');
const favorite = test;
const perPage = 3;
const pages = Math.ceil(favorite.length / perPage);

let news = [];
const paginationMarkUp = [];

paginConteinBtn.addEventListener('click', onPaginBtnClick);

export function showFavoritePagination() {

   if(favorite.length === 0) {
      return;
   } 

   for(let i = 1; i <= pages; i += 1) {
      const onePaginationBtnMarkup = `<li class="pg-item"><a class="pg-link" data-page="${i}">${i}</a></li>`;
      paginationMarkUp.push(onePaginationBtnMarkup);
   } 

   paginConteinBtn.insertAdjacentHTML('beforeend', paginationMarkUp.join(''));
}

function onPaginBtnClick(evt) {
   evt.preventDefault();

   const paginBtnEl = evt.target.classList.contains('pg-link');

   if(!paginBtnEl) {
       return;
   }

   const pageNum = evt.target.dataset.page;
   const start = (pageNum - 1) * perPage;
   const end = start + perPage;

   news = favorite.slice(start, end);
   
   console.log(news);
   showFavouriteNews();
}

// showFavoritePagination();


// export news