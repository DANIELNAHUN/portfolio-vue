import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout'
import HomeView from '../views/HomeView.vue'

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
    component: ()=> import ('../components/AboutComponent.vue'),
    meta:{
      layout:DefaultLayout
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: ()=> import ('../components/PortfolioComponent.vue'),
    meta:{
      layout:DefaultLayout
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=> import ('../components/ContactComponent.vue'),
    meta:{
      layout:DefaultLayout
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
