/* Плавна прокрутка меню */
`use strict`;
let anchors = document.querySelectorAll('.site-nav a[href*="#"]');
console.log(anchors);
let anchor;
let anchorId;
const mobileMenuRef = document.querySelector('[data-menu]');
for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      mobileMenuRef.classList.toggle('is-open');
    });
  }
}
