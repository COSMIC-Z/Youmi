import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/front/home/home.vue'
import intro1 from '../views/front/home/intro1.vue'
import plan from '../views/front/plan.vue'
import operate from '../views/front/operate/operate.vue'
import ServerDetail1 from '../views/front/operate/ServerDetail1.vue'
import ServerDetail2 from '../views/front/operate/ServerDetail2.vue'
import ServerDetail3 from '../views/front/operate/ServerDetail3.vue'
import ServerDetail4 from '../views/front/operate/ServerDetail4.vue'
import ServerDetail5 from '../views/front/operate/ServerDetail5.vue'
import ServerDetail6 from '../views/front/operate/ServerDetail6.vue'
import exhibition from '../views/front/exhibition.vue'
import maker from '../views/front/maker.vue'
import ameiyan from '../views/front/ameiyan.vue'
import information from '../views/front/information/information.vue'
import subpage1 from '../views/front/information/subpage1.vue'
import about from '../views/front/about.vue'
import login from '../components/back/login.vue'
import backstage from '../views/back/back-page.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: home },
  { path: '/home/intro1', component: intro1 },
  { path: '/plan', component: plan },
  { path: '/operate', component: operate },
  { path: '/operate/ServerDetail1', component: ServerDetail1 },
  { path: '/operate/ServerDetail2', component: ServerDetail2 },
  { path: '/operate/ServerDetail3', component: ServerDetail3 },
  { path: '/operate/ServerDetail4', component: ServerDetail4 },
  { path: '/operate/ServerDetail5', component: ServerDetail5 },
  { path: '/operate/ServerDetail6', component: ServerDetail6 },
  { path: '/exhibition', component: exhibition },
  { path: '/maker', component: maker },
  { path: '/ameiyan', component: ameiyan },
  { path: '/information', component: information },
  { path: '/information/subpage1', component: subpage1 },
  { path: '/about', component: about },
  { path: '/login', component: login },
  { path: '/backstage', component: backstage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
