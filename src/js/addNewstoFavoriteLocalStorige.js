import Notiflix from 'notiflix';
import { refs } from './refs';
import { openAuthModal } from './modalOpening';


export function addNewsToFavoriteArrayInLocalStorage() {
  const containerWithCards = refs.favouriteNewsContainer;
  containerWithCards.addEventListener('click', addNewsToFavoriteArray);

 
}

let newLocalStorage = [];
 
function addNewsToFavoriteArray(event) {
  console.log("клік працює")
  if(localStorage.auth === 'no') {
    console.log("не авторизовано")
    Notiflix.Notify.failure('Sorry, for using this opportunity you need to be signed in');
    openAuthModal();
    return;
  } else if (event.target.nodeName === 'BUTTON') {
    //console.log("авторизовано")
    const favoriteTargetElement = event.target.closest('li');
    const newsTargetObject = {
        id: favoriteTargetElement.dataset.id,
        category: favoriteTargetElement.lastElementChild.children[5].innerText,
        title: favoriteTargetElement.lastElementChild.children[2].innerText,
        img: favoriteTargetElement.lastElementChild.children[1].children[1].attributes.src.nodeValue,
        description: favoriteTargetElement.lastElementChild.children[3].innerText,
        date: favoriteTargetElement.lastElementChild.children[4].innerText,
        link: favoriteTargetElement.lastElementChild.children[6].attributes[0].value,
        favorite: true,
        wasRead: '',
      };
    const favoriteArrayFromLocalStorage = localStorage.favorite;
    console.log("масив прийшов");
    if(favoriteArrayFromLocalStorage === "" || favoriteArrayFromLocalStorage === [] || favoriteArrayFromLocalStorage === {}) {
      console.log("localStorage порожній");
      localStorage.setItem ("favorite", JSON.stringify(newsTargetObject));
      //console.log(`localStorage після додавання нового об'єкту:`);
      //console.log(localStorage.favorite);
      //console.log("тип localStorage.favorite після додавання об'єкту");
      //console.log(typeof localStorage.favorite);
    } else {
      //console.log("localStorage не порожній");
      const filledFavoriteArray = JSON.parse(localStorage.getItem ("favorite"));
      //console.log(filledFavoriteArray);
      //console.log(typeof filledFavoriteArray);
      if(filledFavoriteArray.id === newsTargetObject.id) {
        localStorage.favorite = "";
      };
    }
  }
}
  

