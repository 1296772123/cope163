<template>
  
  <div class="DirectSupply">
    <div class="DireCtTitle">
      <span>品牌制造商直供</span>
      <span>
        更多
        <i class="iconfont iconyoujiantou"></i>
      </span>
    </div>
    <div class="DireCtImage">
      
      <a
        v-for="(presonalShops ,index) in personalshop"
        :key="presonalShops.id"
        :href="presonalShops.listPicUrl"
        :style="{backgroundImage:'url('+presonalShops.webIndexVerticalPicUrl+')'}"
      >
        
        <h3>{{presonalShops.name}}</h3>
        <h4>{{presonalShops.floorPrice}}元起步</h4>
      
      </a>
    
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    name: 'DirectSupply',
    computed: {
      ...mapState({
        personalshop: state => state.home.personalshop
      })
    }
    
  }
</script>

<style lang="stylus" scoped>
  @import '../../../common/stylus/mixin.styl'
  .DirectSupply
    position relative
    width 95%
    height 555px
    margin 0 auto
    border-radius 10px
    overflow: hidden;
    box-sizing border-box
    
    .DireCtTitle
      width 100%
      height 80px
      line-height 80px
      
      span
        font-size 30px
        
        &:nth-child(2)
          float right
          font-size 30px
          color #333333
      
      i
        font-size 30px
    
    .DireCtImage
      position absolute
      top 60px
      width 100%
      height 495px
      overflow hidden
      padding 0 15px 20px 10px
      
      a
        text-align center
        float left
        width 50%
        height 50%
        box-sizing border-box
        border: 10px solid white;
        background-size 100% 100%
        background-position bottom
        
        h4
          color gray
</style>
