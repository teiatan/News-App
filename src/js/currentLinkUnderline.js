import { refs } from "./refs"

const { navFavoriteLink, navReadLink, navHomeLink} = refs; 

const currentClass = 'navigation__item--current';

export function currentLinkUnderline() {
    if (document.title.toLowerCase() === 'newsapp') {
        //navHomeLink.classList.add(currentClass)    
    } else if (document.title.toLowerCase() === 'favorite') {
        navFavoriteLink.classList.add(currentClass)
    } else if (document.title.toLowerCase() === 'read') {
        navReadLink.classList.add(currentClass)
    }
}

