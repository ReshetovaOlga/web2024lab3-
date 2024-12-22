import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import legendView from "@/views/legendView.vue";
import loveView from "@/views/loveView.vue";
import loginView from "@/views/loginView.vue";
import readListView from "@/views/readListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/legend',
      name: 'legend',
      component: legendView,
    },
    {
      path: '/love',
      name: 'love',
      component: loveView,
    },
    {
      path: '/login',
      name: 'login',
      component: loginView,
    },
    {
      path: '/readList',
      name: 'readList',
      component: readListView,
    },
  ],
})

export default router
