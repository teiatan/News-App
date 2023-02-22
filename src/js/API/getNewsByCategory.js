import axios from 'axios';
import { handleCategoryClick } from '../render-functions/renderCategories';
import { nytApiSettings } from '../API/nytApiSettings';
import { categoryForSearch } from '../render-functions/renderCategories';

export async function getNewsByCategory(category) {
  const url = `${nytApiSettings.BASIC_URL}news/v3/content/all/${category}.json?api-key=${nytApiSettings.apiKey}`;

  try {
    const response = await axios.get(url);
    // console.log(response.data.results);
    // console.log(url);
    // console.log(response);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
