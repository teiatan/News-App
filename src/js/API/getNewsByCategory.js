import axios from 'axios';
import { handleCategoryClick } from '../render-functions/renderCategories';
import { nytApiSettings } from '../API/nytApiSettings';
import { categoryForSearch } from '../render-functions/renderCategories';

export async function getNewsByCategory(categoryForSearch) {
  const url = `${nytApiSettings.BASIC_URL}svc/search/v2/articlesearch.json?q=${categoryForSearch}&api-key=${nytApiSettings.apiKey}`;

  try {
    const response = await axios.get(url);
    console.log(response.data.response.docs);
    return response.data.response.docs;
  } catch (error) {
    console.error(error);
  }
}
