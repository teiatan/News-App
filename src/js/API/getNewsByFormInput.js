import axios from 'axios';
import Notiflix from 'notiflix';
import { nytApiSettings } from './nytApiSettings';
import { refs } from '../refs';
import {renderNewsByFormInput} from '../render/renderNewsByFormInput';



refs.formSearch.addEventListener("submit", onSubmitSearchForm);

export async function onSubmitSearchForm (e) {
    e.preventDefault();
    
    let page = 1;
    refs.negativeSearch.classList.add('is-hidden');
    const value = refs.formSearchInput.value;
if (value.trim() === '') {
    Notiflix.Notify.failure('Ooops. Please, enter something to search');
    return;
} 
 if (value !== value.replace(/[А-Яа-яЁёІі]/, '')) {
    Notiflix.Notify.info('News only English! Please send it again in English.');
    e.target.reset();
    return
}  

  const results = await getNewsByFormInput(value, page);
  
  renderNewsByFormInput(results);
  e.target.reset();

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