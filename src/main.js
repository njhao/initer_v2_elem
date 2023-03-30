import Vue from 'vue'
import App from './App.vue'

import Cookies from 'js-cookie'

Vue.config.productionTip = false

import Element from 'element-ui'
import './assets/styles/element-variables.scss'

import '@/assets/styles/index.scss'

// icon
import './assets/icons' // icon


import router from '@/router'
import store from "@/store";

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
