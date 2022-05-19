const header = document.querySelector('.header');
const mainSection = document.querySelector('.main-section');
const logo = document.querySelector('.logo');
const mainTitle = document.querySelector('.main-title');

window.addEventListener('scroll', function () {
  window.pageYOffset > 0 ? header.classList.add('active') : header.classList.remove('active');
  window.pageYOffset > mainTitle.offsetTop + mainTitle.offsetHeight
    ? logo.classList.add('active')
    : logo.classList.remove('active');
});
