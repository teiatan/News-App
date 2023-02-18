import axios from 'axios';
import { nytApiSettings } from './nytApiSettings';

export default class NewsApiService {
    constructor () {
        this.searchQuery = '';
        this.page = 1;
    }

    async getNewsByFormInput() {
        console.log(this);

        const url = `${nytApiSettings.BASIC_URL}search/v2/articlesearch.json?api-key=${nytApiSettings.apiKey}&page=${this.page}&q=${this.searchQuery}`;
        try {
            return await axios.get(url).then(response => {
                
                if (!response) {
                    throw new Error(response.status);
                  }
                  
                this.incrementPage();
                return response.data;
            });
        } catch(error) {
            console.error();
        }
    };

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        return this.searchQuery = newQuery;
    }
    
}