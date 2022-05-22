const newSlider = document.querySelector('.new-slider');
console.log('newSlider', newSlider);
console.log('newSlider.offsetTop', newSlider.offsetTop);
const newSliderPlate = document.querySelector('.new-slider_plate');
console.log('newSliderPlate', newSliderPlate);
//const inviSection = document.querySelector('.invi-section'); міняю блок для перевірки слайдера блока
const inviSection = document.querySelector('.aboutwar-section');

console.log('inviSection', inviSection);
const stickySpacer = document.querySelector('.sticky-spacer');
console.log('stickySpacer', stickySpacer);
// new-slider_stop-slide
const newSliderStopSlide = document.querySelector('.new-slider_stop-slide');
console.log('newSliderStopSlide', newSliderStopSlide);

// let windowOffsetPrevious = 0;

var scroll = 0;
window.onscroll = onScroll;

window.addEventListener('scroll', function () {
  console.log('window.pageYOffset', window.pageYOffset);
  console.log('inviSection.offsetTop', inviSection.offsetTop);
  console.log('stickySpacer.offsetTop', stickySpacer.offsetTop);

  var top = window.pageYOffset;
  if (scroll > top) {
    console.log('1');
  } else if (scroll < top) {
    console.log('0');
  }
  scroll = top;

  if (window.onscroll) {
    console.log('scroll down');
    if (window.pageYOffset > inviSection.offsetTop) {
      if (
        newSliderStopSlide.getBoundingClientRect().left > newSlider.getBoundingClientRect().left
      ) {
        newSliderPlate.style.left = inviSection.offsetTop - window.pageYOffset + 'px';
      }
    }
  } else {
    console.log('scroll up');
  }
  //   console.log('newSliderPlate.offsetLeft ', newSliderPlate.offsetLeft);
  //   console.log(
  //     'newSliderPlate.getBoundingClientRect()',
  //     newSliderPlate.getBoundingClientRect().right
  //   );
  //   console.log(
  //     'newSliderPlate.getBoundingClientRect().left',
  //     newSliderPlate.getBoundingClientRect().left
  //   );
  //   console.log(
  //     'newSliderStopSlide.getBoundingClientRect().left',
  //     newSliderStopSlide.getBoundingClientRect().left
  //   );
  //   console.log('newSlider.getBoundingClientRect().left', newSlider.getBoundingClientRect().left);

  //   console.log(window.pageYOffset >= windowOffsetPrevious);
});

// var scroll = 0;
// window.onscroll = onScroll;
function onScroll() {
  var top = window.pageYOffset;
  if (scroll > top) {
    console.log('1');
  } else if (scroll < top) {
    console.log('0');
  }
  scroll = top;
}

// let oldScrollTopPosition = 0;

// window.onscroll = () => {
//   const scrollTopPosition = document.documentElement.scrollTop;
//   console.log(oldScrollTopPosition < scrollTopPosition);
//   oldScrollTopPosition = scrollTopPosition;
// };

// const onScrol = function () {
//   const scrollTopPosition = document.documentElement.scrollTop;
//   console.log(oldScrollTopPosition < scrollTopPosition);
//   oldScrollTopPosition = scrollTopPosition;
// };

// window.addEventListener('scroll', function () {
//   if (
//     window.pageYOffset > startOffsetTop &&
//     slider.offsetWidth - (startOffsetTop - window.pageYOffset) <= sliderPlate.offsetWidth
//   ) {
//     sliderPlate.style.left = startOffsetTop - window.pageYOffset + 'px';
// console.log('slider.offsetWidth', slider.offsetWidth);
// console.log('sliderPlate.offsetWidth', sliderPlate.offsetWidth);
// console.log('sliderPlate.style.left', sliderPlate.style.left);
// console.log('sliderPlate.scrollLeft', sliderPlate.scrollLeft);
//   scrollLeft
//   }

//
// const schoolsSection = document.querySelector('.schools-section');
// const startOffsetTop = schoolsSection.offsetTop;
// console.log('getComputedStyle(slider).width', getComputedStyle(slider).width);
// console.log('getComputedStyle(sliderPlate).width', getComputedStyle(sliderPlate).width);
// // console.table(slider);
// // sliderPlate.style.left = 50 + 'px';
// // console.log('sliderPlate.style.left', slider.style.left);

// window.addEventListener('scroll', function () {
//   if (
//     window.pageYOffset > startOffsetTop &&
//     slider.offsetWidth - (startOffsetTop - window.pageYOffset) <= sliderPlate.offsetWidth
//   ) {
//     sliderPlate.style.left = startOffsetTop - window.pageYOffset + 'px';
//     console.log('slider.offsetWidth', slider.offsetWidth);
//     console.log('sliderPlate.offsetWidth', sliderPlate.offsetWidth);
//     console.log('sliderPlate.style.left', sliderPlate.style.left);
//     console.log('sliderPlate.scrollLeft', sliderPlate.scrollLeft);
//     //   scrollLeft
//   }
//   console.log('window.pageYOffset', window.pageYOffset);
//   console.log('startOffsetTop', startOffsetTop);
//   console.log('slider.offsetTop', slider.offsetTop);
