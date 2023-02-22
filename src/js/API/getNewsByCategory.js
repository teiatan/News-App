import axios from 'axios';
import { categoryForSearch } from '../render-functions/renderCategories';
import { handleCategoryClick } from '../render-functions/renderCategories';
import { nytApiSettings } from '../API/nytApiSettings';

const categoryButtons = document.querySelectorAll(
  '.categories-render-container'
);

async function getNewsByCategory(category) {
  const url = `${nytApiSettings.BASIC_URL}svc/topstories/v2/${category}.json?api-key=${nytApiSettings.apiKey}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

categoryButtons.forEach(button => {
  button.addEventListener('click', async event => {
    const category = handleCategoryClick(event);
    const news = await getNewsByCategory(category);
    console.log(news);
  });
});
