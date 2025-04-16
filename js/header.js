export default function initHeaderToggle() {
    const toggleBtn = document.querySelector('.header__toggle');
    const nav = document.querySelector('.header__nav');
    let menuOpen = false;
    
    if (!toggleBtn || !nav) {
      console.error("No se encontró el botón del header o el menú.");
      return;
    }
  
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('header__nav--active');
      menuOpen = !menuOpen;
      toggleBtn.innerHTML = menuOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
      console.log("Toggle header:", menuOpen);
    });
  }
  