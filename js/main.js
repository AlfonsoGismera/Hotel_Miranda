document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.header__toggle');
    const nav = document.querySelector('.header__nav');
    let menuOpen = false;
  
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('header__nav--active');
      menuOpen = !menuOpen;
      if (menuOpen) {
        toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });
  