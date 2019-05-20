<template>
  <div class="GeneralThingsTitle">
    <div class="TitleContainer">
      
      <div class="left">
        <i class="iconfont iconxiazai45" @click="toPath('/homepage')"></i>
      </div>
      
      <div class="find">
        <a href="">
          网易严选
        </a>
      </div>
      
      <div class="search">
        <a href="">
          <i class="iconfont iconsousuo" @click="toPath('/search')"></i>
        </a>
        <a href="">
          <i class="iconfont icongouwuche2" @click="toPath('/theshoppingcart')"></i>
        </a>
      </div>
    
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Search',
    methods: {
      toPath (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../../common/stylus/mixin.styl'
  .GeneralThingsTitle
    width 100%
    height 100px
    position: relative;
    z-index: 99;
    background: white;
    bottom-border-2px(#f5f5f5)
    
    .TitleContainer
      width 90%
      height 100%
      margin 0 auto
      line-height 100px
      display flex
      justify-content space-between
      align-items center
      
      div
        i
          font-size 50px
      
      .find
        display flex
        justify-content space-around
        text-align center
        width 200px
        height 100%
        margin-left 60px
        
        a
          font-size 26px
          
          &:nth-child(1)
            font-size 35px
            color black

</style>
