
// Array de datos de las diapositivas con imágenes de Unsplash y parámetros
const slidesData = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      roomTitle: 'Duplex Room',
      description: 'Short description or bullet point',
      price: '$150/Night'
    },
    {
      image: 'https://images.unsplash.com/photo-1685592437742-3b56edb46b15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      roomTitle: 'Luxury Suite',
      description: 'Short description or bullet point',
      price: '$250/Night'
    },
    {
      image: 'https://images.unsplash.com/photo-1594560913095-8cf34bab82ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      roomTitle: 'Executive Room',
      description: 'Short description or bullet point',
      price: '$180/Night'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      roomTitle: 'Deluxe Room',
      description: 'Short description or bullet point',
      price: '$200/Night'
    },
    {
      image: 'https://images.unsplash.com/photo-1631048730670-ff5cd0d08f15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGhhYml0YWNpb25lcyUyMGRlJTIwaG90ZWx8ZW58MHwwfDB8fHww',
      roomTitle: 'Family Room',
      description: 'Short description or bullet point',
      price: '$220/Night'
    },
    {
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhYml0YWNpb25lcyUyMGRlJTIwaG90ZWx8ZW58MHwwfDB8fHww',
      roomTitle: 'Executive Suite',
      description: 'Short description or bullet point',
      price: '$300/Night'
    },
  ];
  
  // Función para generar el HTML de las Cards
  function generateSlidesHTML(data) {
    return data
      .map(item => {
        return `
          <div class="swiper-slide swiper_rooms__slide">
            <div class="swiper_rooms__image-container">
              <img src="${item.image}" alt="${item.roomTitle}" class="swiper_rooms__image" />
              <!-- Emoticonos/íconos en la parte superior central -->
              <div class="swiper_rooms__icons">
              <img src="../assets/icons/hotel.svg" alt="Hotel Icon">
              <img src="./assets/icons/wifi.svg" alt="Wifi Icon">
              <img src="./assets/icons/cocktail.svg" alt="Cocktail Icon">
              <img src="./assets/icons/bathtub.svg" alt="Bathtub Icon">
              <img src="./assets/icons/key.svg" alt="Key Icon">
              <img src="./assets/icons/restaurant.svg" alt="Restaurant Icon">
              <img src="./assets/icons/cup.svg" alt="Cup Icon">
              
              </div>
              <!-- Bloque inferior con la información de la habitación -->
              <div class="swiper_rooms__info-box">
                <div>
                  <h3 class="swiper_rooms__room-title">${item.roomTitle}</h3>
                  <p class="swiper_rooms__room-description">${item.description}</p>
                </div>
                <span class="swiper_rooms__room-price">${item.price}</span>
              </div>
            </div>
          </div>
        `;
      })
      .join('');
  }
  
  export default function initSwiperRooms() {
    // Busca el wrapper donde inyectar las diapositivas
    const swiperWrapper = document.querySelector('.swiper_rooms__container .swiper-wrapper');
    if (swiperWrapper) {
      swiperWrapper.innerHTML = generateSlidesHTML(slidesData);
    } else {
      console.error("No se encontró el elemento Swiper wrapper.");
    }
  
    const swiper = new Swiper(".swiper_rooms__container", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      loopedSlides: slidesData.length,
      pagination: {

        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      },
    });
    console.log("Swiper Rooms initialized.");
  }
  