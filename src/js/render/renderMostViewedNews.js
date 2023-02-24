import { refs } from '../refs';
import { weatherMarkup } from '../API/getWeather';
import { fillAbsentDataInNewsCard } from './newsCardSample';
import { addNewsToFavoriteArrayInLocalStorage } from '../addNewstoFavoriteLocalStorige';
import { addNewsToReadArrayInLocalStorage } from '../addNewsToReadArrayInLocalStorage';
export async function showMostViewedNews(apiFetch) {
    renderMostViewedNews(await apiFetch);
};

export async function renderMostViewedNews({results}) {
  refs.renderContainerHome.innerHTML = '';
  
  let imgSrc = '';
  let mediaMetaData = 2;
  let alt;
  
  const newsMarkup = results
  .map(
    ({
      url,
      id,
      title,
      abstract,
      subsection,
      published_date,
      media,
      
    }) => {
      if(media.length === 0) {
        imgSrc = '/assets/actions-config-step-1.png';
      } else {
        imgSrc = media[0]["media-metadata"][`${mediaMetaData}`].url
        alt = media[0]["caption"]
      }
      
      return `
          <li class="news__item card" data-id=${id}>
            <p class="news__Already-read">Already read &#128504
              <svg class="news__svg news_svg-alreagy-read>
                  <use href="/News-App/sprite.601f618d.svg#Vector-1"></use>
              </svg>
            </p>
            <div class="news__container">
              <span class="news__read is-hidden"></span>
              <div class="news__container-img">

              <button class="news__favorite">Add to favorite
              <svg class="news__svg news__svg-heart">
                  <use href="/News-App/sprite.601f618d.svg#heartDisable"></use>
              </svg>
              <svg class="news__svg news__svg-heart" style="display:none">
                  <use href="/News-App/sprite.601f618d.svg#heartActive"></use>
              </svg>
              </button>

              <img src="${imgSrc}" alt="${alt}" class="news__img"/>
            </div>

            <h3 class="news__title">${title}</h3>
            <p class="news__abstract">${abstract}</p>
              
            <span class="news__date">${published_date.replaceAll('-' , '/')}</span>
            <p class="news__category news__marker-search">${subsection}</p>
            <a href="${url}" class="news__link" target = "_blank">Read more</a></div>
          </li>
      `
      
    }
  )
  .join('');
  const markup = weatherMarkup.concat(newsMarkup);
  refs.renderContainerHome.insertAdjacentHTML('afterbegin', markup);
  //fillAbsentDataInNewsCard();
  addNewsToReadArrayInLocalStorage();
  addNewsToFavoriteArrayInLocalStorage();
  fillAbsentDataInNewsCard();
  /* const wasRead = document.querySelector(".news__container");
  const links = document.querySelectorAll(".news__link");
  const already = document.querySelector(".news__Already-read"); */

  
  //console.log(links);

  //links.forEach(link => {
  //  link.addEventListener("click", function (){
  //    if ('click') {
  //      wasRead.classList.add('news__was-read');
  //      already.classList.add('visible');   
        
  //     }
  //  })
  //});

  // const handleClick = () => {
  //   if ('click') {
  //      wasRead.classList.add('news__was-read');
  //      already.classList.add('visible');   
       
  //     }
  //   console.log("Button was clicked");
  // };

  // links.addEventListener("click", handleClick);
  
}



