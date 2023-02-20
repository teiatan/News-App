import { refs } from './refs';



    // const wasRead = document.querySelector(".news__container");
    // const links = document.querySelectorAll(".news__link");
    // const already = document.querySelector(".news__Already-read");

    
export function addNewsToReadArrayInLocalStorage() {
    const container = refs.favouriteNewsContainer;
    container.addEventListener('click', addNewsToReadArray);
};

function addNewsToReadArray(event) {

    
    if (event.target.getAttribute('class') === "news__link") {
        //додавання класу для стилю
        const box = event.target.closest('li');
        box.classList.add('was-read');
        //витягування об'єкту
        const newsObject = {};
        //new.id=box
        console.log(box);
        
      }
    
}

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