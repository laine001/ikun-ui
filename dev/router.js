import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './dashborad.vue'
import Setting from './setting.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
