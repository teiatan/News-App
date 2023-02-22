import { refs } from "./refs"

const { navigationFavoriteLink, navigationReadLink, navigationHomeLink } = refs; 

const currentClass = 'navigation__item--current';

export function currentLinkUnderline() {
    if (document.title.toLowerCase() === 'newsapp') {
        navigationHomeLink.classList.add(currentClass)    
    } else if (document.title.toLowerCase() === 'favorite') {
        navigationFavoriteLink.classList.add(currentClass)
    } else if (document.title.toLowerCase() === 'read') {
        navigationReadLink.classList.add(currentClass)
    }
}

