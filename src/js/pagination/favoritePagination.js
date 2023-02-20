const paginConteinBtn = document.getElementById('pagination');
//const favorite = localStorage.favorite;
const favorite = [ 1, 1, 1, 1, 1, 1, 1, 1, 1];
const perPage = 3;
let pages = Math.ceil(favorite / perPage);
// let page = 1;
let paginationMarkUp = "";
// const paginationButon = "<button></button>";


export function showFavoritePagination() {

 if(favorite.length === 0) {
    return;
 } else {

    for(let i = 1; i < pages; i += 1) {
      paginationMarkUp + `<div><a class="page-nmb" href="#">${i}</a></div>`;
    } 
 }

 paginConteinBtn.innerHTML = paginationMarkUp;
}
