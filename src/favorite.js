import Notiflix from 'notiflix';
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';
import {addFavouriteNews} from './js/render-functions/renderFavoriteNews';
import { refs } from './js/refs';

Notiflix.Loading.pulse();
defaultLocalStorage();
addModalOpenListeners();
headerLogic();

window.setTimeout(Notiflix.Loading.remove(), 5000);


  export const news = {
    category: "Technology",
    date: "2023/02/17",
    description: "A very strange conversation with the chatbot built into Microsoft’s search engin...",
    favorite: "true",
    id: "100000008772688",
    img: "https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",
    link: "https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html",
    title: "A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",
    uri: "nyt://article/dcfd6326-f015-5837-b84b-1f6ef1dbeaf6",
  };
  
  localStorage.setItem("news", JSON.stringify(news));
  
  const savedSettings = localStorage.getItem("news");
  const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings);
//-----Перевірка чи LocalStorage пустий
if(!localStorage.getItem('news')){
    alert("Not found news");
}
refs.favouriteNews.innerHTML = addFavouriteNews();
