const paginConteinBtn = document.getElementById('pagination');
//const favorite = localStorage.favorite;
const favorite = [ 1, 1, 1, 1, 1, 1, 1, 1, 1];
const perPage = 3;
let pages = Math.ceil(favorite.length / perPage);
// let page = 1;
let paginationMarkUp = [];

// const paginationButon = "<button></button>";


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

showFavoritePagination();