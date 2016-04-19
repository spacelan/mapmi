<style>
#search-box {
  width: 90%;
  height: 46px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 2px 4px #aaaaaa;
}
#search-input {
  box-sizing: border-box;
  border: 0;
  padding: 10px 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  font-size: 1em;
  width: 90%;
  height: 46px;
  color: #333;
  border-radius: 2px;
  outline:none;
}
#search-clear {
  cursor: pointer;
  position: absolute;
  right: 10px;
  width: 27px;
  height: 46px;
  top: 0;
  background: url("/static/cancel.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>

<template>
<div id="search-box">
  <input id="search-input" v-model="input" type="text">
  <div id="search-clear" @click.prevent="clear" v-show="input.length > 0"></div>
</div>
</template>

<script>
module.exports = {
  data() {
    return {
      input: ''
    }
  },
  methods: {
    clear() {
      this.input = ''
    }
  }
}
</script>
