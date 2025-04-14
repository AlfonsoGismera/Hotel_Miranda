// main.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.header__toggle');
    const nav = document.querySelector('.header__nav');
    let menuOpen = false;
  
    toggleBtn.addEventListener('click', () => {
      // Alternamos la clase que controla el despliegue del menú
      nav.classList.toggle('header__nav--active');
      menuOpen = !menuOpen;
      
      // También puedes cambiar el ícono entre "hamburguesa" y "X"
      if (menuOpen) {
        toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });
  