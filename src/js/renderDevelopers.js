import { all } from "axios";
import g from "calendar-dates";

import { developers } from '../developers';

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

}) => {
    
    return `
     <li class="developer">
    <div class="developer__card">
    <img class="developers__photo" href="${photo}"></img>
  <h3 class="developers__name">${fullName}</h3>
  </div>
  
  <ul  class="developers__container">
  
      <li class="developers__item"><a class="developers__link" href="${linkedIn}"> <svg class="developer__svg">
      <use href="/sprite.e70822e0.svg#icon-linkedin"></use>
  </svg></a></li>
      <li class="developers__item"><a class="developers__link" href="${gitHub}"> <svg class="developer__svg">
      <use href="/sprite.e70822e0.svg#icon-github"></use>
  </svg></a></li>
      <li class="developers__item"><a class="developers__link" href="${mail}"> <svg class="developer__svg">
      <use href="/sprite.e70822e0.svg#icon-mail"></use>
  </svg></a></li>
      <li class="developers__item"><a class="developers__link" href="${telegram}"><svg class="developer__svg">
      <use  href="/sprite.e70822e0.svg#icon-telegram"></use>
  </svg></a></li>
  </ul>
</li>
    `
    }
).join('');

card.insertAdjacentHTML('afterbegin', q);

