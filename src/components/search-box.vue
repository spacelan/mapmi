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
class SearchControl extends BMap.Control {
  constructor() {
    super()
    this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT
    this.defaultOffset = new BMap.Size(map.getSize().width / 20, map.getSize().width / 20);
  }

  initialize(map) {
    let search = document.getElementById('search-box')
      // 添加DOM元素到地图中
    map.getContainer().appendChild(search)
      // 将DOM元素返回
    return search
  }
}

export default {
  data() {
    return {
      input: ''
    }
  },
  ready() {
    setTimeout(() => {
      this.ac = new BMap.Autocomplete({
        input: 'search-box',
        location: map
      });

      this.local = new BMap.LocalSearch(map, {
        onSearchComplete(rst) {
          window.target = rst.getPoi(0)
          let point = target.point
          map.centerAndZoom(point, 18)
          map.addOverlay(new BMap.Marker(point))
        }
      });

      this.ac.addEventListener('onconfirm', e => {
        let value = e.item.value
        let searchValue = value.province + value.city + value.district + value.street + value.streetNumber + value.business
        this.input = searchValue
        map.clearOverlays()
        this.local.search(searchValue)
      });

      map.addControl(new SearchControl())
    }, 0)
  },
  methods: {
    clear() {
      this.input = ''
      map.clearOverlays()
    }
  },
  watch: {
    input(val, oldVal) {
      if (val.length > 0 || val !== oldVal) {
        this.ac.search(val)
      }
    }
  }
}
</script>
