import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    path: "/todoList",
    name: "todoList",
    component: () => import("../views/TodoList.vue")
  },
  {
    path: "/mapSet",
    name: "mapSet",
    component: () => import("../views/MapSet.vue")
  },{
    path: "/markRaw",
    name: "markRaw",
    component: () => import("../views/MarkRaw.vue")
  },{
    path: "/readOnly",
    name: "readOnly",
    component: () => import("../views/ReadOnly.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
