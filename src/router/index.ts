import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/home.vue'
import plan from '../views/plan.vue'
import operate from '../views/operate.vue'
import investment from '../views/investment.vue'
import exhibition from '../views/exhibition.vue'
import maker from '../views/maker.vue'
import ameiyan from '../views/ameiyan.vue'
import information from '../views/information.vue'
import about from '../views/about.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: home },
  { path: '/plan', component: plan },
  { path: '/operate', component: operate },
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
