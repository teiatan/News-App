import { refs } from '../refs';
import { getNewsByCategory } from '../api/getNewsByCategory';

// рендер новин по категорії приходить з кнопки категорії  і визиваю функцію взяти масив с АРІ визиваю функцію рендеру
export async function showNewsByCategory(category) {
  const newsList = await getNewsByCategory(category);
  //   console.log(newsList.data.response.docs);
  const { docs } = newsList.data.response;
  //   console.log(docs);

  renderNewsList(docs);
}

export function renderNewsList(newsList) {
  const newsMarkup = newsList
    .map(news => {
      const {
        id,
        headline,
        web_url,
        pub_date,
        section_name,
        abstract,
        multimedia,
      } = news;

      const multimediaImage = multimedia.find(
        item => item.type === 'image' && item.subtype === 'xlarge'
      );

      const imgSrc = multimediaImage
        ? `https://static01.nyt.com/${multimediaImage.legacy.xlarge}`
        : '';

      const dateWithoutTimeZone = pub_date.slice(0, 19).replace('T', ' ');

      const alt = multimedia?.[0]?.caption ?? 'No image available';
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
          <h3 class="news__title">${headline.main}</h3>
          <p class="news__abstract">${abstract}</p>
          <span class="news__date">${dateWithoutTimeZone}</span>
          <p class="news__category news__marker-search">${section_name}</p>
          <a href="${web_url}" class="news__link" target="_blank">Read more</a>
        </div>
      </li>
    `;
    })
    .join('');
  //   console.log(newsMarkup);
  refs.renderContainerHome.innerHTML = '';
  refs.renderContainerHome.insertAdjacentHTML('afterbegin', newsMarkup);
}
