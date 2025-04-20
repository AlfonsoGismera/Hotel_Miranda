export default function initHomeImagesSwiper() {
  new Swiper('.home_images__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.home_images__pagination',
        clickable: true,
      },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
        pagination: false,
      }
    }
  });
}

