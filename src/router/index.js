import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/HomeView.vue'
import DefaultLayout from '../layouts/DefaultLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      layout: DefaultLayout
    }
  },
  {
    path: '/about',
    name: 'about',
    component: ()=> import ('../components/AboutView.vue'),
    meta:{
      layout:DefaultLayout
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: ()=> import ('../components/PortfolioView.vue'),
    meta:{
      layout:DefaultLayout
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=> import ('../components/ContactView.vue'),
    meta:{
      layout:DefaultLayout
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
