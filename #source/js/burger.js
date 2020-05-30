
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

