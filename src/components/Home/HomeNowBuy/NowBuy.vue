<template>
  <div class="HomeNowBuyu">
    <div class="HomeBuyTitle">
      <span>限时购</span>
      <span>更多<i class="iconfont iconyoujiantou"></i></span>
      <span class="Time">00</span> : <span class="Time">00</span> : <span class="Time">00</span>
    </div>
    <ul class="BuyList">
      <li class="BuyItem" v-for="item in itemList" :key="item.itemId">
        <a href="">
          <img
            :src="item.picUrl"
            alt="">
          <div>
            <span>￥{{item.activityPrice}}</span>
            <del>￥{{item.originPrice}}</del>
          </div>
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    name: 'TheHottest',
    computed: {
      ...mapState({
        itemList: state => state.home.flashsalemodule
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .HomeNowBuyu
    width 95%
    height 600px
    margin 0 auto
    
    .HomeBuyTitle
      height 80px
      line-height 80px
      
      span
        &:nth-child(1)
          float left
          font-size 30px
        
        &:nth-child(2)
          float right
          font-size 30px
      
      .Time
        margin-left 10px
        background black
        color white
      
      i
        font-size 30px
    
    .BuyList
      float left
      width 100%
      height 520px
      font-size 0
      
      li
        display inline-block
        width 33.333%
        height 50%
        
        a
          width 100%
          height 100%
          display inline-block
          
          img
            background-color #F5F5F5
            margin 0 auto
            width 90%
            height 80%
          
          div
            width 100%
            height 20%
            
            span
              vertical-align middle
              color #B4282D
              font-size 30px
            
            del
              vertical-align middle
              font-size 25px
</style>
