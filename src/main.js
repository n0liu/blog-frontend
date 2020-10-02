// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import util from './utils/util'
import DefaultLayout from '~/layouts/Layout.vue'

import '~/assets/styles.css'
import store from './store/'

import token from './store/modules/token'
import user from './store/modules/user'
import configuration from './store/modules/configuration'
import getters from './store/getters'

import dayjs from 'dayjs'

export default function (Vue, { router, head, isClient , appOptions}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(ElementUI)
  Vue.use(Vuex)
  Vue.prototype.$util = util
  
  Vue.filter('date',( value, format = 'YYYY-MM-DD HH:mm:ss' ) => {
    return dayjs(value).format(format)
  })
  appOptions.store =  store

  const originalPush = appOptions.router.push
  appOptions.router.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
  }

  Vue.prototype.$share = function (message) {
    if (!message) {
        message = window.location
    } else {
        let arr = (window.location + "").split("#")
        message = arr[0] + "#" + message
    }
    if (util.copy(message)) {
        Vue.prototype.$confirm('链接已复制,去分享给好友吧!!', '分享', {
            showCancelButton: false,
            showClose: false,
            type: 'success'
        })
    } else {
        Vue.prototype.$confirm('链接复制失败,可能因为浏览器不兼容', '分享', {
            showCancelButton: false,
            showClose: false,
            type: 'warning'
        })
    }
  }
}
