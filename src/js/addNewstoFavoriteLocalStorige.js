import { refs } from './refs';

export function addNewsToFavoriteArrayInLocalStorage() {
  const container = refs.favouriteNewsContainer;
  container.addEventListener('click', addNewsToFavoriteArray);

 
}
let newLocalStorage = []
 
function addNewsToFavoriteArray(event) {
  if (event.target.nodeName === 'BUTTON') {
    const FavoriteBox = event.target.closest('li');
   

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
  
    localStorage.setItem('NewLocalStorige', JSON.stringify(newsObject));
   
    const saveFavorite = localStorage.getItem('NewLocalStorige');
    //console.log(saveFavorite);
    
    
    
    const parseFavorite = JSON.parse(saveFavorite)
    console.log(parseFavorite);
        if  ((parseFavorite.id) === newsObject.id) {
console.log('eeeee');
return }
   
else { 
    const push = parseFavorite.push(newsObject)
localStorage.setItem("favorite", JSON.stringify(push));
}
//else щось не добаляє  в favorite, подивись, в мене сьодні вже голова не варить
}
}

