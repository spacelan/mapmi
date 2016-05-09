import Vue from 'vue'
import App from './App'
import fastClick from 'fastclick'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App
  },
  ready() {
    fastClick.attach(document.body);
  }
})
