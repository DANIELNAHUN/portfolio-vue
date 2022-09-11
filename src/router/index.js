import VuetifyLayout from '@/layouts/VuetifyLayout.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    /*component: ()=> import ('../components/HomeComponent.vue'),*/
    meta:{
      layout: DefaultLayout
    }
  },
  {
    path: '/about',
    name: 'about',
    /*component: AboutView,*/
    component: ()=> import ('../components/AppAbout.vue'),
    meta:{
      layout:DefaultLayout
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: ()=> import ('../components/AppPortfolio.vue'),
    meta:{
      layout:DefaultLayout
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=> import ('../components/AppContact.vue'),
    meta:{
      layout:DefaultLayout
    }
  },
  {
    path: '/',
    name: 'vuetifyhome',
    component: ()=> import ('@/views/PortfolioVuetify.vue'),
    meta:{
      layout:VuetifyLayout
    }
  },
  {
    path: '/vuetifyabout',
    name: 'vuetifyabout',
    component: ()=> import ('@/views/AboutView.vue'),
    meta:{
      layout:VuetifyLayout
    }
  },
  {
    path: '/portfoliovuetify',
    name: 'portfoliovuetify',
    component: ()=> import ('@/views/PortfolioView.vue'),
    meta:{
      layout:VuetifyLayout
    }
  },
  {
    path: '/contactvuetify',
    name: 'contactvuetify',
    component: ()=> import ('@/views/ContactView.vue'),
    meta:{
      layout:VuetifyLayout
    }
  },
]

const router = new VueRouter({
  routes,
  // eslint-disable-next-line no-unused-vars
  // scrollBehavior (to, from, savedPosition) {
  //   if (to.hash) {
  //     // eslint-disable-next-line no-unused-vars
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve({
  //           selector: to.hash,
  //           offset: { x: 10, y: 0 },
  //           behavior: 'smooth'
  //         })
  //       }, 2000)
  //     })
  //   }

  //   return { x: 0, y: 0 }
  // }
})

export default router
