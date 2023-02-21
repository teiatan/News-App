const paginConteinBtn = document.getElementById('pagination');
//const favorite = localStorage.favorite;
// const favorite = [ 1, 1, 1, 1, 1, 1, 1, 1, 1];
const favorite = test;
const perPage = 3;
let pages = Math.ceil(favorite.length / perPage);
export const news = [];
let paginationMarkUp = [];

paginConteinBtn.addEventListener('click', onPaginBtnClick);

export function showFavoritePagination() {

   if(favorite.length === 0) {
      return;
   } 

   for(let i = 1; i <= pages; i += 1) {
      const onePaginationBtnMarkup = `<button class="page-nmb" page="${i}">${i}</button>`;
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

   const pageNum = evt.target.textContent;
   const markupOfNewsForShowingByPagination = favorite.slice((pageNum-1), (pageNum-1+perPage));
   news = [...markupOfNewsForShowingByPagination];
}

showFavoritePagination();


// export news