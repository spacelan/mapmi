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
                商圈团购红包
            </div>
        </div>

        <!-- tabs -->
        <ul class="tab">
              <li id="liRest" class="cur_right" @click.prevent="changeTabForRest">美食</li>
              <li id="liMovie" class="cur_left"  @click.prevent="changeTabForMovie">电影</li>

        </ul>
        <script type="text/javascript">
        
        </script>

        <!-- index --> 

        <ul class="index">
               <li class="cur-right">综合排序 <img src="../assets/index-down.png" class="index-pic"></li>
               <li class="">筛选菜系 <img src="../assets/index-down.png" class="index-pic"</li>
        </ul>
        
        <!-- couponList -->
        <div class="main">
           
                <div class="couponList" id="tab_r">
                    <a href="http://www.daijiale.cn" target="_blank" ><div class="coupon">  
                        <div class="coupon_priceicon">￥</div>        
                        <div class="coupon_priceicon coupon_price">75</div>
                        <div class="coupon_allprice">抵100</div>                            
                        <div class="coupon_distance">距离 215 米</div>
                        <div class="coupon_title">大鸭梨</div>
                        <div class="coupon_title_tag">（西三旗店）</div>
                        <div class="coupon_info">川菜|4.5分|人均86元</div> 
                    </div></a>

                    <a href="http://www.daijiale.cn" target="_blank" ><div class="coupon">  
                        <div class="coupon_priceicon">￥</div>        
                        <div class="coupon_priceicon coupon_price">75</div>
                        <div class="coupon_allprice">抵100</div>                            
                        <div class="coupon_distance">距离 215 米</div>
                        <div class="coupon_title">大鸭梨</div>
                        <div class="coupon_title_tag">（西三旗店）</div>
                        <div class="coupon_info">川菜|4.5分|人均86元</div> 
                    </div></a>


                    <a href="http://www.daijiale.cn" target="_blank" ><div class="coupon">  
                        <div class="coupon_priceicon">￥</div>        
                        <div class="coupon_priceicon coupon_price">75</div>
                        <div class="coupon_allprice">抵100</div>                            
                        <div class="coupon_distance">距离 215 米</div>
                        <div class="coupon_title">大鸭梨</div>
                        <div class="coupon_title_tag">（西三旗店）</div>
                        <div class="coupon_info">川菜|4.5分|人均86元</div> 
                    </div></a>

                     <a href="http://www.daijiale.cn" target="_blank" ><div class="coupon">  
                        <div class="coupon_priceicon">￥</div>        
                        <div class="coupon_priceicon coupon_price">75</div>
                        <div class="coupon_allprice">抵100</div>                            
                        <div class="coupon_distance">距离 215 米</div>
                        <div class="coupon_title">大鸭梨</div>
                        <div class="coupon_title_tag">（西三旗店）</div>
                        <div class="coupon_info">川菜|4.5分|人均86元</div> 
                    </div></a>            
                </div>

                <div class="couponList hide" id="tab_m">
              
                  <!-- 电影coupon模块 -->
                </div>
        </div>

        <!-- footer -->
        <div class="footer">没有更多优惠卷了 ， <a href="" style="text-decoration: none;color:#45aaff">查看不可用</a> > </div>
</div>
  
</template>





