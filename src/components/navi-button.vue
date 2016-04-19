<style>
#navi-button {
	background-image: ;
  background-color: #2e77e5;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  overflow: hidden;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>

<template>
	<div id="navi-button" @click.prevent="click">导航</div>
</template>

<script>
export default {
  methods: {
    click () {
      alert('开始导航')
    }
  }
};
</script>
