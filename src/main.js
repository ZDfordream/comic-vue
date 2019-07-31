import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import './assets/css/common.scss'
// 移动端适配
import 'lib-flexible/flexible.js'
import App from './App'
import store from './store'
import router from './router'
import httpUtils from './utils/http'
// 解决移动端click事件300毫秒延迟方法
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'vant/lib/index.css';

import {
  Tabbar,
  TabbarItem,
  Icon,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Image
} from 'vant'

Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Image);

Vue.use(VueLazyload)

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      FastClick.attach(document.body)
    },
    false
  )
}
Vue.config.productionTip = false

Vue.prototype.http = httpUtils;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
