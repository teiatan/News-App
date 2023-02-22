import { refs } from '../refs';
import { getNewsByCategory } from '../API/getNewsByCategory';

export async function showNewsByCategory(category) {
  const newsList = await getNewsByCategory(category);
  renderNewsList(newsList);
}

export function renderNewsList(newsList) {
  const newsMarkup = newsList
    .map(news => {
      const { url, id, title, abstract, subsection, published_date, media } =
        news;

      let imgSrc = '';
      let alt = '';

      if (media.length > 0) {
        imgSrc = media[0]['media-metadata'][2].url;
        alt = media[0].caption;
      } else {
        imgSrc = '/assets/actions-config-step-1.png';
      }

      return `
      <li class="news__item card" data-id="${id}">
        <p class="news__Already-read is-hidden">
          Already read 
          <svg class="news__svg news_svg-alreagy-read">
            <use href="/sprite.e70822e0.svg#Vector-1"></use>
          </svg>
        </p>
        <div class="news__container">
          <span class="news__read is-hidden"></span>
          <div class="news__container-img">
            <button class="news__favorite">
              Add to favorite
              <svg class="news__svg news__svg-heart">
                <use href="/sprite.e70822e0.svg#heartDisable"></use>
              </svg>
              <svg class="news__svg news__svg-heart" style="display:none">
                <use href="/sprite.e70822e0.svg#heartActive"></use>
              </svg>
            </button>
            <img src="${imgSrc}" alt="${alt}" class="news__img"/>
          </div>
          <h3 class="news__title">${title}</h3>
          <p class="news__abstract">${abstract}</p>
          <span class="news__date">${published_date.replaceAll('-', '/')}</span>
          <p class="news__category news__marker-search">${subsection}</p>
          <a href="${url}" class="news__link" target="_blank">Read more</a>
        </div>
      </li>
    `;
    })
    .join('');

  refs.renderContainerHome.innerHTML = '';
  refs.renderContainerHome.insertAdjacentHTML('afterbegin', newsMarkup);
}
