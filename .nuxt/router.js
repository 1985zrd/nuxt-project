import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _60493934 = () => interopDefault(import('../pages/artical.vue' /* webpackChunkName: "pages/artical" */))
const _92a2f268 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _c3871322 = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _783a022a = () => interopDefault(import('../pages/write.vue' /* webpackChunkName: "pages/write" */))
const _30d7c344 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/artical",
    component: _60493934,
    name: "artical"
  }, {
    path: "/search",
    component: _92a2f268,
    name: "search"
  }, {
    path: "/user",
    component: _c3871322,
    name: "user"
  }, {
    path: "/write",
    component: _783a022a,
    name: "write"
  }, {
    path: "/",
    component: _30d7c344,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
