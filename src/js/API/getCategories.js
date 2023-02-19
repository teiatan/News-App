import { nytApiSettings } from '../API/nytApiSettings';
import axios from 'axios';

async function getCategories() {
  const url = `${nytApiSettings.BASIC_URL}news/v3/content/section-list.json?api-key=${nytApiSettings.apiKey}`;
  const response = await axios.get(url);
  return response.data.results;
}

export default getCategories;
