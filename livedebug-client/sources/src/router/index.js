import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Tracking from '../views/Tracking.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tracking',
    name: 'Tracking',
    component: Tracking
  }
]

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  base: process.env.BASE_URL,
  routes
})

export default router
