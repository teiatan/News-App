import { all } from "axios";
import g from "calendar-dates";
import { developers } from '../developers';
const gitHubPath = "/News-App/sprite.601f618d";
const allDevelopers = developers;
//console.log(allDevelopers);

const card = document.querySelector('.render-deplovers')

const q = allDevelopers.map(({
    fullName,
    linkedIn,
    gitHub,
    mail,
    telegram,
    photo,
    role,

}) => {
    
    return `
     <li class="developer">
    <div class="developer__card">
    <img class="developers__photo" src="${photo}"></img>
    
  <h3 class="developers__name">${fullName}</h3>
  </div>
  
  <ul  class="developers__container">
  
      <li class="developers__item"><a class="developers__link" href="${linkedIn}"> <svg class="developer__svg">
      <use href="${gitHubPath}.svg#icon-linkedin"></use>
  </svg></a></li>
      <li class="developers__item"><a class="developers__link" href="${gitHub}"> <svg class="developer__svg">
      <use href="${gitHubPath}.svg#icon-github"></use>
  </svg></a></li>
      <li class="developers__item"><a class="developers__link" href="${mail}"> <svg class="developer__svg">
      <use href="${gitHubPath}.svg#icon-mail"></use>
  </svg></a></li>
      <li class="developers__item"><a class="developers__link" href="${telegram}"><svg class="developer__svg">
      <use href="${gitHubPath}.svg#icon-telegram"></use>
  </svg></a></li>
  </ul>
  <span class="developers__role-style"></span>
  <span class="developers__role">${role}</span>
</li>
    `
    }
).join('');

card.insertAdjacentHTML('afterbegin', q);

