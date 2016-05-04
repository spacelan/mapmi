<template>
  <div id="nuomiDiv" v-show="canShow"> 
    <div id="frameDiv">
      <!--<div id="nuomiHeader"></div>-->
      <iframe id="nuomiFrame" :src="src" scrolling="no"></iframe>
    </div>
    <div id="returnButton" @click.prevent="returnToMap">返回地图</div>
  </div>
</template>

<style>
#frameDiv {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-overflow-scrolling: touch;
  overflow: scroll;
  background-color: #eee;
}

#nuomiHeader {
  width: 100%;
  height: 2%;
  background-color: #ff4683;
}

#nuomiFrame {
  width: 1px;
  min-width: 100%;
  height: 1px;
  min-height: 100%;
}

#returnButton {
  position: absolute;
  left: 0px;
  bottom: 100px;
  width: 100px;
  height: 25px;
  cursor: pointer;
  color: #fff;
  background-color: #3385ff;
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
  },
  ready() {
    /*
    let discount = 10
    let privilegeHtml = `<div class="privilege-list"><div class="privilege-item" mon="area=privilegeList"><a href="javascript:;" class="fake-icon" mon="position=1"><em class="text">地图红包减${discount}元</em></a></div></div>`
    let fakeIcon = `<a href="javascript:;" class="fake-icon" mon="position=0"><em class="text">地图红包减${discount}元</em></a>`
    let frame = document.getElementById('nuomiFrame')
    frame.onload = frame.onreadystatechange = () => {
      setTimeout(() => {
        let privilege = frame.contentDocument.getElementById('j-detail-privilege')
        if (privilege.children[0]) {
          privilege.children[0].children[0].innerHTML = fakeIcon + privilege.children[0].children[0].innerHTML
        } else {
          privilege.innerHTML = privilegeHtml
        }

        let buySegment = frame.contentDocument.getElementsByClassName('buy-segment')[0]

        if (buySegment.children[0].getAttribute('class') === 'current-price') {
          buySegment.children[0].children[0].innerText -= discount
        } else {
          let buyBtn = buySegment.children[2].children[0]
          buyBtn.children[0].children[1].children[0].innerText -= discount
        }
      }, 1000)
    }
    */
    this.store.nuomiSrc = 'http://m.nuomi.com/bj/deal/cz1r1mkc'
  }
}
</script>


