import {refs} from '../refs';
import { addNewsToFavoriteArrayInLocalStorage } from '../addNewstoFavoriteLocalStorige';
const gitHubPath = "/News-App/sprite.601f618d";
import {fillAbsentDataInNewsCard} from './newsCardSample';
 
// const newsArray = [
//     {
//         id: "100000008772688",
//         category: "Technology",
//         wasRead:true,
//         img: "https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",
//         imgAlt: "Altimg",
//         title: "A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",
//         description: "A very strange conversation with the chatbot built into Microsoft’s search engin...",
//         date: "2023/02/17",
//         favorite: "true",
//         link: "https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html",
//       },
//       {
//         id: "100000008772688",
//         category: "Technology",
//         wasRead:true,
//         img: "https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",
//         imgAlt: "Altimg",
//         title: "A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",
//         description: "A very strange conversation with the chatbot built into Microsoft’s search engin...",
//         date: "2023/02/17",
//         favorite: "true",
//         link: "https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html",
//       },
//       {
//         id: "100000008772688",
//         category: "Technology",
//         wasRead:true,
//         img: "https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",
//         imgAlt: "Altimg",
//         title: "A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",
//         description: "A very strange conversation with the chatbot built into Microsoft’s search engin...",
//         date: "2023/02/17",
//         favorite: "true",
//         link: "https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html",
//       }
// // ];

// //localStorage.setItem("news", JSON.stringify(news));
  
// //const savedSettings = localStorage.getItem("news");

export function showFavouriteNews(){
  //console.log(news)
//   const news = newsPerPage;
//   console.log(news);
// //     if(localStorage.favorite === "" || localStorage.favorite === undefined || localStorage.favorite === null) {
// //       return;
// //     } else {
  if(!localStorage.getItem("favorite")){
    return;
  }
const news = JSON.parse(localStorage.getItem ("favorite"));
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
 <p class="news__Already-read">Already read &#128504
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
 addNewsToFavoriteArrayInLocalStorage();
fillAbsentDataInNewsCard();
     }


  
//   localStorage.setItem("news", JSON.stringify(news));
  
//   const savedSettings = localStorage.getItem("news");
//   const parsedSettings = JSON.parse(savedSettings);
// // console.log(parsedSettings);
// //-----Перевірка чи LocalStorage пустий
// if(!localStorage.getItem('news')){
//     
// }
// export function renderFavouriteNews(){
//     // refs.favouriteNews.innerHTML = addFavouriteNews();
// }
// // export function addFavouriteNews(){
// //     return`
// //     <li class="news__item card" data-id=${news.id}>
// //     <span class="news__category is-hidden">${news.category}</span>
// //     <span class="news__read is-hidden"></span>
// //     <div class="news__container-img">
    
// //     <button class="news__favorite">Add to favorite</button>
// //     <img src="${news.img}" alt="${news.title}" class="news__img"/>
// //     </div>
// //     <h3 class="news__title">${news.title}</h3>
// //     <p class="news__abstract">${news.description}</p>
    
// //     <span class="news__date">${news.date.replaceAll('-' , '/')}</span>
// //     <a href="${news.url}" class="news__link" target = "_blank">Read more</a>
    
// // </li>
// //     `
// }