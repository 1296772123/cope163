<template>
  <div class="HomePage">
    
    <div class="positionTitle">
      
      <div class="HomeHeader">
        <div class="HeaderTop">
          <a class="logo" href="http://localhost:8081/HomePage">
            <img class="logoImag"
                 src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
                 alt="loading...">
          </a>
          
          <div class="input" @click="toPath('/search')">
            <i class="iconfont iconsousuo"></i>
            <span class="placeholder">请搜索商品</span>
          </div>
          <div class="login" @click="toPath('/personal')">登陆</div>
        </div>
      </div>
      <div class="NavContainer" v-show="pageIsshow">
        
        <ul class="NavWrap">
          <li @click="isShowActive(index)" :class="{active:index===isBottomBorder}"
              v-for="(navList,index) in navigations" :key="index">
            <span>{{navList.text}}</span>
          </li>
        </ul>
        
        <div class="handleMask">
          <i class="iconfont iconxiala" v-show="pageIsshow" @click="pageIsshow = !pageIsshow"></i>
        </div>
      </div>
      <div class="MaskContainer" v-show="!pageIsshow">
        <ul class="NavWrap">
          <li><span>全部频道</span></li>
        </ul>
        <div class="handleMask">
          <i class="iconfont iconweibiaoti33" v-if="!pageIsshow" @click="pageIsshow = !pageIsshow"></i>
        </div>
      </div>
    </div>
    <div class="MaskList" v-show="!pageIsshow">
        <span class="EachItem">
          <span>推荐</span>
        </span>
      <span class="EachItem">
          <span>居家生活</span>
        </span>
      <span class="EachItem">
          <span>服饰鞋包</span>
        </span>
      <span class="EachItem">
          <span>美食酒水</span>
        </span>
      <span class="EachItem">
          <span>个护清洁</span>
        </span>
      <span class="EachItem">
          <span>母婴亲子</span>
        </span>
      <span class="EachItem">
          <span>运动旅游</span>
        </span>
      <span class="EachItem">
          <span>数码家电</span>
        </span>
      <span class="EachItem">
          <span>全球特色</span>
        </span>
    </div>
    <div class="MaskBottom" v-show="!pageIsshow" @click="pageIsshow = !pageIsshow"></div>
    
    
    <div class="Container">
      <scroller>
        <HomeSwiper/>
        <HomeCommitment/>
        <HomeListGoods/>
        <Frame/>
        <HomeExclusive/>
        <Frame/>
        <HomeDirectSupply/>
        <Frame/>
        <HomeSellLikeHotCakes/>
        <Frame/>
        <HomeTheHotterst/>
        <Frame/>
        <HomeNowBuy/>
        <Frame/>
        <HomeNewArrival/>
        <Frame/>
        <HomeTheFourPictures/>
        <Frame/>
        <HomeBetterScroll/>
      </scroller>
    
    </div>
  
  
  </div>

</template>

