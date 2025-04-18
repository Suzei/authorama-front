import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventsView from '@/views/EventsView.vue'
import BooksView from '@/views/BooksView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/events',
    name: 'events',
    component: EventsView
  },

  {
    path: '/books',
    name: 'books',
    component: BooksView
  }
]

const router = new VueRouter({
  routes
})

export default router
