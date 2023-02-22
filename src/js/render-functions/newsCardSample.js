//розмітка 1 картки новини 
//Використовуємо для всіх рендерів новин

`<li class="news__item card" data-id=${id}>
    <p class="news__Already-read is-hidden">Already read 
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


// універсальна функція заглушки, яка перевіряє, 
// що в текст контенті тегів, які можуть прийти з бекенду і якщо 
// там пусто (продумати логіку), то виводити заглушку
// з беку може не прийти картинка, категорія, та будь-що
// викликається в renderMostViewedNews.js - потестити розкоментуванням
// тут же перевіряти довжину абстракту і виводити не більше кількох символів
// подивитись, які ще можуть бути відхилення
export function fillAbsentDataInNewsCard() {
if(news__("достучатись за класом").textContent === null || underfined || "") {
    news__category("достучатись за класом").textContent = заглушка
  }
}  