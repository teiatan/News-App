import { showFavouriteNews} from '../render/renderFavoriteNews.js';
import { createPagin } from './pagin.js';
import {refs} from '../refs';
const gitHubPath = "/News-App/sprite.601f618d";
const favorite = JSON.parse(localStorage.getItem ("favorite"));
const paginConteinBtn = document.getElementById('pagination');
const perPage = 3;
const pages = Math.ceil(favorite.length / perPage);

let newsPerPage = [];
let newsArr = [];
paginConteinBtn.addEventListener('click', onPaginBtnClick);

const start = 1 * perPage;
const end = start + perPage;
newsPerPage = favorite.slice(start, end);
newsArr.push(newsPerPage);
//console.log(newsArr[0]);

const newsMarkup = newsPerPage.map(
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
   <p class="news__Already-read">Already read &#128504
     <svg class="news__svg news_svg-alreagy-read>
         <use href="/News-App/sprite.e70822e0.svg#Vector-1"></use>
     </svg>
   </p>
   <div class="news__container">
     <span class="news__read is-hidden"></span>
     <div class="news__container-img">
   
     <button class="news__favorite">Add to favorite
     <svg class="news__svg news__svg-heart">
         <use href="/News-App/sprite.e70822e0.svg#heartDisable"></use>
     </svg>
     <svg class="news__svg news__svg-heart" style="display:none">
         <use href="/News-App/sprite.e70822e0.svg#heartActive"></use>
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
 

export function showFavoritePagination(item) {



   // if(favorite.length === 0) {
   //    return;
   // } 

   // for(let i = 1; i <= pages; i += 1) {
   //    createPagin(pages, i);
   // } 
   createPagin(pages, 1);
   // showFavouriteNews(item);
}

function onPaginBtnClick(evt) {
   evt.preventDefault();

   const paginBtnEl = evt.target.classList.contains('pg-item');

   if(!paginBtnEl) {
       return;
   }

   const pageNum = +evt.target.textContent;
   const start = (pageNum - 1) * perPage;
   const end = start + perPage;
   newsPerPage = favorite.slice(start, end);
   console.log(newsPerPage);
   newsArr.push(newsPerPage);

   const currentActivePage = document.querySelector('.pg-item.active');

   if(currentActivePage){
         currentActivePage.classList.remove('active');
   }
   evt.target.classList.add('active');

   createPagin(pages, pageNum);
   showFavouriteNews(newsPerPage);
}
//console.log(newsArr);

showFavoritePagination(newsArr[0]);


// // export news */