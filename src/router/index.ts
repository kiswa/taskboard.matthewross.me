import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/docs',
    name: 'docs',
    component: () => import('../views/Docs.vue'),
    children: [
      {
        path: 'quick-start',
        name: 'quick-start',
        component: () => import('../components/QuickStart.vue')
      },
      {
        path: 'intro',
        name: 'intro',
        component: () => import('../components/Intro.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('../components/Settings.vue')
      },
      {
        path: 'boards',
        name: 'boards',
        component: () => import('../components/Boards.vue')
      },
      {
        path: 'tasks',
        name: 'tasks',
        component: () => import('../components/Tasks.vue')
      }
    ]
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../views/Download.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/Demo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
