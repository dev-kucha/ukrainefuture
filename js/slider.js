const slider = document.querySelector('.slider');
const sliderPlate = document.querySelector('.slider_plate');
const schoolsSection = document.querySelector('.schools-section');
const startOffsetTop = schoolsSection.offsetTop;
// console.log('startOffsetTop', startOffsetTop);
// console.table(slider);
// sliderPlate.style.left = 50 + 'px';
// console.log('sliderPlate.style.left', slider.style.left);

window.addEventListener('scroll', function () {
  if (window.pageYOffset > startOffsetTop) {
    sliderPlate.style.left = startOffsetTop - window.pageYOffset + 'px';
  }
  //   console.log('window.pageYOffset', window.pageYOffset);
  //   console.log('startOffsetTop', startOffsetTop);
  //   console.log('slider.offsetTop', slider.offsetTop);
});
