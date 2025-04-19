import hero_dates from "./hero.js";
import initHeaderToggle from "./header.js";
import initSwiperRooms from "./slider.js";
import initCoreFeaturesSwiper_white from "./slider_Fea_white.js";
import initCoreFeaturesSwiper_black from "./slider_Fea_black.js";
import initFoodHome from './food_home.js';

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  if (currentPath === "/" || currentPath.includes("index.html")) {
    initCoreFeaturesSwiper_white();
    hero_dates();
    initSwiperRooms();
    initFoodHome();
  }
  if (currentPath === "/html/about_us.html" || currentPath.includes("about_us.html")) {
    console.log("¡Estamos en about_us.html!");
    initCoreFeaturesSwiper_black();
  }
  if (currentPath === "/html/rooms.html" || currentPath.includes("rooms.html")) {
    console.log("¡Estamos en rooms.html!");
    initSwiperRooms();
  } 
  initHeaderToggle();
 
});
