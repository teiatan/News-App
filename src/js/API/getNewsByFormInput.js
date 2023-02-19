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
    Notiflix.Notify.info('Ooops. Please, enter something to search');
    return;
}
    const result = await getNewsByFormInput(value, page);
  
  renderNewsByFormInput(result);


   async function getNewsByFormInput() {
    let formInput = refs.formSearchInput.value;
    console.log(formInput)
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