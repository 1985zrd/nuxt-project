import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e822592 = () => interopDefault(import('..\\pages\\artical.vue' /* webpackChunkName: "pages_artical" */))
const _defe732e = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages_search" */))
const _43e3f94c = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages_user" */))
const _59a850a4 = () => interopDefault(import('..\\pages\\write.vue' /* webpackChunkName: "pages_write" */))
const _124611be = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _7e822592,
    name: "artical"
  }, {
    path: "/search",
    component: _defe732e,
    name: "search"
  }, {
    path: "/user",
    component: _43e3f94c,
    name: "user"
  }, {
    path: "/write",
    component: _59a850a4,
    name: "write"
  }, {
    path: "/",
    component: _124611be,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
