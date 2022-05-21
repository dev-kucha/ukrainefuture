const slider = document.querySelector('.slider');
const sliderPlate = document.querySelector('.slider_plate');
const schoolsSection = document.querySelector('.schools-section');
const container = document.querySelector('.container');
let widthContainer = getComputedStyle(container).width;
const slider1StopSlide = document.querySelector('.slider1_stop-slide');
// let sliderPlateLeft = sliderPlate.getBoundingClientRect().left;
// console.log('sliderPlateLeft', sliderPlateLeft);

if (parseInt(widthContainer) < 450) {
  slider1StopSlide.style.width = widthContainer;
  console.log('widthContainer', widthContainer);
  console.log('slider1StopSlide.style.width', slider1StopSlide.style.width);
}

const startOffsetTop = schoolsSection.offsetTop;

// console.log('getComputedStyle(sliderPlate).width', getComputedStyle(sliderPlate).width);

window.addEventListener('scroll', function () {
  let containerLeft = container.getBoundingClientRect().left;
  let sliderPlateLeft = sliderPlate.getBoundingClientRect().left;
  // console.log('sliderPlateLeft', sliderPlateLeft);
  let slider1StopSlideLeft = slider1StopSlide.getBoundingClientRect().left;
  let delta = window.pageYOffset - startOffsetTop;
  // let stopPoint = containerLeft - slider1StopSlideLeft;
  // let stop = parseInt(sliderPlate.style.left) + window.pageYOffset - startOffsetTop - stopPoin;

  let stop =
    parseInt(sliderPlateLeft) +
    window.pageYOffset -
    startOffsetTop -
    (containerLeft - slider1StopSlideLeft);

  console.log(sliderPlateLeft, window.pageYOffset, startOffsetTop);

  console.log('sliderPlateLeft', sliderPlateLeft);

  if (delta >= 0) {
    sliderPlate.style.left = startOffsetTop - window.pageYOffset + 'px';
    console.log('containerLeft - slider1StopSlideLeft', containerLeft - slider1StopSlideLeft);
  }
  console.log(
    'sliderPlateLeft + window.pageYOffset - startOffsetTop',
    sliderPlateLeft + window.pageYOffset - startOffsetTop
  );

  console.log(
    parseInt(sliderPlate.style.left) +
      window.pageYOffset -
      startOffsetTop -
      (containerLeft - slider1StopSlideLeft)
  );

  console.log(
    sliderPlateLeft + window.pageYOffset - startOffsetTop - (containerLeft - slider1StopSlideLeft)
  );
  // if (window.pageYOffset > startOffsetTop) {
  //   delta = startOffsetTop - window.pageYOffset;
  // } else {
  //   delta = 0;
  // }
  // console.log('sliderPlate.style.left до', sliderPlate.style.left);
  // sliderPlate.style.left = delta + 'px';
  // // sliderPlate.style.left = parseInt(sliderPlate.style.left) + delta + 'px';
  // console.log('sliderPlate.style.left после', sliderPlate.style.left);
  // console.log('sliderPlate.offsetWidth', sliderPlate.offsetWidth);
  // console.log('window.pageYOffset - startOffsetTop', window.pageYOffset - startOffsetTop);
  // console.log('slider1StopSlideLeft', slider1StopSlideLeft);
  // console.log('containerLeft', containerLeft);
  // console.log(
  //   window.pageYOffset - startOffsetTop,
  //   containerLeft - slider1StopSlideLeft,
  //   sliderPlate.style.left
  // );
  /*  */
  /*  */
  /*  */
  // let stopPoin = containerLeft - slider1StopSlideLeft;
  // console.log(parseInt(sliderPlate.style.left) + window.pageYOffset - startOffsetTop - stopPoin);
  /*  */
  /*  */
  // let stopPoin = containerLeft - slider1StopSlideLeft;
  // console.log(parseInt(sliderPlate.style.left) + window.pageYOffset - startOffsetTop - (containerLeft - slider1StopSlideLeft)));
  /*  */
  // if (window.pageYOffset > startOffsetTop) {
  //   sliderPlate.style.left = startOffsetTop - window.pageYOffset + 'px';
  //   if (slider1StopSlideLeft - containerLeft >= 0) {
  //     // slider1StopSlide.style.position = 'relative';
  //     // slider1StopSlide.style.left = containerLeft;
  //     console.log('containerLeft', containerLeft);
  //     console.log('slider1StopSlideLeft', slider1StopSlideLeft);
  //   }
});

//   console.log('container.getBoundingClientRect().left', container.getBoundingClientRect().left);
//   console.log(
//     'slider1StopSlide.getBoundingClientRect().left',
//     slider1StopSlide.getBoundingClientRect().left
//   );
// } else {
// sliderPlate.style.left = startOffsetTop - window.pageYOffset + 'px';

/*  */
// &&
//     slider.offsetWidth - (startOffsetTop - window.pageYOffset) <= sliderPlate.offsetWidth
/*  */

// console.log('getComputedStyle(slider).width', getComputedStyle(slider).width);
// console.table(slider);
// sliderPlate.style.left = 50 + 'px';
// console.log('sliderPlate.style.left', slider.style.left);
// console.log('slider.offsetWidth', slider.offsetWidth);
// console.log('sliderPlate.offsetWidth', sliderPlate.offsetWidth);
// console.log('sliderPlate.style.left', sliderPlate.style.left);
// console.log('sliderPlate.scrollLeft', sliderPlate.scrollLeft);
//   scrollLeft

//   console.log('window.pageYOffset', window.pageYOffset);
//   console.log('startOffsetTop', startOffsetTop);
//   console.log('slider.offsetTop', slider.offsetTop);
