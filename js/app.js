var burger = document.querySelector('.burger');
var ul = document.querySelector('.nav-links');

burger.addEventListener('click', (e) => {
  ul.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
})