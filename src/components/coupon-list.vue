<template>
  <div class="container_coupon">
    <!-- header -->
    <div class="header">
      <div class="header_left">
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
      <li id="liRest" class="cur_right" v-touch:tap="changeTabForRest">{{tab_r}}</li>
      <li id="liMovie" class="cur_left" v-touch:tap="changeTabForMovie">{{tab_m}}</li>
    </ul>
    <script type="text/javascript">
    </script>
    <!-- index -->
    <ul class="index">
      <li class="cur-right">{{index_z}}<img src="../assets/index-down.png" class="index-pic"></li>
      <li class="">{{index_s}}<img src="../assets/index-down.png" class="index-pic"></li>
    </ul>
    <!-- couponList -->
    <div class="main">
      <div class="couponList" id="tab_rest">
        <ul v-for="coupon in store.couponList">
            <div class="coupon" v-touch:tap="toNuomi(coupon.deal_murl)">
              <div class="coupon_priceicon">￥</div>
              <div class="coupon_priceicon coupon_price">{{coupon.current_price/100}}</div>
              <div class="coupon_allprice">抵{{coupon.market_price/100}}</div>
              <div class="coupon_distance">距离 {{coupon.distance}}米</div>
              <div class="coupon_title">{{coupon.title}}</div>
              <div class="coupon_title_tag">{{coupon.min_title}}</div>
              <div class="coupon_info">{{标签}} | {{coupon.score}}分 | 人均{{coupon.current_price/100+8}}元</div>
            </div>
        </ul>
      </div>
      <div class="couponListhide" id="tab_movie">
        <ul v-for="movieArray in movieArrays">
          <a href={{movieArray.dear_murl}} target="_blank">
            <div class="coupon">
              <div class="coupon_priceicon">￥</div>
              <div class="coupon_priceicon coupon_price">{{movieArray.current_price/100}}</div>
              <div class="coupon_distance">距离 {{movieArray.distance}}米</div>
              <div class="coupon_title">{{movieArray.title}}</div>
              <div class="coupon_title_tag">{{movieArray.title_tag}}</div>
              <div class="coupon_info">{{movieArray.tag}} | {{movieArray.score}}分 | 人均{{movieArray.current_price/100+8}}元</div>
            </div>
          </a>
        </ul>
        <div class="footer">没有更多优惠券了 ， <a href="" style="text-decoration: none;color:#45aaff">查看不可用</a> > </div>
      </div>
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
}

.hide {
  visibility: hidden;
}

.header {
  position: relative;
  width: 100%;
  float: left;
  clear: both;
  display: inline;
  background-color: #f7f7f7;
}

.header_left {
  margin: 15px;
  width: 10%;
  float: left;
}

