import axios from 'axios';
import { nytApiSettings } from './nytApiSettings';

//отримання від бекенду новин з найбільшим переглядом
export async function getMostViewedNews() {
    //період за який виводить топ (1, 7 ітд днів)
    const period = 1;
    
    const url = `${nytApiSettings.BASIC_URL}mostpopular/v2/viewed/${period}.json?api-key=${nytApiSettings.apiKey}`;
    try {
        return await axios.get(url).then(response => {
            if (!response) {
                throw new Error(response.status);
              }
              
              return response.data;
        });
    } catch(error) {
        console.error();
    }
};