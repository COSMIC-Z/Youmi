import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/home.vue'
import plan from '../views/plan.vue'
import operate from '../views/operate/operate.vue'
import investment from '../views/investment.vue'
import exhibition from '../views/exhibition.vue'
import maker from '../views/maker.vue'
import ameiyan from '../views/ameiyan.vue'
import information from '../views/information.vue'
import about from '../views/about.vue'
import ServerDetail1 from '../views/operate/ServerDetail1.vue'
import ServerDetail2 from '../views/operate/ServerDetail2.vue'
import ServerDetail3 from '../views/operate/ServerDetail3.vue'
import ServerDetail4 from '../views/operate/ServerDetail4.vue'
import ServerDetail5 from '../views/operate/ServerDetail5.vue'
import ServerDetail6 from '../views/operate/ServerDetail6.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: home },
  { path: '/plan', component: plan },
  { path: '/operate', component: operate },
  { path: '/operate/ServerDetail1', component: ServerDetail1 },
  { path: '/operate/ServerDetail2', component: ServerDetail2 },
  { path: '/operate/ServerDetail3', component: ServerDetail3 },
  { path: '/operate/ServerDetail4', component: ServerDetail4 },
  { path: '/operate/ServerDetail5', component: ServerDetail5 },
  { path: '/operate/ServerDetail6', component: ServerDetail6 },
  { path: '/investment', component: investment },
  { path: '/exhibition', component: exhibition },
  { path: '/maker', component: maker },
  { path: '/ameiyan', component: ameiyan },
  { path: '/information', component: information },
  { path: '/about', component: about },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
