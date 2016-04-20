<template>
  <div id="geolocation">
    <img id="geo-default" class="geo-icon" src="../assets/loc-default.png">
    <img id="geo-loading" class="geo-icon" src="../assets/loc-loading.gif">
    <img id="geo-success" class="geo-icon" src="../assets/loc-success.png">
  </div>
</template>

<style>
#geolocation {
  width: 32px;
  height: 32px;
  cursor: pointer;
  background: #fff;
  box-shadow: 0px 2px 4px #aaaaaa;
  border-radius: 2px;
}
.geo-icon {
  width: 28px;
  height: 28px;
  position: absolute;
  top: 2px;
  left: 2px;
}
</style>

<script>
class GeoControl extends BMap.Control {
  constructor() {
    super()
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
    this.defaultOffset = new BMap.Size(30, 80);
  }

  initialize(map) {
    let geo = document.getElementById('geolocation')
      // 添加DOM元素到地图中
    map.getContainer().appendChild(geo)
      // 将DOM元素返回
    return geo
  }
}

export default {
  ready() {
    setTimeout(() => {
      map.addControl(new GeoControl())
    }, 0)
  }
}
</script>
