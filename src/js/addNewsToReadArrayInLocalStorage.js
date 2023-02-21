import { refs } from './refs';



    // const wasRead = document.querySelector(".news__container");
    // const links = document.querySelectorAll(".news__link");
    // const already = document.querySelector(".news__Already-read");

    
export function addNewsToReadArrayInLocalStorage() {
    const container = refs.favouriteNewsContainer;
    container.addEventListener('click', addNewsToReadArray);
};

function addNewsToReadArray(event) {

    //записування в масив read
    if (event.target.getAttribute('class') === "news__link") {
        //додавання класу для стилю
        const box = event.target.closest('li');
        box.classList.add('was-read');
        //витягування об'єкту
        getDataFromNewsCard();
        addToRead();
      } else if(event.target.getAttribute('class') === "news__link" /* для кнопки add to favorite */) {
        //записування в масив favorite
        getDataFromNewsCard();
        addToFavorite();
      }

    
    
}


function getDataFromNewsCard(){
    const newsObject = {};
        newsObject.id = box.dataset.id;
        newsObject.category = box.news__category;
        newsObject.wasRead = box.wasRead;
        newsObject.img = box.news__img;
        // newsObject.imgAlt = box.news__img.img.alt;
            newsObject.title = box.news__title;
        newsObject.description = box.news__abstract;
        newsObject.date = box.news__date;
            newsObject.favorite =
            newsObject.link = box.news__link;
        console.log(box);
        console.log(box.childNotes);
}


function addToRead(){
    //первірка чи є такий об'єкт в масиві
    //отримати поточну дату
    //перевірити чи є така дата в масиві
    //в об'єкті дати перевірити чи є ця новина
    //додати новину якщо немає
    //localStorage.read.push(newsObject);
};

function addToFavorite() {
    //первірка чи є такий об'єкт в масиві
    //додати якщо немає
    //localStorage.read.push(newsObject);
};

/* {
    id: "100000008772688",
    category: "Technology",
    wasRead:true,
    img: "https://static01.nyt.com/images/2023/02/16/reader-center/bing-roose-hp/bing-roose-hp-mediumThreeByTwo440-v3.png",
    imgAlt: "Altimg",
    title: "A Conversation With Bing’s Chatbot Left Me Deeply Unsettled",
    description: "A very strange conversation with the chatbot built into Microsoft’s search engin...",
    date: "2023/02/17",
    favorite: "true",
    link: "https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html",
  } */