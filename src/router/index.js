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
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            selector: to.hash,
            offset: { x: 10, y: 0 },
            behavior: 'smooth'
          })
        }, 2000)
      })
    }

    return { x: 0, y: 0 }
  }
})

export default router
