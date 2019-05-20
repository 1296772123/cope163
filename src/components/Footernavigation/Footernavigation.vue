<template>
  <footer class="footer_guide border-1px">
    <span class="guideItem" @click="toPath('/homepage')">
      <span class="guideI" :class="{active:$route.path==='/homepage'}">
        <i class="iconfont iconxiazai45"></i>
      </span>
      <span :class="{active:$route.path === '/homepage'}">首页</span>
    </span>
    
    <span class="guideItem" @click="toPath('/classification')">
      <span class="guideI" :class="{active:$route.path==='/classification'}">
        <i class="iconfont iconfenlei"></i>
      </span>
      <span :class="{active:$route.path === '/classification'}">分类</span>
    </span>
    
    <span class="guideItem" @click="toPath('/generalthings')">
      <span class="guideI" :class="{active:$route.path==='/generalthings'}">
        <i class="iconfont iconzhaopian"></i>
      </span>
      <span :class="{active:$route.path === '/generalthings'}">识物</span>
    </span>
    
    <span class="guideItem" @click="toPath('/theshoppingcart')">
      <span class="guideI" :class="{active:$route.path==='/theshoppingcart'}">
        <i class="iconfont icongouwuche2"></i>
      </span>
      <span :class="{active:$route.path === '/theshoppingcart'}">购物车</span>
    </span>
    
    <span class="guideItem" @click="toPath('/personal')">
      <span class="guideI" :class="{active:$route.path==='/personal'}">
        <i class="iconfont icongeren12"></i>
      </span>
      <span :class="{active:$route.path === '/personal'}">个人</span>
    </span>
  </footer>
</template>

<script>
  export default {
    methods: {
      toPath (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .footer_guide
    top-border-1px(#333)
    position fixed
    z-index 1
    bottom 0
    left 0
    background-color white
    width 100%
    height 100px
    display flex
    
    .guideItem
      display flex
      flex 1
      justify-content center
      flex-direction column
      align-items center
      margin 10px
      
      span
        font-size 24px
      
      .active
        color #b4282d
      
      .iconfont
        font-size 40px
</style>
