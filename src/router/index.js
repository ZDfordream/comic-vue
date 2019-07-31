import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/',
    name: "main",
    component: () => import('../views/Main'),
    redirect: '/home-comic',
    children: [
      {path: 'home-comic', name: "home-comic", component: () => import('../views/comic/HomeComic')},
      {path: 'home-video', name: "home-video", component: () => import('../views/video/HomeVideo')},
      {path: 'home-mine', name: "home-mine", component: () => import('../views/mine/HomeMine')}
    ]
  },
  {
    path: '/comic-detail/:comicId', name: "comic-detail", component: () => import('../views/comic/ComicDetail'),
    meta: {
      notKeepAlive: true
    }
  },
  {
    path: '/comic-reader/:comicId', name: "comic-reader", component: () => import('../views/comic-reader/ComicReader'),
  },
  {
    path: '/player', name: "player", component: () => import('../views/player/Player'),
  }
]

const createRouter = () =>
  new Router({
    mode: 'hash', // require service support
    base: '/app/',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    },
    routes: constantRoutes
  })

export default createRouter()
