window.onload = function () {
    "use strict";

    const swiper = new Swiper('.js-catalog-slider', {

        spaceBetween: 25,
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        autoHeight: false,


        navigation: {
            nextEl: '.swiper-button__next',
            prevEl: '.swiper-button__prev',
        },

        breakpoints: {
            '1025': {
                slidesPerView: 4,
                spaceBetween: 30,
            },  '768': {
                slidesPerView: 3,
                spaceBetween: 15,
            },  '360': {
                slidesPerView: 2,
                spaceBetween: 8,
            },
        },

    });
    const navigation = document.querySelector(".navigation__list");
    const buttonMobileMenu = document.querySelector(".mobile-menu__button");
    const body = document.body;
    const backMobile = document.querySelector(".mobile-menu__back");

    buttonMobileMenu.addEventListener("click", (event) => {
        navigation.classList.toggle('jsTranslateMenu');
        backMobile.classList.toggle('jsDisplayBackMobile')
        body.classList.toggle('jsOverflowBody');
    })
    backMobile.addEventListener("click", (event) => {
        navigation.classList.remove('jsTranslateMenu');
        backMobile.classList.remove('jsDisplayBackMobile')
        body.classList.remove('jsOverflowBody');
    })
};

