// sliderFeatures.js
export default function initCoreFeaturesSwiper_black() {
    // Inicializamos Swiper sólo en móvil (<768px)
    const swiper = new Swiper(".core_white__swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".core_white__pagination",
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
  