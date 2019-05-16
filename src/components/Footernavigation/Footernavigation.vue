<template>
  <footer class="footer_guide border-1px">
    <span class="guideItem">
      <span class="guideI active">
        <i class="iconfont iconxiazai45"></i>
      </span>
      <span class="active">首页</span>
    </span>
    
    <span class="guideItem">
      <span class="guideI">
        <i class="iconfont iconfenlei"></i>
      </span>
      <span class="">分类</span>
    </span >
    
    <span class="guideItem">
      <span class="guideI">
        <i class="iconfont iconzhaopian"></i>
      </span>
      <span>识物</span>
    </span>
    
    <span class="guideItem">
      <span class="guideI">
        <i class="iconfont icongouwuche2"></i>
      </span>
      <span>购物车</span>
    </span>
    
    <span class="guideItem">
      <span class="guideI">
        <i class="iconfont icongeren12"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .footer_guide
    top-border-1px(#eee)
    position fixed
    z-index 99
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
