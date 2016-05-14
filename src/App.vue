<template>
  <div id="app">
    <map></map>
    <pop v-if="store.terminal"></pop>
    <list v-if="store.couponList"></list>
    <nuomi v-if="store.nuomiSrc"></nuomi>
  </div>
</template>

<style>
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 0;
}
</style>

<script>
import Map from './components/map.vue'
import Pop from './components/coupon-pop.vue'
import List from './components/coupon-list.vue'
import Nuomi from './components/nuomi-frame.vue'

export default {
  components: {
    Map,
    Pop,
    List,
    Nuomi
  },
  data() {
    return {
      store: lstore
    }
  }
}
</script>
