import Notiflix from 'notiflix';
import { headerLogic, defaultLocalStorage } from './js/logicFor3pages';
import { addModalOpenListeners } from './js/modalOpening';
import {addFavouriteNews} from './js/render-functions/renderFavoriteNews';

Notiflix.Loading.pulse();
defaultLocalStorage();
addModalOpenListeners();
headerLogic();

window.setTimeout(Notiflix.Loading.remove(), 5000);

addFavouriteNews();

