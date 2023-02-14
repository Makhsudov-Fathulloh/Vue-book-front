import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/book-info',
      name: 'book-info',
      component: () => import('@/views/BookInfoPage.vue') // BookInfoPage ni import qilmasdan olish yoli
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/LoginPage.vue')
    }
  ]
})

export default router
