import axios from 'axios';
import { renderNewsCard } from './renderFunctions';


const appID = '8ca52306-beb0-484f-a79a-7e62aa42b9bf';
const apiKey = 'xzPEfDZOmKFhx2Ne2c6s0NMhevrZ03jl';
const BASIC_URL = 'https://api.nytimes.com/svc/';
const period = 1;
const urlMostViewedNews = `${BASIC_URL}mostpopular/v2/viewed/${period}.json?api-key=${apiKey}`;
const PER_PAGE = 12;


export async function getMostViewedNews() {
    
    try {
        return await axios.get(urlMostViewedNews).then(response => {
            if (!response) {
                throw new Error(response.status);
              }
              
              return response.data;
        });
    } catch(error) {
        console.error();
    }
};