.header_center {
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

.header_title {
  margin-top: 15px;
  text-align: center;
  font-size: 1.2rem;
  color: rgba(14, 14, 14, 0.73);
}

.header_right {
  margin: 15px;
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

.tab li.cur_right {
  color: #fff;
  background: #FB7397;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}

.tab li.cur_left {
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

.main {
  width: 100%;
  float: left;
  clear: both;
  background-color: #ececec;
}

.couponList {
  position: absolute;
  width: 90%;
  top: 25%;
  left: 5%;
  background-color: #ececec;
}

ul {
  padding: 0;
}

.couponListBackground {
  width: 100%;
  position: absolute;
  background-color: #ececec;
}

.couponListhide {
  position: absolute;
  width: 90%;
  top: 25%;
  left: 5%;
  margin-bottom: 20px;
  visibility: hidden;
}

.coupon {
  width: 100%;
  margin: auto;
  height: 105px;
  background-image: url(../assets/coupon.png);
  background-repeat: no-repeat;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 1px 2px 1px #B5B1B1;
}

.coupon_priceicon {
  position: absolute;
  float: left;
  margin-left: 15px;
  margin-top: 40px;
  font-size: 1.4rem;
  color: #fff;
}

.coupon_price {
  position: absolute;
  float: left;
  margin-left: 35px;
  margin-top: 25px;
  font-size: 2.5rem;
  color: #fff;
}

.coupon_allprice {
  position: absolute;
  float: left;
  margin-left: 78px;
  margin-top: 44px;
  font-size: 1.0rem;
  color: rgba(255, 247, 247, 0.92);
}

.coupon_distance {
  position: absolute;
  float: left;
  margin-left: 30px;
  margin-top: 85px;
  font-size: 1.0rem;
  color: rgba(255, 247, 247, 0.92);
}

.coupon_title {
  position: absolute;
  margin-left: 134px;
  margin-top: 10px;
  font-size: 1.6rem;
  color: #000;
}

.coupon_title_tag {
  position: absolute;
  margin-left: 135px;
  margin-top: 45px;
  font-size: 1.0rem;
  color: #000;
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

        //接口示例
        restArrays: [{
          current_price: '2900',
          market_price: '4600',
          distance: '100',
          title: '必胜客',
          title_tag: '三里屯店',
          score: '4.01',
          tag: '检索标签',
          dear_murl: 'http://www.nuomi.com/cps/redirect?cid=openapi&app_id=78537b4acb7ee64a1759840229084ce2&url=http%3A%2F%2Fm.nuomi.com%2Fbj%2Fdeal%2Fwdwzdpxs',

        }, {
          current_price: '5000',
          market_price: '4700',
          distance: '80',
          title: '海底捞',
          title_tag: '三里屯店',
          score: '3.5',
          tag: '检索标签',
          dear_murl: 'http://www.nuomi.com/cps/redirect?cid=openapi&app_id=78537b4acb7ee64a1759840229084ce2&url=http%3A%2F%2Fm.nuomi.com%2Fbj%2Fdeal%2Fwdwzdpxs',
        }, {
          current_price: '5000',
          market_price: '4700',
          distance: '80',
          title: '海底捞',
          title_tag: '三里屯店',
          score: '3.5',
          tag: '检索标签',
          dear_murl: 'http://www.nuomi.com/cps/redirect?cid=openapi&app_id=78537b4acb7ee64a1759840229084ce2&url=http%3A%2F%2Fm.nuomi.com%2Fbj%2Fdeal%2Fwdwzdpxs',
        }, {
          current_price: '5000',
          market_price: '4700',
          distance: '80',
          title: '海底捞',
          title_tag: '三里屯店',
          score: '3.5',
          tag: '检索标签',
          dear_murl: 'http://www.nuomi.com/cps/redirect?cid=openapi&app_id=78537b4acb7ee64a1759840229084ce2&url=http%3A%2F%2Fm.nuomi.com%2Fbj%2Fdeal%2Fwdwzdpxs',
        }, {
          current_price: '5000',
          market_price: '4700',
          distance: '80',
          title: '海底捞',
          title_tag: '三里屯店',
          score: '3.5',
          tag: '检索标签',
          dear_murl: 'http://www.nuomi.com/cps/redirect?cid=openapi&app_id=78537b4acb7ee64a1759840229084ce2&url=http%3A%2F%2Fm.nuomi.com%2Fbj%2Fdeal%2Fwdwzdpxs',
        }, {
          current_price: '5000',
          market_price: '4700',
          distance: '80',
          title: '海底捞',
          title_tag: '三里屯店',
          score: '3.5',
          tag: '检索标签',
          dear_murl: 'http://www.nuomi.com/cps/redirect?cid=openapi&app_id=78537b4acb7ee64a1759840229084ce2&url=http%3A%2F%2Fm.nuomi.com%2Fbj%2Fdeal%2Fwdwzdpxs',
        }, ],

        //接口示例
        movieArrays: [

          {
            current_price: '11100',
            market_price: '11100',
            distance: '80',
            title: '美国队长',
            title_tag: '美嘉欢乐影城',
            score: '9.0',
            tag: '科幻 动作',
            dear_murl: 'https://mdianying.baidu.com/info/cinema/detail?cinemaId=135&sfrom=newnuomi&source=nuomi&subchannel=nuominashare',
          }, {
            current_price: '12300',
            market_price: '12300',
            distance: '120',
            title: '奇幻森林',
            title_tag: '美嘉欢乐影城',
            score: '9.1',
            tag: '冒险 奇幻',
            dear_murl: 'https://mdianying.baidu.com/info/cinema/detail?cinemaId=135&sfrom=newnuomi&source=nuomi&subchannel=nuominashare',
          }, {
            current_price: '7100',
            market_price: '7100',
            distance: '105',
            title: '北京遇上西雅图2',
            title_tag: '美嘉欢乐影城',
            score: '8.6',
            tag: '爱情 喜剧',
            dear_murl: 'https://mdianying.baidu.com/info/cinema/detail?cinemaId=135&sfrom=newnuomi&source=nuomi&subchannel=nuominashare',
          },
        ],
        store: lstore
      }
    },
    methods: {
      changeTabForRest() {
        document.getElementById("tab_rest").style.visibility = 'visible';
        document.getElementById("tab_movie").style.visibility = 'hidden';
        document.getElementById("liRest").style.background = '#FB7397';
        document.getElementById("liMovie").style.background = '#ccc';
        document.getElementById("liMovie").style.color = 'rgba(14, 14, 14, 0.73)';
        document.getElementById("liRest").style.color = '#fff';

      },
      changeTabForMovie() {
        document.getElementById("tab_rest").style.visibility = 'hidden';
        document.getElementById("tab_movie").style.visibility = 'visible';
        document.getElementById("liMovie").style.background = '#FB7397';
        document.getElementById("liRest").style.background = '#ccc';
        document.getElementById("liMovie").style.color = '#fff';
        document.getElementById("liRest").style.color = 'rgba(14, 14, 14, 0.73)';
      },
      toNuomi(url) {
        this.store.nuomiSrc = url
      }
    }
}
</script>
