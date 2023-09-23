import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css';
/** 需要用到再 import */
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomeSwiper);
});
