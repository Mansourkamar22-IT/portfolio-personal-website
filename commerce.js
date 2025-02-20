// Select elements only once
const search = document.querySelector('.search-box');
const cart = document.querySelector('.cart');
const user = document.querySelector('.user');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');

// Utility function to remove active classes
function removeActiveClasses() {
    if (search) search.classList.remove('active');
    if (cart) cart.classList.remove('active');
    if (user) user.classList.remove('active');
    if (navbar) navbar.classList.remove('active');
}

// Event listener for search icon
const searchIcon = document.querySelector('#search-icon');
if (searchIcon) {
    searchIcon.onclick = () => {
        if (search) search.classList.toggle('active');
        removeActiveClasses(); // Remove other active classes
    };
}

// Event listener for shop/cart icon
const shopIcon = document.querySelector('#shop-icon');
if (shopIcon) {
    shopIcon.onclick = () => {
        if (cart) cart.classList.toggle('active');
        removeActiveClasses(); // Remove other active classes
    };
}

// Event listener for user icon
const userIcon = document.querySelector('#user-icon');
if (userIcon) {
    userIcon.onclick = () => {
        if (user) user.classList.toggle('active');
        removeActiveClasses(); // Remove other active classes
    };
}

// Event listener for menu icon
const menuIcon = document.querySelector('#menu-icon');
if (menuIcon) {
    menuIcon.onclick = () => {
        if (navbar) navbar.classList.toggle('active');
        removeActiveClasses(); // Remove other active classes
    };
}

// Close all active elements on scroll
window.onscroll = () => {
    removeActiveClasses();
};

// Navbar Scroll Effect
if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
}

// Swiper Initialization (Check if Swiper is loaded and the element exists)
if (typeof Swiper !== 'undefined' && document.querySelector('.new-arrival')) {
    const swiper = new Swiper(".new-arrival", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
            0: { slidesPerView: 1 },
            568: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1020: { slidesPerView: 3 },
        },
    });
} else {
    console.error("Swiper library not loaded or '.new-arrival' element missing.");
}
