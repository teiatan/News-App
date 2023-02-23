import { nytApiSettings } from './nytApiSettings';
import axios from 'axios';

async function getCategories() {
  const url = `${nytApiSettings.BASIC_URL}news/v3/content/section-list.json?api-key=${nytApiSettings.apiKey}`;
  try {
    return await axios.get(url).then(response => {
      if (!response) {
        throw new Error(response.status);
      }
      return response.data.results;
    });
  }
}

export { getCategories };




