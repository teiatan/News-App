import {news} from '../../favorite';
export function addFavouriteNews(){
    return`
    <li class="news__item card" data-id=${news.id}>
    <span class="news__category is-hidden">${news.category}</span>
    <span class="news__read is-hidden"></span>
    <div class="news__container-img">
    
    <button class="news__favorite">Add to favorite</button>
    <img src="${news.img}" alt="${news.title}" class="news__img"/>
    </div>
    <h3 class="news__title">${news.title}</h3>
    <p class="news__abstract">${news.description}</p>
    
    <span class="news__date">${news.date.replaceAll('-' , '/')}</span>
    <a href="${news.url}" class="news__link" target = "_blank">Read more</a>
    
</li>
    `
}