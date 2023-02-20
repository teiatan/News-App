import axios from 'axios';
import Notiflix from 'notiflix';
import { nytApiSettings } from './nytApiSettings';
import { refs } from '../refs';
import {renderNewsByFormInput} from '../render-functions/renderNewsByFormInput';




refs.formSearch.addEventListener("submit", onSubmitSearchForm);

export async function onSubmitSearchForm (e) {
    let page = 1;
    e.preventDefault();
    refs.negativeSearch.classList.add('is-hidden');
    const value = refs.formSearchInput.value;
if (value === '') {
    Notiflix.Notify.failure('Ooops. Please, enter something to search');
    return;
}
/* if (value !== 'Eng') {
    Notiflix.Notify.info('News only English! Please send it again in English.');
    return;
}  */ 
    const result = await getNewsByFormInput(value, page);
  
  renderNewsByFormInput(result);


   async function getNewsByFormInput() {
    let formInput = refs.formSearchInput.value;
    let page = 1;
    const url = `${nytApiSettings.BASIC_URL}search/v2/articlesearch.json?api-key=${nytApiSettings.apiKey}&page=${page}&q=${formInput}`;
    try {
        return await axios.get(url).then(response => {
            if (!response) {
                throw new Error(response.status);
              }
              
              return response.data;
        });
    } catch(error) {
        console.error();
    }
};

}