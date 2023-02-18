import { refs } from '../refs';
import { weatherMarkup } from '../API/getWeather';

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
              <span class="news__category is-hidden">${subsection}</span>
              <span class="news__read is-hidden"></span>
              <div class="news__container-img">
              
              <button class="news__favorite">Add to favorite</button>
              <img src="${imgSrc}" alt="${alt}" class="news__img"/>
              </div>
              <h3 class="news__title">${title}</h3>
              <p class="news__abstract">${abstract}</p>
              
              <span class="news__date">${published_date.replaceAll('-' , '/')}</span>
              <a href="${url}" class="news__link" target = "_blank">Read more</a>
              
          </li>
      `
      
    }
  )
  .join('');
  const markup = weatherMarkup.concat(newsMarkup);
  refs.renderContainerHome.insertAdjacentHTML('afterbegin', markup);
}