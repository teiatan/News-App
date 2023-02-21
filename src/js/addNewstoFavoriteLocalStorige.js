import { refs } from './refs';

export function addNewsToFavoriteArrayInLocalStorage() {
  const container = refs.favouriteNewsContainer;
  container.addEventListener('click', addNewsToFavoriteArray);

 
}
let NewLocalStorige = []
 
function addNewsToFavoriteArray(event) {
  if (event.target.nodeName === 'BUTTON') {
    const FavoriteBox = event.target.closest('li');
    console.log(FavoriteBox);

    const newsObject = {
        id: FavoriteBox.dataset.id,
        category: FavoriteBox.lastElementChild.children[5].innerText,
        title: FavoriteBox.lastElementChild.children[2].innerText,
        img: FavoriteBox.lastElementChild.children[1].children[1].attributes.src.nodeValue,
        description: FavoriteBox.lastElementChild.children[3].innerText,
        date: FavoriteBox.lastElementChild.children[4].innerText,
        link: FavoriteBox.lastElementChild.children[6].attributes[0].value,
        favorite: 'true',
        wasRead: 'true',

    }
  
    localStorage.setItem("NewLocalStorige", JSON.stringify(newsObject));
   
    // getDataFromNewsCard();
    // addToFavorite();
  }
}

