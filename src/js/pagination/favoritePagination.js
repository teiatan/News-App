import { refs } from '../refs';
import { createPagin } from './pagin.js';
import {refs} from '../refs';
const favorite = JSON.parse(localStorage.getItem ("favorite"));
const perPage = 3;
let pageNum = 1;
const pages = Math.ceil(favorite.length / perPage);
let newsPerPage = [];

refs.paginConteinBtn.addEventListener('click', onPaginBtnClick);

   
export function showFavoritePagination() {

    if(favorite.length === "" || favorite.length === undefined || favorite.length === null) {
        refs.paginConteinBtn.classList.add('pagination-hidden');
        return;
    } 
    const start = (pageNum - 1) * perPage;

    findNewsPerPage(start);
    createPagin(pages, 1);
    showFavouriteNews(newsPerPage);
}

function onPaginBtnClick(evt) {
   evt.preventDefault();

   const paginBtnEl = evt.target.classList.contains('pg-item');

   if(!paginBtnEl) {
       return;
   }

   pageNum = +evt.target.textContent;
   const start = (pageNum - 1) * perPage;
   findNewsPerPage(start);

   const currentActivePage = document.querySelector('.pg-item.active');
   if(currentActivePage){
         currentActivePage.classList.remove('active');
   }
   evt.target.classList.add('active');

   createPagin(pages, pageNum);
   showFavouriteNews(newsPerPage);
}

function findNewsPerPage(start) {
    const end = start + perPage;
    return newsPerPage = favorite.slice(start, end);
}

function showFavouriteNews(news) {
    const newsMarkup = news.map(
               ({
           id,
           category,
           wasRead,
           img,
           imgAlt,
           title,
           description,
           date,
           favorite,
           link
        }) => {
               return`
       <li class="news__item card" data-id=${id}>
       <p class="news__Already-read is-hidden">Already read 
         <svg class="news__svg news_svg-alreagy-read>
             <use href="/sprite.e70822e0.svg#Vector-1"></use>
         </svg>
       </p>
       <div class="news__container">
         <span class="news__read is-hidden"></span>
         <div class="news__container-img">
       
         <button class="news__favorite">Add to favorite
         <svg class="news__svg news__svg-heart">
             <use href="/sprite.e70822e0.svg#heartDisable"></use>
         </svg>
         <svg class="news__svg news__svg-heart" style="display:none">
             <use href="/sprite.e70822e0.svg#heartActive"></use>
         </svg>
         </button>
       
         <img src="${img}" alt="${imgAlt}" class="news__img"/>
       </div>
       
       <h3 class="news__title">${title}</h3>
       <p class="news__abstract">${description}</p>
         
       <span class="news__date">${date}</span>
       <p class="news__category news__marker-search">${category}</p>
       <a href="${link}" class="news__link" target = "_blank">Read more</a></div>
       </li>
       ` }).join('');
       refs.favouriteNewsContainer.innerHTML = newsMarkup;
}