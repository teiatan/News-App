import { nytApiSettings } from './nytApiSettings';

// async function getCategories() {
//   return fetch(
//     `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${nytApiSettings.apiKey}`
//   )
//     .then(response => response.json())
//     .then(data => {
//       const categories = data.results.map(item => item.section);
//       const uniqueCategories = [...new Set(categories)];
//       return uniqueCategories;
//     });
// }

// export { getCategories };

// async function getArticleByCategory(value) {
//   const response = await fetch(
//     `https://api.nytimes.com/svc/news/v3/content/all/${value}.json?api-key=${nytApiSettings.apiKey}`
//   );
//   const data = await response.json();
//   return data;
// }

// export { getArticleByCategory };

async function getCategoryList() {
  const categoryList = await fetch(
    `${nytApiSettings.baseUrl}//news/v3/content/section-list.json?${nytApiSettings.apiKey}`
  );
  const data = await categoryList.json();
  const results = data.results;
  console.log(results);
  return results;
}

export { getCategoryList };

async function getArticleByCategory(value) {
  const response = await fetch(
    `${nytApiSettings.baseUrl}/news/v3/content/all/${value}.json?${nytApiSettings.apiKey}`
  );
  const data = await response.json();
  return data;
}

export { getArticleByCategory };
