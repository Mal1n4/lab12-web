import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodView from '../views/FoodView.vue'
import DrinkView from '../views/DrinkView.vue'
import FavosView from '../views/FavosView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/food',
      name: 'food',
      component: FoodView,
    },
    {
      path: '/drinks',
      name: 'drinks',
      component: DrinkView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavosView,
    },
    {
      path: '/twighlight-about',
      name: 'twighlight-about',
      component: AboutView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})  


export default router;
