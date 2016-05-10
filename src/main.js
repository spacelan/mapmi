import Vue from 'vue'
import App from './App'
import fastClick from 'fastclick'
import vueResource from 'vue-resource'

/* eslint-disable no-new */
Vue.use(vueResource)
window.$vm = new Vue({
  el: 'body',
  components: {
    App
  },
  ready() {
    fastClick.attach(document.body);
  }
})
