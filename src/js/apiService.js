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
              /* console.log(response.data);
              console.log(response.data.results[0]);
              console.log(response.data.results[0].url);
              console.log(response.data.results[0].id);
              console.log(response.data.results[0].title);
              console.log(response.data.results[0].abstract);
              console.log(response.data.results[0].media);
              console.log(response.data.results[0].media[0].caption);
              console.log(response.data.results[0].media[0]["media-metadata"][2].url); */
              
              return response.data;
        });
    } catch(error) {
        console.error();
    }
};