<style type="text/css">

    .container_coupon {
        position: absolute;
        width:100%;
        height: 100%;
        margin:0 auto;/*主面板DIV居中*/
        
    }
    .hide{visibility : hidden}
    .header {
        position: relative;
        width:100%;
        float:left;
        clear:both; 
        display: inline;
        background-color: #f7f7f7;
    }
    .header_left {
        margin: 15px;
        width:10%;
       
        float:left;
        
    }
    .header_center{
        position: relative;
        margin-left: auto;
        margin-right: auto;

    }
    .header_title{
        margin-top: 15px;
        text-align: center;
        font-size: 1.2rem;
        color: rgba(14, 14, 14, 0.73);

    }    
    .header_right {
        margin: 15px;
        width:10%;
        
        float:right;
    }

    .tab{
      margin:0;
      padding:0;
      list-style:none;
      width:100%;
      background:#ccc;
      overflow:hidden;
    }
    .tab li{
      float:left;
      width:50%;
      height:35px;
      font-size: 0.9rem;
      text-align:center;
      line-height:35px;
      cursor:pointer; 
    }
    .on{display:block;}

    .tab li.cur_right{
      color:#fff;
      background:#FB7397;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }
    .tab li.cur_left{
      color:rgba(14, 14, 14, 0.73);
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }
    .index{
      margin:0;
      padding:0;
      list-style:none;
      width:100%;
      background:#fff;
      overflow:hidden;
      border-bottom:1px solid rgba(41, 39, 39, 0.29);
    }
    .index li{
      float:left;
      width:50%;
      height:35px;
      font-size: 0.9rem;
      color:rgba(80, 77, 77, 0.76);
      text-align:center;
      line-height:35px;
      cursor:pointer; 
    }

    .index-pic{
      width: 12px;
      height:6px;
      top: -2px;
      position:relative;
    }


    .main {
        width:100%;
        float:left;
        clear:both; 
        background-color:#ececec;
    } 
    .couponList{
         width:90%;
         margin:auto;
         margin-top: 20px;
         margin-bottom: 20px;
    }
    .coupon{
         width:100%;
         margin:auto;
         height:105px;
         background-image: url(../assets/coupon.png);
         background-repeat: no-repeat;
         border-radius:8px;
         margin-bottom: 20px;
         box-shadow: 1px 2px 1px #B5B1B1;
    }
    .coupon_priceicon{
        position: absolute;
        float: left;
        margin-left: 15px;
        margin-top: 40px;
        font-size:1.4rem;
        color:#fff;
    }
    .coupon_price{
        position: absolute;
        float: left;
        margin-left: 35px;
        margin-top: 25px;
        font-size:2.5rem;
        color:#fff;
    }
    .coupon_allprice{
        position: absolute;
        float: left;
        margin-left: 78px;
        margin-top: 44px;
        font-size:0.2rem;
        color:rgba(255, 247, 247, 0.92);
    }
    .coupon_distance{
        position: absolute;
        float: left;
        margin-left: 30px;
        margin-top: 85px;
        font-size:0.2rem;
        color:rgba(255, 247, 247, 0.92);
    }
    .coupon_title{
        position: absolute;
        margin-left: 138px;
        margin-top: 10px;
        font-size:1.6rem;
        color:#000;

    }
    .coupon_title_tag{
        position: absolute;
        margin-left: 135px;
        margin-top: 45px;
        font-size:0.8rem;
        color:#000;

    }
    .coupon_info{
        position: absolute;
        margin-left: 138px;
        margin-top: 65px;
        font-size:0.2rem;
        color:#8C8989;

    }
   .footer {
        width:100%;
        float:left;
        clear:both; 
        text-align: center;
        height: 100%;
        background-color:#ececec;
        color:#8C8A8A;
       
    }

</style>


<script>
export default {
  data() {
    return {
      
    }
  },

  computed: {
    
  },

	methods: {
    changeTabForRest()
         {
             document.getElementById("tab_r").style.visibility='visible';
             document.getElementById("tab_m").style.visibility='hidden';
             document.getElementById("liRest").style.background ='#FB7397';
             document.getElementById("liMovie").style.background ='#ccc';
             document.getElementById("liMovie").style.color ='rgba(14, 14, 14, 0.73)';   
             document.getElementById("liRest").style.color ='#fff';

         },
    changeTabForMovie()
         {
             document.getElementById("tab_r").style.visibility ='hidden';
             document.getElementById("tab_m").style.visibility ='visible';
             document.getElementById("liMovie").style.background ='#FB7397';
             document.getElementById("liRest").style.background ='#ccc';  
             document.getElementById("liMovie").style.color ='#fff';
             document.getElementById("liRest").style.color ='rgba(14, 14, 14, 0.73)';         
          },
	},
	ready() {
		
	},

  watch: {
  //  'store.arrivePoint'(val) {
  //    if(!val) {

  //    }
  //  },

  }
}
</script>
  

