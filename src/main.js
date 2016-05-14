import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import vueTouch from 'vue-touch'

/* eslint-disable no-new */
Vue.use(vueResource)
Vue.use(vueTouch)
window.$vm = new Vue({
  el: 'body',
  components: {
    App
  }
})
