<template>
  <div class="container_coupon">
    <!-- header -->
    <div class="headerfix">
      <div class="header">
        <div class="header_left" v-touch:tap="backTopop">
          <img src="../assets/header_back.png" style="width:15px;height: 20px">
        </div>
        <div class="header_right ">
          <img src="../assets/header_search.png" style="width:25px;height: 20px">
        </div>
        <div class="header_center header_title">
          {{header_title}}
        </div>
      </div>
      <!-- tabs -->
      <ul class="tab">
        <li id="liRest" class="cur_rest" v-touch:tap="changeTabForMovie">{{tab_r}}</li>
        <li id="liMovie" class="cur_movie" v-touch:tap="changeTabForRest">{{tab_m}}</li>
      </ul>
      <!-- index -->
      <ul class="index">
        <li class="cur-right">{{index_z}}<img src="../assets/index-down.png" class="index-pic"></li>
        <li class="">{{index_s}}<img src="../assets/index-down.png" class="index-pic"></li>
      </ul>
    </div>
    <!-- couponList -->
    <div class="couponList" id="tab_rest" v-if="foodOrMovie=='food'">
      <template v-for="coupon in store.couponList">
        <div class="coupon" v-touch:tap="toNuomi(coupon.deal_murl)">
          <div class="coupon_priceicon">￥</div>
          <div class="coupon_priceicon coupon_price">{{(coupon.current_price/100 - 5) | toFixed2}}</div>
          <div class="coupon_allprice">抵{{(coupon.market_price/100) | toFixed2}}</div>
          <div class="coupon_distance">距离 {{coupon.distance}}米</div>
          <div class="coupon_title">{{coupon.title}}</div>
          <div class="coupon_title_tag">{{coupon.min_title}}</div>
          <div class="coupon_info">口碑：{{coupon.score}}分 | 人均：{{(coupon.current_price/100+8) | toFixed2}}元</div>
        </div>
      </template>
    </div>
    <div class="couponList" id="tab_movie" v-if="foodOrMovie=='movie'">
      <template v-for="movieArray in movieArrays">
        <div class="coupon" v-touch:tap="toNuomi(movieArray.dear_murl)">
          <div class="coupon_priceicon">￥</div>
          <div class="coupon_priceicon_movie coupon_price_movie">{{movieArray.current_price/100}}</div>
          <div class="coupon_distance">距离 {{movieArray.distance}}米</div>
          <div class="coupon_title">{{movieArray.title}}</div>
          <div class="coupon_title_tag">{{movieArray.title_tag}}</div>
          <div class="coupon_info">{{movieArray.tag}} | {{movieArray.score}}分 | 人均{{movieArray.current_price/100+8}}元</div>
        </div>
      </template>
      <div class="footer">没有更多优惠券了 ，
        <div style="color:#45aaff;display:inline">查看不可用</div> > </div>
    </div>
  </div>
</template>
<style scoped>
.container_coupon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ececec;
  overflow: hidden;
}

.header {
  position: relative;
  width: 100%;
  float: left;
  clear: both;
  display: inline;
  background-color: #f7f7f7;
}

.headerfix {
  position: relative;
  width: 100%;
  height: 145px;
  float: left;
  clear: both;
  display: inline;
  background-color: #f7f7f7;
}

.header_left {
  margin-top: 28px;
  margin-left: 20px;
  width: 10%;
  float: left;
}

