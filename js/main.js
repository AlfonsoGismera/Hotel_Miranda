import hero_dates from "./hero.js";
import initHeaderToggle from "./header.js";
import initSwiperRooms from "./slider.js";
import initCoreFeaturesSwiper_white from "./slider_Fea_white.js";
import initCoreFeaturesSwiper_black from "./slider_Fea_black.js";

document.addEventListener("DOMContentLoaded", () => {
  hero_dates();
  initHeaderToggle();
  initSwiperRooms();
  initCoreFeaturesSwiper_white();
  initCoreFeaturesSwiper_black();
});
