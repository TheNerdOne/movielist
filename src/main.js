import Vue from 'vue'
import App from './App.vue'
import api from './services/api';
import VueRouter from 'vue-router'
import router from './router/index.js'
import BootstrapVue from 'bootstrap-vue'

import './assets/design/scss/main.scss';



Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false
api.init()
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
