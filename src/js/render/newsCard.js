//розмітка 1 картки новини 
//Використовуємо для всіх рендерів новин
//нижче два варіанти, використовуємо new thread
//якщо використовували olg thread - перероблюємо


//olg thread
/*
`<li class="news__item card" data-id=${id}>
    <p class="news__Already-read">Already read &#128504
        <svg style="display:inline" width="17px" height="13px">
            <use href="/sprite.e70822e0.svg#Vector-1"></use>
        </svg>
    </p>
    <div class="news__container">
      <span class="news__read is-hidden"></span>
      <div class="news__container-img">
       <button class="news__favorite">Add to favorite</button>
       <img src="${imgSrc}" alt="${alt}" class="news__img"/>
    </div>

    <h3 class="news__title">${title}</h3>
    <p class="news__abstract">${abstract}</p>
      
    <span class="news__date">${date}</span>
    <p class="news__marker-search">${section}</p>
    <a href="${url}" class="news__link" target = "_blank">Read more</a></div>
</li>`
*/







//new thread
/*
`
          <li class="news__item card" data-id=${id}>
            <p class="news__Already-read">Already read &#128504
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