import axios from 'axios';
import Notiflix from 'notiflix';
import { nytApiSettings } from './nytApiSettings';
import { refs } from '../refs';
import {renderNewsByFormInput} from '../render-functions/renderNewsByFormInput';


refs.formSearch.addEventListener("submit", onSubmit);

export async function onSubmit (e) {
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

    let page = 1;
    e.preventDefault();
    const value = refs.formSearchInput.value;
if (value === '') {
    Notiflix.Notify.info('Ooops. Please, enter something to search');
}
    const result = await getNewsByFormInput(value, page);
  console.log(result);
  if (result.length === 0) {
    // треба додати We havent found...
  }
  renderNewsByFormInput(result);

}