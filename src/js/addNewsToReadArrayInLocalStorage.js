import Notiflix from 'notiflix';
import { refs } from './refs';
import { openAuthModal } from './modalOpening';


export function addNewsToFavoriteArrayInLocalStorage() {
  const containerWithCards = refs.favouriteNewsContainer;
  containerWithCards.addEventListener('click', addNewsToReadArray);

 
}


function addNewsToReadArray(event) {
  if (event.target.getAttribute('class') === "news__link") {
    const favoriteTargetElement = event.target.closest('li');
    favoriteTargetElement.classList.add('was-read');
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
    
    const dayArrayFromLocalStorage = localStorage.dayNews;
    
    if(dayArrayFromLocalStorage === null || dayArrayFromLocalStorage === undefined || dayArrayFromLocalStorage === "" || dayArrayFromLocalStorage === [] || dayArrayFromLocalStorage === {}) {
      //console.log("localStorage порожній");
      localStorage.setItem ("favorite", JSON.stringify(newsTargetObject));
      event.target.textContent = 'Remove from favorite';
    } else {
      //console.log("localStorage не порожній");
      const filledFavoriteArray = JSON.parse(localStorage.getItem ("favorite"));
      //console.log(filledFavoriteArray);
      //console.log(typeof filledFavoriteArray);
      if(filledFavoriteArray.id === newsTargetObject.id) {
        localStorage.favorite = "";
        event.target.textContent = 'Add to favorite';
      } else {
        //console.log(Array.isArray(filledFavoriteArray));

        if(Array.isArray(filledFavoriteArray)) {
          const newsId = filledFavoriteArray.findIndex((news) =>
            news.id === newsTargetObject.id
          );
          //console.log(newsId);
              if(newsId === -1) {
                const box = filledFavoriteArray;
                box.push(newsTargetObject);
                localStorage.setItem ("favorite", JSON.stringify(box));
                //console.log(filledFavoriteArray);
                event.target.textContent = 'Remove from favorite';
              } else {
                const box = filledFavoriteArray;
                box.splice(newsId, 1);
                localStorage.setItem ("favorite", JSON.stringify(box));
                //console.log(filledFavoriteArray);
                event.target.textContent = 'Add to favorite';
              };

        } else {
          //const box = [];
          //console.log(typeof box);
          //const arrayWith2news = box.push(filledFavoriteArray, newsTargetObject);
          //console.log(arrayWith2news);
          const arrayWith2news = [filledFavoriteArray, newsTargetObject];
          //console.log(typeof arrayWith2news);
          //console.log(arrayWith2news.length);
          localStorage.setItem ("favorite", JSON.stringify(arrayWith2news));
          //console.log(arrayWith2news);
        }
        /* const newsId = filledFavoriteArray.findIndex((news) => {
          news.id === newsTargetObject.id;
        });
        console.log(newsId);
        if(newsId === -1) {
          filledFavoriteArray.push(newsTargetObject);
        } else {
          filledFavoriteArray.splice(3, 1);
        } */
      } 
    }
  }
}
  

