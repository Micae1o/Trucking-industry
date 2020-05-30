

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

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.body;

const links = document.querySelectorAll('.header__item');

// Бургер меню
burger.onclick = function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');

    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');
        }
    }
}




let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
    },


});




// Скролл
let $menu = $("#header");
let $main_screen = $("#main-screen");

if ($(this).scrollTop() > 45 && $menu.hasClass("default")) {

    $menu.removeClass("default").addClass("fixed");
    $main_screen.removeClass("default").addClass("fixed");

}

$(window).scroll(function () {

    if ($(this).scrollTop() > 45 && $menu.hasClass("default")) {

        $menu.removeClass("default").addClass("fixed");
        $main_screen.removeClass("default").addClass("fixed");

    }

    else if ($(this).scrollTop() <= 45 && $menu.hasClass("fixed")) {

        $menu.removeClass("fixed").addClass("default");
        $main_screen.removeClass("fixed").addClass("default");

    }
});


