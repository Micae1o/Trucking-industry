//@prepros-append ibg.js
//@prepros-append burger.js
//@prepros-append swiper.js
//@prepros-append scroll.js


// Перемещение элемента в меню при адаптиве
const parent_original = document.querySelector('.header__left')
const parent_new = document.querySelector('.menu')
const item = document.querySelector('.header__offices')

window.addEventListener('resize', function (event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

    if (viewport_width <= 425) {
        if (!item.classList.contains('header__item')) {
            parent_new.appendChild(item)
            item.classList.add('header__item')
        }
    } else {
        if (item.classList.contains('header__item')) {
            parent_original.appendChild(item)
            item.classList.remove('header__item')
        }
    }
})

const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

if (viewport_width <= 425) {
    if (!item.classList.contains('header__item')) {
        parent_new.appendChild(item)
        item.classList.add('header__item')
    }
} else {
    if (item.classList.contains('header__item')) {
        parent_original.appendChild(item)
        item.classList.remove('header__item')
    }
}
