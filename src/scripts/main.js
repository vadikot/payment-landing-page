'use strict';
const btnEl = document.querySelector('.icon__burger');
const navbarEl = document.querySelector('.navbar');
const footerForm = document.querySelector('.footer__form');
const body = document.body;

btnEl.addEventListener('click', toggleMenu);

function toggleMenu() {
    navbarEl.classList.toggle('toggle');
    footerForm.classList.toggle('toggle');
    body.classList.toggle('toggle');
}