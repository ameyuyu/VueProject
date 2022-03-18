import { createRouter, createWebHistory } from 'vue-router'
import UserEmailNav from './views/UserEmailNav.vue'
import UserProfilePreview from './views/UserProfilePreview.vue'
import Userdetailsinfomarion from './views/Userdetailsinfomarion.vue'
import Home from './views/Home.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // You could also have named views at tho top
      component: Home,
    },
    {
      path: '/emails',
      // You could also have named views at tho top
      component: UserEmailNav,
    },
    {
      path: '/profile',
      // You could also have named views at tho top
      component: UserProfilePreview,
    },
    {
      path: '/details',
      // You could also have named views at tho top
      component: Userdetailsinfomarion,
    }
  ],
})
