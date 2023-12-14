import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import competitionsView from '../views/competitionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/Competitions',
      name: 'competitions',
      component: competitionsView
    },
  ]
})

export default router
