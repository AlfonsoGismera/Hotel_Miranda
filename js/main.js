import hero_dates from "./hero.js";
import initHeaderToggle from "./header.js";
import initSwiperRooms from "./slider.js";
import initCoreFeaturesSwiper from "./sliderFeatures.js";

document.addEventListener("DOMContentLoaded", () => {
  hero_dates();
  initHeaderToggle();
  initSwiperRooms();
  initCoreFeaturesSwiper();
});
