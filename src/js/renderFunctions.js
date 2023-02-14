import { refs } from './refs';

export async function showNews(apiFetch) {
    renderNewsCard(await apiFetch);
};

export async function renderNewsCard({results}) {
    console.log(results);
    console.log(results[0].media[0].caption);
    refs.renderContainerHome.innerHTML = '';
    
    const markup = results
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
        
        //media[0].caption;
        return `
            <li class="news__item" data-id=${id}>
                <span class="news__category">${subsection}</span>
                <span class="news__read is-hidden"></span>
                <button class="news__favorite">Add to favorite</button>
                <img src="" alt="" class="news__img"/>
                <h3 class="news__title">${title}</h3>
                <h3 class="news__title">${media}</h3>
                <p class="news__abstract">${abstract}</p>
                <span class="news__date">${published_date}</span>
                <a href="${url}" class="news__link">Read more</a>
            </li>
        `;
      }
    )
    .join('');
    refs.renderContainerHome.insertAdjacentHTML('afterbegin', markup);
}