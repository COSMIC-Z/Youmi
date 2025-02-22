import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

createApp(App)
  .use(router)
  .use(VueAwesomeSwiper)
  .mount('#app')