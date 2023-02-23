import { refs } from "../refs";

export function createPagin(totalPages, page) {
    let render = '';
    let activePage;
    let beforePages = page - 1;
    let afterPages = page + 1;
    if(page > 1) {
        refs.prevBtn.disabled = false;
        refs.prevBtn.addEventListener('click', () => {
            createPagin(totalPages, page - 1);
        })
    }else{
        refs.prevBtn.disabled = true;
    }

    if(page > 2) {
        render += `<li class="pg-item"><a class="pg-link" data-page="1">1</a></li>`;
        if(page > 3) {
            render += `<li class="dots"><span>...</span></li>`
        }
    }

    // how many pages show before the current li
    // if(page === totalPages) {
    //     beforePages -= 2;
    // }else if(page === totalPages - 1){
    //     beforePages -= 1;
    // }

    // // how many pages show after the current li
    // if(page === 1) {
    //     afterPages += 2;
    // }else if(page === 2) {
    //     afterPages += 1;
    // }

    for(let pageLength = beforePages; pageLength <= afterPages; pageLength += 1) {
        if(pageLength > totalPages) {
            continue;
        }

        if(pageLength === 0) {
            pageLength = pageLength + 1;
        }

        if(page === pageLength) {
            activePage = 'active';
        } else {
            activePage = '';
        }
        render += `<li class="pg-item ${activePage}"><a class="pg-link">${pageLength}</a></li>`;
    }

    if(page < totalPages - 1) {
        if(page < totalPages - 2) {
            render += `<li class="dots"><span>...</span></li>`
        }
        render += `<li class="pg-item"><a class="pg-link" data-page="${totalPages}">${totalPages}</a></li>`;
    }

    if(page < totalPages) {
        refs.nextBtn.addEventListener('click', () => {
            createPagin(totalPages, page + 1);
        })
    }

    if(page === totalPages) {
        refs.nextBtn.setAttribute('disbled', true);
    }

    refs.paginConteinBtn.innerHTML = render;
}


