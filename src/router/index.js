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
      path: '/categories/:id',
      name: 'categories',
      component: HomePage
    },

    {
      path: '/book-info/:bookId',
      name: 'book-info',
      component: () => import('@/views/BookInfoPage.vue') // BookInfoPage ni import qilmasdan olish yoli
    },

    {
      path: '/add-book',
      name: 'add-book',
      component: () => import('@/components/AddBook.vue')
    },

    {
      path: '/edit-book/:bookId',
      name: 'edit-book',
      component: () => import('@/components/EditBook.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/LoginPage.vue')
    }
  ]
})

export default router
