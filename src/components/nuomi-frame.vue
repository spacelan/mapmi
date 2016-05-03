<template>
  <div id="nuomiDiv" v-show="canShow">
    <iframe id="nuomiFrame" :src="src"></iframe>
    <div id="returnButton" @click.prevent="returnToMap">返回地图</div>
  </div>
</template>

<style>
#nuomiDiv {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  background-color: #eee;
}

#nuomiFrame {
  height: 100%;
  width: 100%;
  border: 0;
}

#returnButton {
  position: absolute;
  height: 20px;
  left: 0px;
  bottom: 60px;
  border: 0;
  background-color: #aaa;
}
</style>

<script>
export default {
  data() {
    return {
      store: lstore
    }
  },
  computed: {
    src() {
      return this.store.nuomiSrc
    },
    canShow() {
      return !!this.store.nuomiSrc
    }
  },
  methods: {
    returnToMap() {
      this.store.nuomiSrc = null
    }
  }
}
</script>


