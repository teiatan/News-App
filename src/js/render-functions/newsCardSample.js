//new thread


export function fillAbsentDataInNewsCard() {
  const newsImg = document.querySelector('.news__img');
  const newsTitle = document.querySelector('.news__title');
  const newsAbstract = document.querySelector('.news__abstract');
  const newsCategory = document.querySelector('.news__category');
  const newsLink = document.querySelector('.news__link');

  if (newsImg.textContent === null || undefined || '') {
    newsImg.innerHTML = ` <img src="./src/img/plug-Desc.png" alt="No image" class="news__img"/>`;
  } else if (newsTitle.textContent === null || undefined || '') {
    newsTitle.textContent = 'Something goes wrong - no title';
  } else if (newsAbstract.textContent === null || undefined || '') {
    newsAbstract.textContent = "We couldn't download description of this article, sorry";
  } else if (newsCategory.textContent === null || undefined || '') {
    newsCategory.textContent = 'Ooops';
  } else if (newsLink.textContent === null || undefined || '') {
    newsLink.innerHTML = `<a href="https://www.nytimes.com/" class="news__link" target = "_blank">Read more</a></div>`;
  }
  return;
}  
/*
`
          <li class="news__item card" data-id=${id}>
            <p class="news__Already-read is-hidden">Already read 
              <svg class="news__svg news_svg-alreagy-read>
                  <use href="/sprite.e70822e0.svg#Vector-1"></use>
              </svg>
            </p>
            <div class="news__container">
              <span class="news__read is-hidden"></span>
              <div class="news__container-img">
              <button class="news__favorite">Add to favorite
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
              
            <span class="news__date">${published_date.replaceAll('-' , '/')}</span>
            <p class="news__category news__marker-search">${subsection}</p>
            <a href="${url}" class="news__link" target = "_blank">Read more</a></div>
          </li>
      `
*/
// універсальна функція заглушки, яка перевіряє, 
// що в текст контенті тегів, які можуть прийти з бекенду і якщо 
// там пусто (продумати логіку), то виводити заглушку
// з беку може не прийти картинка, категорія, та будь-що
// викликається в renderMostViewedNews.js - потестити розкоментуванням
// тут же перевіряти довжину абстракту і виводити не більше кількох символів
// подивитись, які ще можуть бути відхилення
