import axios from 'axios';
import { nytApiSettings } from '../API/nytApiSettings';

export async function getNewsByCategory(category) {
  const url = `${nytApiSettings.BASIC_URL}search/v2/articlesearch.json?q=${category}&api-key=${nytApiSettings.apiKey}`;

  try {
    const response = await axios.get(url);
    // console.log(response);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
