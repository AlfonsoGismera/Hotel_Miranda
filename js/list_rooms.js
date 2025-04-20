import Swiper from 'swiper';

export default async function initListRoomsSlider() {
  try {
    // 1) Recupera arrivalDate
    const arrival = localStorage.getItem('arrivalDate');
    if (!arrival) throw new Error('No arrival date in storage');

    // 2) Carga JSON completo
    const res = await fetch('../data/rooms_data.json');
    if (!res.ok) throw new Error(`rooms_data.json not found (${res.status})`);
    const allRooms = await res.json();

    // 3) Filtra por availabilityDate >= arrival
    const available = allRooms.filter(r => r.availabilityDate >= arrival);

    // 4) Inyecta solo las disponibles
    const wrapper = document.querySelector('.list_rooms__wrapper');
    if (!wrapper) throw new Error('No list_rooms__wrapper element');
    wrapper.innerHTML = available.map(item => `
      <div class="swiper-slide list_rooms__slide">
        <div class="list_rooms__image-container">
          <img src="${item.image}" alt="${item.roomTitle}"
               class="list_rooms__image" />
          <div class="list_rooms__icons">
            <!-- tus iconos aquí, idéntico a grid_ -->
            <img src="../assets/icons/hotel.svg" alt="">
            <!-- ...más iconos -->
          </div>
        </div>
        <div class="list_rooms__info-box">
          <h3 class="list_rooms__room-title">${item.roomTitle}</h3>
          <p class="list_rooms__room-description">${item.description}</p>
          <span class="list_rooms__room-price">${item.price}</span>
          <span class="list_rooms__room-book">Book now</span>
        </div>
      </div>
    `).join('');

    // 5) Inicializa Swiper con bullets numéricas y sin flechas
    new Swiper('.list_rooms__container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: '.list_rooms__pagination',
        clickable: true,
        renderBullet: (i, cls) => `<span class="${cls}">${i + 1}</span>`
      },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 24 },
        1024:{ slidesPerView: 3, spaceBetween: 30 }
      }
    });

    console.log(`Mostrando ${available.length} habitaciones disponibles`);
  } catch (err) {
    console.error('initListRoomsSlider error:', err);
  }
}

// Y en tu main.js:
import initListRoomsSlider from './list_rooms.js';
document.addEventListener('DOMContentLoaded', initListRoomsSlider);
