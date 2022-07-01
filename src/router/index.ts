import { createRouter, createWebHashHistory } from 'vue-router'

import isAuthenticatedGuard from '../router/auth-guard'

const routes = [
  {
    path: '/',
    name: 'Home',
    beforeEnter: [ isAuthenticatedGuard ],
    component: () => import('../views/HomeMap.vue')
  },
  
  {
    path: '/auth',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
