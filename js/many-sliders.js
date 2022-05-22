const aboutwarSection = document.querySelector('.aboutwar-section');
const aboutwarSlider = document.querySelector('.aboutwar-slider');
const aboutwarSliderPlate = document.querySelector('.aboutwar-slider_plate');
const aboutwarSliderStopSlide = document.querySelector('.aboutwar-slider_stop-slide');

const inviSection = document.querySelector('.invi-section');
const inviSlider = document.querySelector('.invi-section_slider');
const inviSliderPlate = document.querySelector('.invi-slider_plate ');
const inviSliderStopSlide = document.querySelector('.invi-slider_stop-slide');

// const aboutHopesSection = document.querySelector('.about-hopes-section');
// const aboutHopesSlider = document.querySelector('.about-hopes-section_slider');
// const aboutHopesSliderPlate = document.querySelector('.about-hopes-slider_plate ');
// const aboutHopesSliderStopSlide = document.querySelector('.about-hopes-slider_stop-slide');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > aboutwarSection.offsetTop) {
    if (
      aboutwarSliderStopSlide.getBoundingClientRect().left >
      aboutwarSlider.getBoundingClientRect().left
    ) {
      aboutwarSliderPlate.style.left = aboutwarSection.offsetTop - window.pageYOffset + 'px';
    }
  }
  if (window.pageYOffset > inviSection.offsetTop) {
    if (
      inviSliderStopSlide.getBoundingClientRect().left > inviSlider.getBoundingClientRect().left
    ) {
      inviSliderPlate.style.left = inviSection.offsetTop - window.pageYOffset + 'px';
    }
  }
  // if (window.pageYOffset > aboutHopesSection.offsetTop) {
  //   if (
  //     aboutHopesSliderStopSlide.getBoundingClientRect().left >
  //     aboutHopesSlider.getBoundingClientRect().left
  //   ) {
  //     aboutHopesSliderPlate.style.left = aboutHopesSection.offsetTop - window.pageYOffset + 'px';
  //   }
  // }
});
