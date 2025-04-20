import hero_dates from "./hero.js";
import { initHeaderToggle } from "./header.js";
import { initHeroBreadcrumb } from "./header.js";
import initSwiperRooms from "./slider.js";
import initSwiperRooms_Grid from "./slider_grid.js";
import initCoreFeaturesSwiper_white from "./slider_Fea_white.js";
import initCoreFeaturesSwiper_black from "./slider_Fea_black.js";
import initFoodHome from './food_home.js';
import initHomeImagesSwiper from './home_img.js';
// import  initContactMap  from './contactMap.js';

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  if (currentPath === "/" || currentPath.includes("index.html")) {
    initCoreFeaturesSwiper_white();
    hero_dates();
    initSwiperRooms();
    initFoodHome();
    initHomeImagesSwiper();
  }
  if (currentPath === "/html/about_us.html" || currentPath.includes("about_us.html")) {
    console.log("¡Estamos en about_us.html!");
    initCoreFeaturesSwiper_black();

  }
  if (currentPath === "/html/room_grid.html" || currentPath.includes("room_grid.html")) {
    console.log("¡Estamos en room_grid.html!");
    initSwiperRooms_Grid();
  } 
  if (currentPath === "/html/contact.html" || currentPath.includes("contact.html")) {
    console.log("¡Estamos en contact.html!");
    // initContactMap();
  } 
  initHeaderToggle();
  initHeroBreadcrumb();
});
