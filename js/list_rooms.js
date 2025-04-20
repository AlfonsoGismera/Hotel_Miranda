export default async function initListRoomsSlider() {
  try {
    console.log("▶ initListRoomsSlider START");

    const arrival = localStorage.getItem('arrivalDate');
    console.log("• arrivalDate:", arrival);
    if (!arrival) throw new Error('No arrival date in storage');

    const res = await fetch('../data/rooms_data.json');
    console.log("• fetch status:", res.status);
    if (!res.ok) throw new Error(`rooms_data.json not found (${res.status})`);
    const allRooms = await res.json();
    console.log("• total rooms:", allRooms.length);

    const available = allRooms.filter(r => r.availabilityDate >= arrival);
    console.log("• available rooms:", available.length);

    const wrapper = document.querySelector('.list_rooms__wrapper');
    if (!wrapper) throw new Error('No .list_rooms__wrapper found');

    wrapper.innerHTML = available.map(item => `
      <div class="swiper-slide list_rooms__slide">
        <div class="list_rooms__image-container">
          <img src="${item.image}" class="list_rooms__image" alt="${item.roomTitle}">
        </div>
        <div class="list_rooms__content">
          <div class="list_rooms__icons">
            <img src="../assets/icons/hotel.svg">
            <img src="../assets/icons/wifi.svg">
            <img src="../assets/icons/cocktail.svg">
            <img src="../assets/icons/bathtub.svg">
            <img src="../assets/icons/key.svg">
            <img src="../assets/icons/restaurant.svg">
            <img src="../assets/icons/cup.svg">
          </div>
          <h3 class="list_rooms__title">${item.roomTitle}</h3>
          <p class="list_rooms__description">${item.description}</p>
          <div class="list_rooms__actions">
            <div class="list_rooms__price">
            <span>${item.price}</span></div>
            <a href="#" class="list_rooms__book-link">Book now</a>
          </div>
        </div>
      </div>
    `).join('');
    console.log("• injected HTML");

    // inicializa Swiper con Grid
    new Swiper('.list_rooms__container', {
      slidesPerView: 1,
      slidesPerGroup: 2,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row'
      },
      pagination: {
        el: '.list_rooms__pagination',
        clickable: true,
        renderBullet: (i, className) => `<span class="${className}">${i+1}</span>`
      }
    });
    console.log("▶ initListRoomsSlider END");

  } catch (err) {
    console.error("initListRoomsSlider error:", err);
  }
}
