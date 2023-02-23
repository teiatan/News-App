import { refs } from '../refs';
import Notiflix from 'notiflix';
import { createPagin } from './pagin.js';
import {refs} from '../refs';
// const favorite = JSON.parse(localStorage.getItem ("favorite"));
const perPage = 3;
let favorite = [];
let pageNum = 1;
let pages = 1;
let newsPerPage = [];

refs.paginConteinBtn.addEventListener('click', onPaginBtnClick);
 
export function showFavoritePagination() {
    try {
        favorite = JSON.parse(localStorage.getItem ("favorite"));
        pages = Math.ceil(favorite.length / perPage);
        const start = (pageNum - 1) * perPage;

        findNewsPerPage(start);
        createPagin(pages, 1);
        showFavouriteNews(newsPerPage);
    } catch(err) {
        refs.pag.classList.add('pagination-hidden');
        Notiflix.Report.info('Порожньо', 'Ви ще не додали новин', 'OK');
    }

    // if(favorite === [] || favorite === undefined || favorite === null) {
    //     refs.pag.classList.add('pagination-hidden');
    //     Notiflix.Report.info('Порожньо', 'Ви ще не додали новин', 'OK');
    //     return;
    // } 

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
   pages = Math.ceil(favorite.length / perPage);

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

  refs.pag.addEventListener('click', handleButton);

function handleButton(evt) {
    evt.preventDefault();

    
  if (evt.target.classList.contains('js-prev-page')) {
    pageNum -= 1;
    handleButtonLeft();
    refs.nextBtn.disabled = false;

  } else if (evt.target.classList.contains('js-next-page')) {
    pageNum += 1;
    handleButtonRight();
    refs.prevBtn.disabled = false;
  }

  const start = (pageNum - 1) * perPage;
  findNewsPerPage(start);
  createPagin(pages, pageNum);
  showFavouriteNews(newsPerPage);
}

function handleButtonLeft() {
  if (pageNum === 1) {
    refs.prevBtn.disabled = true;
  } else {
    refs.prevBtn.disabled = false;
  }
}
function handleButtonRight() {
  if (pageNum === pages) {
    refs.nextBtn.disabled = true;
  } else {
    refs.nextBtn.disabled = false;
  }
}