<script>
  
  import BScroll from 'better-scroll'
  import HomeSwiper from '../../components/Home/HomeSwiper/HomeSwiper'
  import HomeCommitment from '../../components/Home/HomeCommitment/Commitment'
  import HomeListGoods from '../../components/Home/HomeListGoods/ListGoods'
  import HomeExclusive from '../../components/Home/HomeNewExclusive/NewExclusive'
  import HomeDirectSupply from '../../components/Home/HomedirectSupply/DirectSupply'
  import HomeSellLikeHotCakes from '../../components/Home/HomesellLikeHotCakes/SellLikeHotCakes'
  import HomeTheHotterst from '../../components/Home/HomeTheHottest/TheHottest'
  import HomeNowBuy from '../../components/Home/HomeNowBuy/NowBuy'
  import HomeNewArrival from '../../components/Home/HomeNewArrival/NewArrival'
  import HomeTheFourPictures from '../../components/Home/HomeTheFourPictures/TheFourPictures'
  import HomeBetterScroll from '../../components/Home/HomeBetterScroll/HomeBetterScroll'
  import HomeGoodsStraightFor from '../../components/Home/HomeGoodsStraightFor/GoodsStraightFor'
  
  import {mapState} from 'vuex'
  
  export default {
    name: 'HomePage',
    components: {
      HomeSwiper,
      HomeCommitment,
      HomeListGoods,
      HomeExclusive,
      HomeGoodsStraightFor,
      HomeDirectSupply,
      HomeSellLikeHotCakes,
      HomeTheHotterst,
      HomeNowBuy,
      HomeNewArrival,
      HomeTheFourPictures,
      HomeBetterScroll
    },
    data () {
      return {
        pageIsshow: true,
        isBottomBorder: 0
      }
    },
    methods: {
      toPath (path) {
        this.$router.push(path)
      },
      isShowActive (index) {
        this.isBottomBorder = index
      },
    },
    
    computed: {
      ...mapState({
        navigations: state => state.home.navigation
      })
    },
    
    async mounted () {
      let wrap = document.querySelector('.Container')
      let top = document.querySelector('.positionTitle')
      let bottom = document.querySelector('.footer_guide')
      let height = window.document.body.clientHeight - (top.clientHeight + bottom.clientHeight)
      
      console.log(top.clientHeight)
      wrap.style.height = height + 'px'
      
      this.$nextTick(() => {
        /* eslint-disable no-new */
        if (!this.Bscroll) {
          this.Bscroll = new BScroll('.NavContainer', {
            scrollX: true,
            scrollY: false,
            click: false,
          })
        } else {
          this.Bscroll.refresh()
        }
        
      })
      this.$store.dispatch('homeData')
    },
    
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .HomePage
    position relative
    top 0
    left 0
    width 100%
    height 100%
    
    .HomeContainer
      top 132px
      width 100%
      margin auto 0
    
    .positionTitle
      position fixed
      top 0
      left 0
      width 100%
      height 132px
      z-index: 20;
      background: white;
      
      .HomeHeader
        width 100%
        height 72px
        display flex
        justify-content space-around
        
        .HeaderTop
          width 100%
          height 100%
          padding: 0 20px;
          display flex
          justify-content space-around
          align-items center
          
          .iconfont
            left 16px
            top 8px
            font-size 30px
          
          .logo
            display inline-block
          
          .input
            position relative
            height 50px
            width 60%
            border-radius 10px
            background #ededed;
            display flex
            align-items center
            
            i
              padding-left 20px
            
            .placeholder
              padding-left 20px
              display: inherit;
              font-size 24px
          
          .logoImag
            width 140px
            height 40px
          
          .login
            width 100px
            height 36px
            color #b4282d
            line-height 38px
            text-align center
            font-size 24px
            border 2px solid #b4282d
            border-radius 40px
      
      .NavContainer
        float left
        width 85%
        height 60px
        display flex
        
        .NavWrap
          display flex
          justify-content center
          align-items center
          
          li
            display flex
            flex 1
            height 100%
            white-space nowrap
            text-align center
            font-size 30px
            margin 0 20px
            line-height 60px
            &.active
              bottom-border-2px(#b4282d)
            
            span
              font-size 28px
        
        
        .handleMask
          position absolute
          width 100px
          top 70px
          right 0
          background white
          text-align center
          transform rotate(0deg)
          transition all 0.8s
          
          i
            transform rotate(360deg)
            transition all 1s
            line-height 60px
            font-size 40px
            
            &.move-enter-active, &.move-leave-active
              transform all 2s
            
            &.move-enter, &.move-enter-to
              transform rotate(180deg)
      
      .MaskContainer
        position absolute
        width 100%
        z-index 10
        
        li
          display flex
          align-items center
          line-height 60px
          text-align center
          font-size 30px
          margin 0 20px
          
          span
            &.active
              bottom-border-2px(#b4282d)
        
        .handleMask
          position absolute
          width 100px
          top 0
          right 0
          background white
          text-align center
          transform rotate(0deg)
          transition all 0.8s
          
          i
            line-height 60px
            font-size 40px
            
            &.move-enter-active, &.move-leave-active
              transform all 2s
            
            &.move-enter, &.move-enter-to
              transform rotate(180deg)
    
    //.MaskList
    //width 100%
    //margin 0 auto
    //background white
    //z-index 11
    
    //.EachItem
    // margin-top 10px
    // display inline-block
    // box-sizing border-box
    // width 24%
    // padding 20px
    //font-size 26px
    //text-align center
    
    //span
    //  display inline-block
    //  width 100%
    // padding 10px 8px
    // border 1.5px solid #CCC;
    //border-radius 10px
    //background: #FAFAFA;
    
    .Container
      position relative
      top 132px
    
    .MaskBottom
      position absolute
      left 0
      z-index 3
      width 100%
      height 100%
      background: rgba(0, 0, 0, .5);
    
    .MaskList
      position absolute
      left 0
      top: 132px;
      width 100%
      margin 0 auto
      background white
      z-index 11
      
      .EachItem
        margin-top 10px
        display inline-block
        box-sizing border-box
        width 24%
        padding 20px
        font-size 26px
        text-align center
        
        span
          display inline-block
          width 100%
          padding 10px 8px
          border 1.5px solid #CCC;
          border-radius 10px
          background: #FAFAFA;


</style>
