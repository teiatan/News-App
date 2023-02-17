import axios from 'axios';
import { nytApiSettings } from './nytApiSettings';



export async function getNewsByFormInput() {

    let formInput = 'ukraine';
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