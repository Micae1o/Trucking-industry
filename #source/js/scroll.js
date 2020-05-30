



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


