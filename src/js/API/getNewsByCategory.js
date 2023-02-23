import axios from 'axios';
import { nytApiSettings } from './nytApiSettings';

export async function getNewsByCategory(category) {
  const url = `${nytApiSettings.BASIC_URL}search/v2/articlesearch.json?q=${category}&api-key=${nytApiSettings.apiKey}`;

  try {
    const response = await axios.get(url);
    // console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
}
