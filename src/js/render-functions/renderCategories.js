import { refs } from '../refs';
import { getCategoryList } from '../API/getCategories';
import { getArticleByCategory } from '../API/getCategories';

// async function renderCategories() {
//   const categories = await getCategories();
//   const markup = categories
//     .map(category => {
//       return `<li class="category-item">
//         <a href="#" class="category-link" data-category="${category}">${category}</a>
//     </li>`;
//     })
//     .join('');
//   refs.categoriesList.insertAdjacentHTML('beforeend', markup);
// }

// export { renderCategories };

async function renderCategories() {
  const categories = await getCategoryList();
  const markup = categories
    .map(category => {
      return `<li class="category-item">
            <a href="#" class="category-link" data-category="${category.name}">${category.name}</a>
        </li>`;
    })
    .join('');
  refs.categoriesList.insertAdjacentHTML('beforeend', markup);
}

export { renderCategories };

async function renderArticlesByCategory(category) {
  const articles = await getArticleByCategory(category);
  const markup = articles.results
    .map(article => {
      return `<li class="article-item">
            <a href="${article.url}" class="article-link" target="_blank">
                <h2 class="article-title">${article.title}</h2>
                <p class="article-description">${article.abstract}</p>
            </a>
        </li>`;
    })
    .join('');
  refs.articlesList.insertAdjacentHTML('beforeend', markup);
}

export { renderArticlesByCategory };
