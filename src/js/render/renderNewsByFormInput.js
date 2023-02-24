import { refs } from '../refs';
import { weatherMarkup } from '../API/getWeather';
import { addNewsToFavoriteArrayInLocalStorage } from '../addNewstoFavoriteLocalStorige';
import { fillAbsentDataInNewsCard } from './newsCardSample';
import { addNewsToReadArrayInLocalStorage } from '../addNewsToReadArrayInLocalStorage';
const gitHubPath = "/News-App/sprite.601f618d";
export async function showNewsByFormInput(apiFetch) {
    renderNewsByFormInput(await apiFetch);
};

export async function renderNewsByFormInput(results) {
  refs.renderContainerHome.innerHTML = '';
  let imgSrc = '';
  
  if( results.response.docs.length === 0) {
   refs.renderContainerHome.classList.add('is-hidden');
   refs.negativeSearch.classList.remove('is-hidden');
  }
  else {
    
    const newsMarkup = results.response.docs.map(
    ({
        web_url,
        _id,
        headline,
        abstract,
        type_of_material,
        pub_date,
        multimedia,


    }) => 
  
    {
      if(multimedia.length !== 0) {
        imgSrc = `https://static01.nyt.com/${multimedia[0].url}`;
      } else {
        imgSrc = 'https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg'
      }

      return `
      <li class="news__item card" data-id=${_id}>
      <p class="news__Already-read">Already read &#128504
          <svg style="display:inline" width="17px" height="13px">
              <use href="/sprite.e70822e0.svg#Vector-1"></use>
          </svg>
      </p>
      <div class="news__container">
        <span class="news__read is-hidden"></span>
        <div class="news__container-img">
         <button class="news__favorite">Add to favorite</button>
         <img src="${imgSrc}" alt="" class="news__img"/>
      </div>
      <h3 class="news__title">${headline.main}</h3>
      <p class="news__abstract">${abstract}</p>
        
      <span class="news__date">${pub_date.split('').splice(0, 10).join('').replaceAll('-', '/')}</span>
      <p class="news__category news__marker-search">${type_of_material}</p>
      <a href="${web_url}" class="news__link" target = "_blank">Read more</a></div>
  </li>
      `;
    }
  )
  .join('');
  const markup = weatherMarkup.concat(newsMarkup);
  refs.renderContainerHome.insertAdjacentHTML('afterbegin', markup);
  addNewsToReadArrayInLocalStorage();
  addNewsToFavoriteArrayInLocalStorage();
  fillAbsentDataInNewsCard();
}
}