import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _51b7caf7 = () => interopDefault(import('..\\pages\\artistas.vue' /* webpackChunkName: "pages/artistas" */))
const _04edcf32 = () => interopDefault(import('..\\pages\\museo.vue' /* webpackChunkName: "pages/museo" */))
const _d7779768 = () => interopDefault(import('..\\pages\\pinturas.vue' /* webpackChunkName: "pages/pinturas" */))
const _875f05f8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _43ce2e0e = () => interopDefault(import('..\\pages\\artista\\_slug.vue' /* webpackChunkName: "pages/artista/_slug" */))
const _43e853c4 = () => interopDefault(import('..\\pages\\museos\\_slug.vue' /* webpackChunkName: "pages/museos/_slug" */))
const _6c1983a3 = () => interopDefault(import('..\\pages\\pintura\\_slug.vue' /* webpackChunkName: "pages/pintura/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/artistas",
    component: _51b7caf7,
    name: "artistas"
  }, {
    path: "/museo",
    component: _04edcf32,
    name: "museo"
  }, {
    path: "/pinturas",
    component: _d7779768,
    name: "pinturas"
  }, {
    path: "/",
    component: _875f05f8,
    name: "index"
  }, {
    path: "/artista/:slug?",
    component: _43ce2e0e,
    name: "artista-slug"
  }, {
    path: "/museos/:slug?",
    component: _43e853c4,
    name: "museos-slug"
  }, {
    path: "/pintura/:slug?",
    component: _6c1983a3,
    name: "pintura-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
