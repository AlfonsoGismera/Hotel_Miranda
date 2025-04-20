export default async function initListRoomsSlider() {
  try {
    console.log("▶ initListRoomsSlider START");

    // 1) Recupera arrivalDate
    const arrival = localStorage.getItem('arrivalDate');
    console.log("• arrivalDate from localStorage:", arrival);
    if (!arrival) throw new Error('No arrival date in storage');

    // 2) Carga JSON completo
    const res = await fetch('../data/rooms_data.json');
    console.log("• fetch ../data/rooms_data.json status:", res.status);
    if (!res.ok) throw new Error(`rooms_data.json not found (${res.status})`);
    const allRooms = await res.json();
    console.log("• Total rooms loaded:", allRooms.length);

    // 3) Filtra por availabilityDate >= arrival
    const available = allRooms.filter(r => {
      console.log(`  – Checking ${r.roomTitle}: availabilityDate=${r.availabilityDate}`);
      return r.availabilityDate >= arrival;
    });
    console.log("• Rooms available after filter:", available.length);

    // 4) Inyecta solo las disponibles
    const wrapper = document.querySelector('.list_rooms__wrapper');
    console.log("• wrapper element:", wrapper);
    if (!wrapper) throw new Error('No .list_rooms__wrapper element found');
    wrapper.innerHTML = available.map(item => `
      <div class="swiper-slide list_rooms__slide">
        <div class="list_rooms__content">
          <div class="list_rooms__icons">
            <img src="../assets/icons/hotel.svg" alt="Hotel Icon">
            <img src="../assets/icons/wifi.svg"  alt="Wifi Icon">
            <img src="../assets/icons/cocktail.svg" alt="Cocktail Icon">
            <img src="../assets/icons/bathtub.svg" alt="Bathtub Icon">
            <img src="../assets/icons/key.svg" alt="Key Icon">
            <img src="../assets/icons/restaurant.svg" alt="Restaurant Icon">
            <img src="../assets/icons/cup.svg" alt="Cup Icon">
          </div>
          <h3 class="list_rooms__title">${item.roomTitle}</h3>
          <p class="list_rooms__description">${item.description}</p>
          <div class="list_rooms__actions">
            <span class="list_rooms__price">${item.price}</span>
            <a href="#" class="list_rooms__book-link">Book now</a>
          </div>
        </div>
        <div class="list_rooms__image-container">
          <img src="${item.image}" alt="${item.roomTitle}" class="list_rooms__image">
        </div>
      </div>
    `).join('');
    console.log("• HTML injected into wrapper");

    // 5) Inicializa Swiper con bullets numéricas y sin flechas
    new Swiper('.list_rooms__container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: '.list_rooms__pagination',
        clickable: true,
        renderBullet: (i, className) => `<span class="${className}">${i + 1}</span>`
      },
      breakpoints: {
        768:  { slidesPerView: 2, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 30 }
      }
    });
    console.log("▶ initListRoomsSlider END");
  } catch (err) {
    console.error("initListRoomsSlider error:", err);
  }
}
