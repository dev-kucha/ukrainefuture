const aboutwarSection = document.querySelector('.aboutwar-section');
const aboutwarSlider = document.querySelector('.aboutwar-slider');
const aboutwarSliderPlate = document.querySelector('.aboutwar-slider_plate');
const aboutwarSliderStopSlide = document.querySelector('.aboutwar-slider_stop-slide');

const inviSection = document.querySelector('.invi-section');
const inviSlider = document.querySelector('.invi-section_slider');
const inviSliderPlate = document.querySelector('.invi-slider_plate ');
const inviSliderStopSlide = document.querySelector('.invi-slider_stop-slide');

const aboutHopesSection = document.querySelector('.about-hopes-section');
const aboutHopesSlider = document.querySelector('.about-hopes-section_slider');
const aboutHopesSliderPlate = document.querySelector('.about-hopes-slider_plate ');
const aboutHopesSliderStopSlide = document.querySelector('.about-hopes-slider_stop-slide');

/* змінюємо ширину стоп-слайда */
const container = document.querySelector('.container');
let widthContainer = getComputedStyle(container).width;
if (parseInt(widthContainer) < 450) {
  aboutwarSliderStopSlide.style.width = widthContainer;
  inviSliderStopSlide.style.width = widthContainer;
  aboutHopesSliderStopSlide.style.width = widthContainer;
  /*   console.log('widthContainer', widthContainer); */
  /*   console.log('aboutwarSliderStopSlide.style.width', aboutwarSliderStopSlide.style.width); */
}
/* змінили ширину стоп-слайда */
window.addEventListener('scroll', function () {
  /*   console.log('aboutwarSection.offsetTop', aboutwarSection.offsetTop); */
  /*   console.log('aboutwarSliderPlate.style.left', aboutwarSliderPlate.style.left); */
  /*   console.log('window.pageYOffset', window.pageYOffset); */
  /*   console.log(
    'aboutwarSection.offsetTop - window.pageYOffset + aboutwarSlider.getBoundingClientRect().left',
    aboutwarSection.offsetTop - window.pageYOffset + aboutwarSlider.getBoundingClientRect().left
  ); */
  if (window.pageYOffset > aboutwarSection.offsetTop) {
    /*     console.log('aboutwarSlider.offsetWidth)', aboutwarSlider.offsetWidth); */
    /*     console.log('aboutwarSliderPlate.offsetWidth)', aboutwarSliderPlate.offsetWidth); */
    /*     console.log('aboutwarSliderPlate.offsetRight)', aboutwarSliderPlate.offsetRight); */
    if (
      // aboutwarSection.offsetTop -
      //   window.pageYOffset +
      // aboutwarSliderStopSlide.getBoundingClientRect().left >=
      // aboutwarSlider.getBoundingClientRect().left
      aboutwarSlider.offsetWidth - (aboutwarSection.offsetTop - window.pageYOffset) <=
      aboutwarSliderPlate.offsetWidth
    ) {
      aboutwarSliderPlate.style.left = aboutwarSection.offsetTop - window.pageYOffset + 'px';
    }
  }
  if (window.pageYOffset > inviSection.offsetTop) {
    if (
      inviSlider.offsetWidth - (inviSection.offsetTop - window.pageYOffset) <=
      inviSliderPlate.offsetWidth
      /*       inviSliderStopSlide.getBoundingClientRect().left > inviSlider.getBoundingClientRect().left */
    ) {
      inviSliderPlate.style.left = inviSection.offsetTop - window.pageYOffset + 'px';
    }
  }
  if (window.pageYOffset > aboutHopesSection.offsetTop) {
    if (
      aboutHopesSlider.offsetWidth - (aboutHopesSection.offsetTop - window.pageYOffset) <=
      aboutHopesSliderPlate.offsetWidth
      /*       aboutHopesSliderStopSlide.getBoundingClientRect().left >
      aboutHopesSlider.getBoundingClientRect().left */
    ) {
      aboutHopesSliderPlate.style.left = aboutHopesSection.offsetTop - window.pageYOffset + 'px';
    }
  }
});
