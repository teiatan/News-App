import { refs } from '../refs';
import { weatherMarkup } from '../API/getWeather';


export async function showNewsByFormInput(apiFetch) {
    renderNewsByFormInput(await apiFetch);
};

export async function renderNewsByFormInput(results) {
  refs.renderContainerHome.innerHTML = '';
  let imgSrc = '';
  //console.log(results.response.docs);
  
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
              <span class="news__category">${type_of_material}</span>
              <span class="news__read is-hidden"></span>
              <button class="news__favorite">Add to favorite</button>
              <img src="${imgSrc}" alt="" class="news__img"/>
              <h3 class="news__title">${headline.main}</h3>
              <p class="news__abstract">${abstract}</p>
              <span class="news__date">${pub_date.split('').splice(0, 10).join('').replaceAll('-', '/')}</span>
              <a href="${web_url}" class="news__link">Read more</a>
          </li>
      `;
    }
  )
  .join('');
  const markup = weatherMarkup.concat(newsMarkup);
  refs.renderContainerHome.insertAdjacentHTML('afterbegin', markup);
  
}
}