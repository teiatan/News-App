import {refs} from '../refs';
import { addNewsToFavoriteArrayInLocalStorage } from '../addNewstoFavoriteLocalStorige';
import { fillAbsentDataInNewsCard } from './newsCardSample';
import { addNewsToReadArrayInLocalStorage } from '../addNewsToReadArrayInLocalStorage';
//сonst news = localStorage.read;
const news = [
  {dateOfReading: "24.02.2023",
  readNews: [
      {
          "id": "nyt://article/fe6a2ccd-b317-5255-9cb8-797151f0bb06",
          "category": "News",
          "title": "Men’s Wear Puts on the Dog",
          "img": "https://static01.nyt.com/images/2023/01/12/fashion/11pitti-pet10-flhz/11pitti-pet10-flhz-articleLarge.jpg",
          "description": "A pavilion dedicated to the multibillion-dollar market in pet apparel makes its debut at the world’s largest men’s wear trade show.",
          "date": "2023/01/12",
          "link": "https://www.nytimes.com/2023/01/12/style/mens-wear-puts-on-the-dog.html",
          "favorite": true,
          "wasRead": ""
      },
      {
          "id": "nyt://article/efad5094-18ef-5bec-9912-1269354e4ad5",
          "category": "News",
          "title": "Puppies on Prozac: How to Handle Your Pet’s Anxiety",
          "img": "https://static01.nyt.com/images/2022/11/15/well/10Well-NL-Pet-Meds/10Well-NL-Pet-Meds-articleLarge.jpg",
          "description": "Veterinarians say they have seen an increasing number of pets experiencing mental distress. Here’s how to spot the signs.",
          "date": "2022/11/11",
          "link": "https://www.nytimes.com/2022/11/10/well/pet-anxiety-meds.html",
          "favorite": true,
          "wasRead": ""
      },
      {
          "id": "nyt://article/25bfc8fb-0081-5105-a9b7-e8dd8ff991df",
          "category": "News",
          "title": "Your Cat Might Not Be Ignoring You When You Speak",
          "img": "https://static01.nyt.com/images/2022/11/29/science/00tb-cats1/merlin_194921559_c9e53b04-169a-4144-bd76-9ec2d987c35c-articleLarge.jpg",
          "description": "Cats have a reputation for being aloof, but a new study has found that their relationships with their owners may be stronger than we thought ...",
          "date": "2022/11/12",
          "link": "https://www.nytimes.com/2022/11/12/science/cat-talking-owners-voice-dog.html",
          "favorite": true,
          "wasRead": ""
      }],
  
  
  
  }
    ,{
        dateOfReading: "23.02.2023",
        readNews: [
          {
              "id": "nyt://article/929fb517-f957-5ef8-ac68-97361f20fb75",
              "category": "News",
              "title": "Gary Oldman Found James Dean and His Wife at a Gallery",
              "img": "https://static01.nyt.com/images/2022/12/11/arts/11my-ten-oldman-wen/11my-ten-oldman-wen-articleLarge.jpg",
              "description": "The Oscar-winning star of “Slow Horses” on Apple TV+ likes comedians in dramas, makes photos the hard way and is still discovering the Beatl ...",
              "date": "2022/12/05",
              "link": "https://www.nytimes.com/2022/12/05/arts/television/gary-oldman-slow-horses.html",
              "favorite": true,
              "wasRead": ""
          },
          {
              "id": "nyt://article/d4b2d7c2-4f96-58e6-8143-1ea0ab5d495a",
              "category": "News",
              "title": "Deforestation Brings Bat-Borne Virus Home to Roost",
              "img": "https://static01.nyt.com/images/2022/11/29/science/16hendra1/16hendra1-articleLarge.jpg",
              "description": "Habitat loss and food shortages have pushed bats into closer proximity to horses and humans, fueling Hendra virus spillover, a new study sug ...",
              "date": "2022/11/16",
              "link": "https://www.nytimes.com/2022/11/16/health/deforestation-bats-hendra-virus.html",
              "favorite": true,
              "wasRead": ""
          },
          {
              "id": "nyt://article/4d46843f-798e-5e8b-bff2-7414314c72a2",
              "category": "News",
              "title": "The Horse Who Reignited New York’s Carriage Ride Controversy Has Died",
              "img": "https://static01.nyt.com/images/2022/10/17/multimedia/17ny-horse-1-c8b5/17ny-horse-1-c8b5-articleLarge.jpg",
              "description": "Carriage rides have charmed tourists and drawn critics since the 19th century. A horse’s collapse on a Midtown street in August revived call ...",
              "date": "2022/10/17",
              "link": "https://www.nytimes.com/2022/10/17/nyregion/carriage-ride-horse-dead.html",
              "favorite": true,
              "wasRead": ""
          }
      ]
    },
    {
        dateOfReading: "22.02.2023",
        readNews: [
          
          {
              "id": "undefined",
              "category": "Guides",
              "title": "How to Get Holiday Coziness, Year-Round",
              "img": "https://static01.nyt.com/images/2022/11/24/fashion/23pilar-book2/23pilar-book2-articleLarge.jpg",
              "description": "The media power couple Pilar Guzmán and Chris Mitchell shared their secrets to crafting an inviting home for the festive season and beyond.",
              "date": "2022/11/24",
              "link": "https://www.nytimes.com/2022/11/24/style/cozy-holiday-design-tips.html",
              "favorite": true,
              "wasRead": ""
          }
      ]
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
    addNewsToReadArrayInLocalStorage();
    addNewsToFavoriteArrayInLocalStorage();
    //fillAbsentDataInNewsCard();
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