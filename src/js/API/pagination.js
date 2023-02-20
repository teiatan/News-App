import Pagination from 'tui-pagination';
import { renderMostViewedNews } from '../render-functions/renderMostViewedNews';
import { getMostViewedNews } from './getMostViewedNews';



export function addPaginationGallery() {
    const paginationOptions = {
        totalItems: 0,
        itemsPerPage: 20,
        visiblePages: 3,
        page: 1,
        centerAlign: true,
        template: {
            page: '<a href="#" class="tui-page-btn">{{page}}</a>',
            currentPage:
                '<strong class="tui-page-btn tui-is-selected" >{{page}}</strong>',
            moveButton:
                '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
                '<span class="tui-ico-{{type}}"></span>' +
                '</a>',
            disabledMoveButton:
                '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
                '<span class="tui-ico-{{type}}"></span>' +
                '</span>',
            moreButton:
                '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
                '<span class="tui-ico-ellip"></span>' +
                '</a>',
        },
    };

    let pagination = new Pagination(
        document.getElementById('pagination'),
        paginationOptions
    );

    //Pagination first start with response from API and create total_pages 
    pagination.getCurrentPage();

    getMostViewedNews().then(data => {
        console.log(data);
        let total = data.total_results; 
        console.log(total); 
        pagination.reset(total); 
    });

    //   Pagination change number of page, Fetch data and Render pages 
    pagination.on('afterMove', event => {
        
        const currentPage = event.page;
        getMostViewedNews().then(data => {
            data.page = currentPage;
            
        });
       
        

        renderMostViewedNews(currentPage);
    });
}