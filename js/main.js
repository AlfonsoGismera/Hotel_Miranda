import hero_dates from "./hero.js";
import initHeaderToggle from "./header.js";
import initSwiperRooms from "./slider.js";
import initCoreFeaturesSwiper_white from "./slider_Fea_white.js";
import initCoreFeaturesSwiper_black from "./slider_Fea_black.js";

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  if (currentPath === "/" || currentPath.includes("index.html")) {
    initCoreFeaturesSwiper_white();
    hero_dates();
    initSwiperRooms();
  } else {
    console.log("No estamos en la página principal");
  }
  if (currentPath === "/html/about_us.html" || currentPath.includes("about_us.html")) {
    console.log("¡Estamos en about_us.html! Intentando inicializar el slider negro.");
    initCoreFeaturesSwiper_black();
  } else {
    console.log("No estamos en about_us.html");
  }
  initHeaderToggle();
 
});
