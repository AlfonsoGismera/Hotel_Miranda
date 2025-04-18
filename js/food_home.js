export default async function initFoodHome() {
  try {
    const res = await fetch('data/food_data.json');
    if (!res.ok) throw new Error(`JSON no encontrado (${res.status})`);
    const foodData = await res.json();

    const wrapper = document.querySelector('.food_home__swiper');
    wrapper.innerHTML = `
      <div class="swiper-wrapper food_home__cards">
        ${foodData.map(item => `
          <div class="swiper-slide food_home__card">
            <img
              src="${item.image}"
              alt="${item.title}"
              class="food_home__card-image"
            />
            <div class="food_home__card-content">
              <h3 class="food_home__card-title">${item.title}</h3>
              <p class="food_home__card-text">${item.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    const images = wrapper.querySelectorAll('.food_home__card-image');
    let imagesLoaded = 0;

    images.forEach(img => {
      if (img.complete) {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          initSwiper();
        }
      } else {
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            initSwiper();
          }
        };
      }
    });

    function initSwiper() {
      new Swiper('.food_home__swiper', {
        slidesPerView: 1,  
            grid: {
            rows: 3,   // Número de filas (te crea 4 al principio)
            fill: 'row'   // Llenar las filas horizontalmente
          },
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: '.food_home__control--next',
          prevEl: '.food_home__control--prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 2}
        }
      });
    }

  } catch (err) {
    console.error(' initFoodHome error:', err);
  }
}