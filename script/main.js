'use strict';

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

const typed = new Typed('.multiple', {
    strings: ['JavaScript/TypeScript Front-end Developer', 'Software Developer in Test', 'Android Mobile Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true,
});
