export default async function initSwiperRooms_Grid() {
    try {
      // 1) Carga el JSON
      const res = await fetch('../data/rooms_data.json');
      if (!res.ok) throw new Error(`JSON no encontrado (${res.status})`);
      const slidesData = await res.json();
  
      // 2) Genera el HTML de las slides sin mostrar la fecha
      const swiperWrapper = document.querySelector('.swiper_rooms__container .swiper-wrapper');
      if (!swiperWrapper) {
        console.error("No se encontró el elemento Swiper wrapper.");
        return;
      }
      swiperWrapper.innerHTML = slidesData.map(item => `
        <div class="swiper-slide swiper_rooms__slide">
          <div class="swiper_rooms__image-container">
            <img 
              src="${item.image}" 
              alt="${item.roomTitle}" 
              class="swiper_rooms__image" 
            />
            <div class="swiper_rooms__icons">
              <img src="../assets/icons/hotel.svg"       alt="Hotel Icon">
              <img src="../assets/icons/wifi.svg"        alt="Wifi Icon">
              <img src="../assets/icons/cocktail.svg"    alt="Cocktail Icon">
              <img src="../assets/icons/bathtub.svg"     alt="Bathtub Icon">
              <img src="../assets/icons/key.svg"         alt="Key Icon">
              <img src="../assets/icons/restaurant.svg"  alt="Restaurant Icon">
              <img src="../assets/icons/cup.svg"         alt="Cup Icon">
            </div>
            <div class="swiper_rooms__info-box">
              <div>
                <h3 class="swiper_rooms__room-title">${item.roomTitle}</h3>
                <p class="swiper_rooms__room-description">${item.description}</p>
              </div>
              <span class="swiper_rooms__room-price">${item.price}</span>
            </div>
          </div>
        </div>
      `).join('');
  
      // 3) Inicializa Swiper
      new Swiper(".swiper_rooms__container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopedSlides: slidesData.length,
        pagination: {
          // el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        },
      });
  
      console.log("Swiper Rooms initialized (fechas ocultas).");
    } catch (err) {
      console.error("initSwiperRooms error:", err);
    }
  }
  