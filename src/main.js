// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import Vuefire from 'vuefire'
import { database } from '@/service/firebase'
import VueResource from 'vue-resource'

Vue.use(Vuefire)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    board: database.ref('board').orderByChild('created_at'),
    calendar: database.ref('calendar').orderByChild('created_at')
  },
  router,
  template: '<App/>',
  components: { App }
})
