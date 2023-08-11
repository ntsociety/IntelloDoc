// thema switch
// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
let iconName = document.querySelector('.icon-theme');
iconName.onclick = () => {
    toggleTheme();
}
// function to change theme to light and dark
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
       iconName.classList.add('bx-moon');
       iconName.classList.remove('bx-sun');
       iconName.classList.remove('bx-tada');
   } else {
       setTheme('theme-dark');
       iconName.classList.remove('bx-moon');
       iconName.classList.add('bx-sun');
       iconName.classList.remove('bx-tada');
   }
}
// invoked function to set the theme on initial load last recomme
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
       iconName.classList.remove('bx-moon');
       iconName.classList.add('bx-sun');
   } else {
       setTheme('theme-light');
       iconName.classList.add('bx-moon');
       iconName.classList.remove('bx-sun');
   }
})();

// control the search bar
let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

// swiper pour liste populaire
var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-button-next",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320:{
            slidesPerView: 2,
            spaceBetween: 8,
        },
        510:{
            slidesPerView: 3,
            spaceBetween: 15,
        },
        840:{
            slidesPerView: 4,
            spaceBetween: 13,
        },
        1350:{
            slidesPerView: 5,
            spaceBetween: 15,
        },
    },
});