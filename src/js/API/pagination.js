// import {getNewsByFormInput} from './getNewsByFormInput';
import NewsApiService from './newsApi';

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    loadMoreBtn: document.querySelector('.load-more'),
};

const newsApiService = new NewsApiService;

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


function onSearch(e) {
    e.preventDefault();
   
    newsApiService.query = e.currentTarget.elements.searchQuery.value.trim();
    newsApiService.resetPage();
    newsApiService.getNewsByFormInput();
};

function onLoadMore() {
    newsApiService.getNewsByFormInput();
};