const slider = document.querySelector('.slider');
const sliderPlate = document.querySelector('.slider_plate');
const schoolsSection = document.querySelector('.schools-section');
const startOffsetTop = schoolsSection.offsetTop;
// console.log('getComputedStyle(slider).width', getComputedStyle(slider).width);
// console.log('getComputedStyle(sliderPlate).width', getComputedStyle(sliderPlate).width);
// console.table(slider);
// sliderPlate.style.left = 50 + 'px';
// console.log('sliderPlate.style.left', slider.style.left);

window.addEventListener('scroll', function () {
  if (
    window.pageYOffset > startOffsetTop &&
    slider.offsetWidth - (startOffsetTop - window.pageYOffset) <= sliderPlate.offsetWidth
  ) {
    sliderPlate.style.left = startOffsetTop - window.pageYOffset + 'px';
    // console.log('slider.offsetWidth', slider.offsetWidth);
    // console.log('sliderPlate.offsetWidth', sliderPlate.offsetWidth);
    // console.log('sliderPlate.style.left', sliderPlate.style.left);
    // console.log('sliderPlate.scrollLeft', sliderPlate.scrollLeft);
    //   scrollLeft
  }
  //   console.log('window.pageYOffset', window.pageYOffset);
  //   console.log('startOffsetTop', startOffsetTop);
  //   console.log('slider.offsetTop', slider.offsetTop);
});
