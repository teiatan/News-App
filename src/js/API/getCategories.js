import { nytApiSettings } from './nytApiSettings';

export const getCategories = () => {
  return fetch(
    `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${nytApiSettings.apiKey}`
  )
    .then(response => response.json())
    .then(data => {
      const categories = data.results.map(item => item.section);
      const uniqueCategories = [...new Set(categories)];
      return uniqueCategories;
    });
};

async function getArticleByCategory(value) {
  const response = await fetch(
    `https://api.nytimes.com/svc/news/v3/content/all/${value}.json?api-key=${nytApiSettings.apiKey}`
  );
  const data = await response.json();
  return data;
}

export { getArticleByCategory };
