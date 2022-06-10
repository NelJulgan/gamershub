'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar variables
 */

const navbar = document.querySelector("[data-nav]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
    elemToggleFunc(document.body);
  })

}

var swiper = new Swiper(".gallery__content", {

  loop: true,

  grabCursor: true,

  slidesPerView: 1,

  spaceBetween: 10,

  pagination: {

    el: ".swiper-pagination",

    clickable: true,

  },

  autoplay: {

    delay: 5000,

    disableOnInteraction: false,

  },

  breakpoints: {

    640: {

      slidesPerView: 1,

      spaceBetween: 10,

    },

    768: {

      slidesPerView: 2,

      spaceBetween: 15,

    },

    1068: {

      slidesPerView: 2,

      spaceBetween: 50,

    },

  },

});








/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

})


const boxes = document.querySelectorAll('.reveal')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}


