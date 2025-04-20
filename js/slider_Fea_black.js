// sliderFeatures.js
export default function initCoreFeaturesSwiper_black() {

    const swiper = new Swiper(".core_black__swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".core_black__pagination",
        clickable: true,
      },
      // Desactiva loop y paginación en desktop via breakpoints
      breakpoints: {
        768: {
          slidesPerView: 3,
          loop: false,
          pagination: false,
          spaceBetween: 30,
        },
      },
    });
  }
  