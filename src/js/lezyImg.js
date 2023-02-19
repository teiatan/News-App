// Пример HTML

// <img src="load.gif" data-src="" class="lezy" alt="">

// load.gif анимация загрузки картинки,допустим src="https://i.gifer.com/XOsX.gif"
// или без анимации

const hs = window.innerHeight

function lezyShowImages() {
    const sp = window.scrollY + hs
    // скролл позиция = вистота скрола по Y + висота экрана
    const elements = document.getElementsByClassName('lezy')
    // собираем все елементы в масив и перебераем,если елемент видно то заменяем заглушку на кантинку а если нет то и не грузим её 
    Array.from(elements).forEach(e => {
        if (sp > e.offsetTop) {
            e.setAttribute('src', e.getAttribute('data-src'))
            e.classList.remove('lezy')
        }
        
    })
    
}

lezyShowImages()
// делаем вызов функции по скролу,обновляються константы
window.addEventListener('scroll',lezyShowImages)