<template>
  <div id="nuomiView">
    <div id="frameContainer">
      <iframe id="nuomiFrame" :src="src"></iframe>
    </div>
    <div id="returnButton" v-touch:tap="returnToMap">＜＜返回地图&nbsp</div>
  </div>
</template>

<style>
#frameContainer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  -webkit-overflow-scrolling: touch;
  overflow: scroll;
  background-color: #eee;
}

#nuomiFrame {
  width: 1px;
  height: 1px;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
}

#returnButton {
  position: absolute;
  left: 0px;
  bottom: 100px;
  line-height: 25px;
  cursor: pointer;
  color: #fff;
  background-color: #3385ff;
  border-radius: 0 25px 25px 0;
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
  attached() {
    let discount = 5
    let privilegeHtml = `<div class="privilege-list"><div class="privilege-item" mon="area=privilegeList"><a href="javascript:;" class="fake-icon" mon="position=1"><em class="text">地图红包减${discount}元</em></a></div></div>`
    // let fakeIcon = `<a href="javascript:;" class="fake-icon" mon="position=0"><em class="text">地图红包减${discount}元</em></a>`
    let frame = document.getElementById('nuomiFrame')
    frame.onload = frame.onreadystatechange = () => {
      setTimeout(() => {
        let privilege = frame.contentDocument.getElementById('j-detail-privilege')
        privilege.setAttribute('id', 'j-detail-privilege0')
        privilege.innerHTML = privilegeHtml

        let buySegment = frame.contentDocument.getElementsByClassName('buy-segment')[0]

        if (buySegment.children[0].getAttribute('class') === 'current-price') {
          buySegment.children[0].children[0].innerText = (buySegment.children[0].children[0].innerText - discount).toString().match(/\d+(.\d\d?)?/)[0]
        } else {
          let oldCurrentPrice = buySegment.children[0].children[0].innerText
          let buyBtn = buySegment.children[2].children[0]
          buyBtn.children[0].children[1].children[0].innerText = (oldCurrentPrice - discount).toString().match(/\d+(.\d\d?)?/)[0]
        }
      }, 1000)
    }
  }
}
</script>


