import { refs } from '../refs';
import { getCategoryList } from '../API/getCategories';

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
        <a href="#" class="category-link" data-category="${category.section}">${category.section}</a>
    </li>`;
    })
    .join('');
  refs.categoriesList.insertAdjacentHTML('beforeend', markup);
}

export { renderCategories };