.header_center {
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

.header_title {
  margin-top: 28px;
  margin-bottom: 20px;
  width: 60%;
  text-align: center;
  font-size: 1.2rem;
  color: rgba(14, 14, 14, 0.73);
}

.header_right {
  margin-left: 20px;
  margin-top: 28px;
  width: 10%;
  float: right;
}

.tab {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  background: #ccc;
  overflow: hidden;
}

.tab li {
  float: left;
  width: 50%;
  height: 35px;
  font-size: 0.9rem;
  text-align: center;
  line-height: 35px;
  cursor: pointer;
}

.on {
  display: block;
}

.tab li.cur_rest {
  color: #fff;
  background: #FB7397;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}

.tab li.cur_movie {
  color: rgba(14, 14, 14, 0.73);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.index {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  background: #fff;
  overflow: hidden;
  border-bottom: 1px solid rgba(41, 39, 39, 0.29);
}

.index li {
  float: left;
  width: 50%;
  height: 35px;
  font-size: 0.9rem;
  color: rgba(80, 77, 77, 0.76);
  text-align: center;
  line-height: 35px;
  cursor: pointer;
}

.index-pic {
  width: 12px;
  height: 6px;
  top: -2px;
  position: relative;
}

.couponList {
  position: absolute;
  top: 140px;
  width: 100%;
  bottom: 0;
  background-color: #ececec;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

ul {
  padding: 0;
}

.coupon {
  width: 337px;
  height: 105px;
  background-image: url(../assets/coupon.png);
  background-size: 337px 105px;
  background-repeat: no-repeat;
  border-radius: 8px;
  margin: 10px auto;
  box-shadow: 1px 2px 1px #B5B1B1;
}

.coupon_priceicon_movie {
  position: absolute;
  float: left;
  margin-left: 15px;
  margin-top: 40px;
  font-size: 1.4rem;
  color: #fff;
}

.coupon_priceicon {
  position: absolute;
  float: left;
  margin-left: 12px;
  margin-top: 26px;
  font-size: 1.2rem;
  color: #fff;
}

.coupon_price_movie {
  position: absolute;
  float: left;
  margin-left: 35px;
  margin-top: 15px;
  font-size: 2.5rem;
  color: #fff;
}

.coupon_price {
  position: absolute;
  float: left;
  margin-left: 30px;
  margin-top: 15px;
  font-size: 2.1rem;
  color: #fff;
}

.coupon_allprice {
  position: absolute;
  float: left;
  margin-left: 65px;
  margin-top: 54px;
  font-size: 0.9rem;
  color: rgba(255, 247, 247, 0.92);
}

.coupon_distance {
  position: absolute;
  float: left;
  margin-left: 28px;
  margin-top: 85px;
  font-size: 0.7rem;
  color: rgba(255, 247, 247, 0.92);
}

.coupon_title {
  position: absolute;
  margin-left: 134px;
  margin-top: 10px;
  font-size: 1.6rem;
  width: 200px;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.coupon_title_tag {
  position: absolute;
  margin-left: 135px;
  margin-top: 45px;
  font-size: 1.0rem;
  width: 210px;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.coupon_info {
  position: absolute;
  margin-left: 138px;
  margin-top: 65px;
  font-size: 0.8rem;
  color: #8C8989;
}

.footer {
  position: relative;
  width: 100%;
  bottom: 0px;
  text-align: center;
  color: #8C8A8A;
}
</style>
<script>
export default {
  data() {
    return {
      header_title: '商圈团购红包',
      tab_r: '美食',
      tab_m: '电影',
      index_z: '综合排序',
      index_s: '分类筛选',

      // 接口示例
      movieArrays: [{
        current_price: '11100',
        market_price: '11100',
        distance: '80',
        title: '美国队长',
        title_tag: '美嘉欢乐影城',
        score: '9.0',
        tag: '科幻 动作',
        dear_murl: 'https://mdianying.baidu.com/info/cinema/detail?cinemaId=135&sfrom=newnuomi&source=nuomi&subchannel=nuominashare'
      }, {
        current_price: '12300',
        market_price: '12300',
        distance: '120',
        title: '奇幻森林',
        title_tag: '美嘉欢乐影城',
        score: '9.1',
        tag: '冒险 奇幻',
        dear_murl: 'https://mdianying.baidu.com/info/cinema/detail?cinemaId=135&sfrom=newnuomi&source=nuomi&subchannel=nuominashare'
      }, {
        current_price: '7100',
        market_price: '7100',
        distance: '105',
        title: '北京遇上西雅图2',
        title_tag: '美嘉欢乐影城',
        score: '8.6',
        tag: '爱情 喜剧',
        dear_murl: 'https://mdianying.baidu.com/info/cinema/detail?cinemaId=135&sfrom=newnuomi&source=nuomi&subchannel=nuominashare'
      }],
      store: lstore,
      foodOrMovie: 'food'
    }
  },
  methods: {
    changeTabForRest() {
      this.foodOrMovie = 'movie'
      document.getElementById('liMovie').style.background = '#FB7397'
      document.getElementById('liRest').style.background = '#ccc'
      document.getElementById('liMovie').style.color = '#fff'
      document.getElementById('liRest').style.color = 'rgba(14, 14, 14, 0.73)'
    },
    changeTabForMovie() {
      this.foodOrMovie = 'food'
      document.getElementById('liRest').style.background = '#FB7397'
      document.getElementById('liMovie').style.background = '#ccc'
      document.getElementById('liMovie').style.color = 'rgba(14, 14, 14, 0.73)'
      document.getElementById('liRest').style.color = '#fff'
    },
    toNuomi(url) {
      this.store.nuomiSrc = url
    },
    backTopop() {
      this.store.couponList = null;
    }
  },
  filters: {
    toFixed2(val) {
      let rst = val.toString().match(/\d+(.\d\d?)?/)
      return rst ? rst[0] : val
    }
  }
}
</script>
