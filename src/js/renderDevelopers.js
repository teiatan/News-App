import { all } from "axios";
import g from "calendar-dates";

import { developers } from '../developers';

const allDevelopers = developers;
console.log(allDevelopers);

const card = document.querySelector('.render-deplovers')

const q = allDevelopers.map(({
    fullName,
    linkedIn,
    gitHub,
    mail,
    telegram,

}) => {
    return `
    
    <li class="developer">
    <p>${fullName}</p>
   <div>
   <a class="link-style" href="${linkedIn}"> LinkedIn</a>
   <a class="link-style" href="${gitHub}"> gitHub</a>
   <a class="link-style" href="${mail}"> Mail</a>
   <a class="link-style" href="${telegram}">Telegram</a>
   </div>
    

    </li>
    
    `
    }
).join('');

card.insertAdjacentHTML('afterbegin', q);

