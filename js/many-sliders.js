const aboutwarSection = document.querySelector('.aboutwar-section');
const aboutwarSlider = document.querySelector('.aboutwar-slider');
const aboutwarSliderPlate = document.querySelector('.aboutwar-slider_plate');
const aboutwarSliderStopSlide = document.querySelector('.aboutwar-slider_stop-slide');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > aboutwarSection.offsetTop) {
    if (
      aboutwarSliderStopSlide.getBoundingClientRect().left >
      aboutwarSlider.getBoundingClientRect().left
    ) {
      aboutwarSliderPlate.style.left = aboutwarSection.offsetTop - window.pageYOffset + 'px';
    }
  }
});

const inviSection = document.querySelector('.invi-section');
const inviSlider = document.querySelector('.invi-section_slider');
const inviSliderPlate = document.querySelector('.invi-slider_plate ');
const inviSliderStopSlide = document.querySelector('.invi-slider_stop-slide');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > inviSection.offsetTop) {
    if (
      inviSliderStopSlide.getBoundingClientRect().left > inviSlider.getBoundingClientRect().left
    ) {
      inviSliderPlate.style.left = inviSection.offsetTop - window.pageYOffset + 'px';
    }
  }
});
