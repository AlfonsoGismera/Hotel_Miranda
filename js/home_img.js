export default function initHomeImagesSwiper() {
  new Swiper('.home_images__swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    navigation: {
      prevEl: '.home_images__prev',
      nextEl: '.home_images__next',
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    }
  });
}

