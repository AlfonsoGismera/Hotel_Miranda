export default async function initSwiperRooms_Grid() {
  try {
    // 1) Carga el JSON
    const res = await fetch('../data/rooms_data.json');
    if (!res.ok) throw new Error(`JSON no encontrado (${res.status})`);
    const slidesData = await res.json();

    // 2) Genera el HTML de las slides
    const swiperWrapper = document.querySelector('.grid_rooms__container .swiper-wrapper');
    if (!swiperWrapper) {
      console.error("No se encontró el elemento Swiper wrapper.");
      return;
    }
    swiperWrapper.innerHTML = slidesData.map(item => `
      <div class="swiper-slide grid_rooms__slide ">
        <div class="grid_rooms__image-container">
          <img
            src="${item.image}"
            alt="${item.roomTitle}"
            class="grid_rooms__image "
          />
          <div class="grid_rooms__icons ">
            <img src="../assets/icons/hotel.svg"     alt="Hotel Icon">
            <img src="../assets/icons/wifi.svg"      alt="Wifi Icon">
            <img src="../assets/icons/cocktail.svg"   alt="Cocktail Icon">
            <img src="../assets/icons/bathtub.svg"    alt="Bathtub Icon">
            <img src="../assets/icons/key.svg"       alt="Key Icon">
            <img src="../assets/icons/restaurant.svg" alt="Restaurant Icon">
            <img src="../assets/icons/cup.svg"       alt="Cup Icon">
          </div>
          <div class="grid_rooms__info-box">
            <div>
              <h3 class="grid_rooms__room-title">${item.roomTitle}</h3>
              <p class="grid_rooms__room-description ">${item.description}</p>
            </div>
            <span class="grid_rooms__room-price">${item.price}</span>
            <span class="grid_rooms__room-book">Booking Now</span>
          </div>
        </div>
      </div>
    `).join('');

    // 3) Inicializa Swiper con paginación numérica y columnas
    new Swiper(".grid_rooms__container", {
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 30,
      loop: false, // importante: no duplicar slides
      pagination: {
        el: ".grid_rooms__pagination",
        type: "fraction", // muestra "1 / X"
        clickable: true
      },
      navigation: {
        nextEl: ".grid_rooms__button-next",
        prevEl: ".grid_rooms__button-prev",
      },
      breakpoints: {
        768:   {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      },
    });

    console.log("Swiper Rooms Grid initialized with columns and pagination.");
  } catch (err) {
    console.error("initSwiperRooms_Grid error:", err);
  }
}