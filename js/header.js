// js/header.js
export function initHeaderToggle() {
  const toggleBtn = document.querySelector('.header__toggle');
  const nav       = document.querySelector('.header__nav');
  let menuOpen    = false;

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

// js/breadcrumb.js
export function initHeroBreadcrumb() {
  // sólo si NO estamos en la HOME "/"
  if (window.location.pathname === '/') return;

  const bcContainer = document.querySelector('.hero__breadcrumb');
  const heroTitle   = document.querySelector('.hero__title')?.textContent.trim();

  if (!bcContainer || !heroTitle) {
    console.error("No se encontró hero__breadcrumb o hero__title.");
    return;
  }

  // construimos el HTML
  bcContainer.innerHTML = `
    <a href="/" class="breadcrumb__link">HOME</a>
    <span class="breadcrumb__sep">/</span>
    <span class="breadcrumb__current">${heroTitle}</span>
  `;
}
