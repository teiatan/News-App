import { refs } from './refs';
import { weatherMarkup } from '../partials/components/weather-card';

export async function showNews(apiFetch) {
    renderNewsCard(await apiFetch);
};

export async function renderNewsCard({results}) {
    refs.renderContainerHome.innerHTML = '';
    let imgSrc = '/assets/actions-config-step-1.png';
    //const weatherMarkup = '<h3>ПОГОДА</h3>';

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
          imgSrc = media[0]["media-metadata"][1].url;
        }

        return `
            <li class="news__item" data-id=${id}>
                <span class="news__category">${subsection}</span>
                <span class="news__read is-hidden"></span>
                <button class="news__favorite">Add to favorite</button>
                <img src="${imgSrc}" alt="" class="news__img"/>
                <h3 class="news__title">${title}</h3>
                <p class="news__abstract">${abstract}</p>
                <span class="news__date">${published_date}</span>
                <a href="${url}" class="news__link">Read more</a>
            </li>
        `;
      }
    )
    .join('');
    const markup = weatherMarkup.concat(newsMarkup);
    refs.renderContainerHome.insertAdjacentHTML('afterbegin', markup);
}