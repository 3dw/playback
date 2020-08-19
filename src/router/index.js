import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'Statues',
    component: () => import('../views/Statues.vue')
  },
  {
    path: '/one_to_one',
    name: 'OneToOne',
    component: () => import('../views/OneToOne.vue')
  },
  {
    path: '/pages',
    name: 'Pages',
    component: () => import('../views/Pages.vue')
  },
  {
    path: '/4elems',
    name: '4Elems',
    component: () => import('../views/4Elems.vue')
  },
  {
    path: '/free',
    name: 'Free',
    component: () => import('../views/Free.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
