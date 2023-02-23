import Notiflix from 'notiflix';
import { refs } from './refs';
import { openAuthModal } from './modalOpening';


export function addNewsToReadArrayInLocalStorage() {
  const containerWithCards = document.querySelector('.render-container');
  containerWithCards.addEventListener('click', addNewsToReadArray);


}


function addNewsToReadArray(event) {
    
  if (event.target.getAttribute('class') === "news__link") {
    console.log('клік ту рід працює');
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
      localStorage.setItem ("dayNews", JSON.stringify(newsTargetObject));
      
    } else {
      //console.log("localStorage не порожній");
      const filledFavoriteArray = JSON.parse(localStorage.getItem ("dayNews"));
      //console.log(filledFavoriteArray);
      //console.log(typeof filledFavoriteArray);
      if(filledFavoriteArray.id === newsTargetObject.id) {
        localStorage.favorite = "";
        
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
                localStorage.setItem ("dayNews", JSON.stringify(box));
                //console.log(filledFavoriteArray);
              } else {
                const box = filledFavoriteArray;
                box.splice(newsId, 1);
                localStorage.setItem ("dayNews", JSON.stringify(box));
                //console.log(filledFavoriteArray);
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
