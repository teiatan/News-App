const gitHubPath = "/News-App/sprite.601f618d";


export function fillAbsentDataInNewsCard() {
  const newsImg = document.querySelectorAll('.news__img');
  const newsTitle = document.querySelectorAll('.news__title');
  const newsAbstract = document.querySelectorAll('.news__abstract');
  const newsCategory = document.querySelectorAll('.news__category');
  const newsLink = document.querySelectorAll('.news__link');
  const newsFavorite = document.querySelectorAll('.news__favorite');

  newsImg.forEach( function defaultImage(el) {
    if (el.src === null || el.src === undefined || el.src === '') {
      el.src="https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg";
    };
    if (el.src.slice((el.src.length-3),(el.src.length)) === 'png') {
      el.src="https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg";
    };

  })

  newsTitle.forEach( function defaultTitle(el) {
    if (el.textContent === null || undefined || '') {
      el.textContent = 'Something goes wrong - no title';
    };
  })
  
  newsCategory.forEach( function defaultCategory(el) {
    if (el.textContent === null || el.textContent === undefined || el.textContent === '') {
    el.textContent = 'No category';
    };
  })

  newsAbstract.forEach( function defaultAbstract(el) {
    if (el.textContent === null || el.textContent === undefined || el.textContent === '') {
    el.textContent = "We couldn't download description of this article, sorry";
    };
    if (el.textContent.length > 140) {
      el.textContent = `${el.textContent.slice(0,140)} ...`;
    }
  })


  newsFavorite.forEach( function textContentforBtn(el) {
    //const svg = el.querySelector('.news__svg-heart').firstElementChild;
    //el.closest('use').href = `${gitHubPath}.svg#heartDisable`;
    try {
      
      const filledFavoriteArray = JSON.parse(localStorage.getItem ("favorite"));
      if(Array.isArray(filledFavoriteArray)) {
        const elId = el.closest('li').dataset.id;
        const newsId = filledFavoriteArray.findIndex((news) =>
          news.id === elId);

        if(newsId === -1) {
          el.textContent = "Add to favorite";
          
        } else {
          el.textContent = "Remove from favorite";
          
        };
      }
     } catch(error) {el.textContent = "Add to favorite";};
     

    if (el.textContent === null || el.textContent === undefined || el.textContent === '') {
    el.textContent = 'No category';
    };
    
  })
};

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
