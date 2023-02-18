import { refs } from '../refs';
import { weatherMarkup } from '../render-functions/renderWeather';

export async function showNewsByFormInput(apiFetch) {
    renderNewsByFormInput(await apiFetch);
};

export async function renderNewsByFormInput(results) {
  refs.renderContainerHome.innerHTML = '';
  let imgSrc = '/assets/actions-config-step-1.png';
  console.log(results.response.docs);
  const newsMarkup = results.response.docs
  .map(
    ({
        web_url,
        _id,
        headline,
        abstract,
        type_of_material,
        pub_date,
        multimedia,

    }) => {
      if(multimedia.length === 0) {
        imgSrc = '/assets/actions-config-step-1.png';
      } else {
        imgSrc = multimedia[31].url;
      }

      return `
          <li class="news__item card" data-id=${_id}>
              <span class="news__category">${type_of_material}</span>
              <span class="news__read is-hidden"></span>
              <button class="news__favorite">Add to favorite</button>
              <img src="${imgSrc}" alt="" class="news__img"/>
              <h3 class="news__title">${headline.main}</h3>
              <p class="news__abstract">${abstract}</p>
              <span class="news__date">${pub_date}</span>
              <a href="${web_url}" class="news__link">Read more</a>
          </li>
      `;
    }
  )
  .join('');
  const markup = weatherMarkup.concat(newsMarkup);
  refs.renderContainerHome.insertAdjacentHTML('afterbegin', markup);
}