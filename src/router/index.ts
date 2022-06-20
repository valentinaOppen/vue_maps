import { createRouter, createWebHashHistory } from 'vue-router'
import HomeMap from '../modules/maps/views/HomeMap.vue'

import isAuthenticatedGuard from '../router/auth-guard'

// import authRouter from '../modules/auth/router'
// import daybookRouter from '../modules/daybook/router'
// import component from '../env';

const routes = [
  {
    path: '/',
    name: 'Home',
    beforeEnter: [ isAuthenticatedGuard ],
    component: HomeMap
  },
  
  {
    path: '/auth',
    name: 'Login',
    component: () => import('../modules/auth/views/Login.vue')
  }  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
