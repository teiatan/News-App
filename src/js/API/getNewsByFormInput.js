import axios from 'axios';
import { nytApiSettings } from './nytApiSettings';
import { refs } from '../refs';
import {renderNewsByFormInput} from '../render-functions/renderNewsByFormInput';
import {showNewsByFormInput} from '../render-functions/renderNewsByFormInput';



export async function getNewsByFormInput() {

    let formInput = refs.input.value;
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


refs.formSearch.addEventListener("submit", onSubmit);

export async function onSubmit (e) {
    let page = 1;
    e.preventDefault();
    const value = refs.input.value;

    const result = await getNewsByFormInput(value, page);
  console.log(result);
  if (result.length === 0) {
    // треба додати We havent found...
  }
  renderNewsByFormInput(result);

}