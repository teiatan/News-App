import {refs} from '../refs';
//сonst news = localStorage.read;
const news = [
    {
        dateOfReading: "21.02.2023",
        readNews: [{
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
          },
          {
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
          },
          {
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
          }]
    },
    {
        dateOfReading: "20.02.2023",
        readNews: [{
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
          },
          {
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
          },
          {
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
          }]
    }
];
localStorage.setItem("read", JSON.stringify(news));
export function showReadNews() {
    if(localStorage.read === "" || localStorage.read === undefined || localStorage.read === null) {
        return;
      } else {
    //console.log('gfhj');
    const newsMarkup = news.map(({dateOfReading, readNews}) => {
        //console.log(dateOfReading);

        return`
        <li class="date__item">
        <div class="date__click-container">
            <h3 class="date__title">${dateOfReading}</h3>
            <span date__marker>&#11167</span>
        </div>
            <ul class="date__news-list render-container">${readNews.map(
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
            
            if(!localStorage.getItem("read")){
                   return;
                }
        
                return`
                <li class="news__item card" data-id=${id}>
                <span class="news__category is-hidden">${category}</span>
                <span class="news__read is-hidden"></span>
                <div class="news__container-img">
                
                <button class="news__favorite">Add to favorite</button>
                <img src="${img}" alt="${imgAlt}" class="news__img"/>
                </div>
                <h3 class="news__title">${title}</h3>
                <p class="news__abstract">${description}</p>
                
                <span class="news__date">${date.replaceAll('-' , '/')}</span>
                <a href="${link}" class="news__link" target = "_blank">Read more</a>
            </li>
        ` }).join('')}
        </ul>
        </li>`
    }).join('');
    refs.renderContainerReadPage.innerHTML = newsMarkup;
    //addEventListenersForDateBtns();
};
};
/* 
function addEventListenersForDateBtns() {
  document.querySelector('.container').addEventListener('click', showDateCards);
};

function showDateCards(event) {
  console.log(event.target);
  if(event.target.getAttribute('class') === "date__click-container") {
    event.target.closest('ul').classList.remove('is-hidden');
  }
}; */