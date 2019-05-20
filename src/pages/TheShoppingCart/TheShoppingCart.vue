<template>
  <div class="TheShoppingCart">
    <div class="ShoppingCart">
      <div class="Left">
        <span>购物车</span>
      </div>
      <div class="Right">
        <span>领券</span>
      </div>
    </div>
    <div class="Container">
      <div class="welfare">
        <ul>
          <li><i class="iconfont icondian"></i>30天无忧退货</li>
          <li><i class="iconfont icondian"></i>48小时快速退款</li>
          <li><i class="iconfont icondian"></i>满88元免邮费</li>
        </ul>
      </div>
      
      <div class="shoppingCart">
        <i class="iconfont icongouwuche2"></i>
        <span>去添加点什么吧</span>
      
      </div>
      
      <div class="Login" @click="toPath('/personal')">登陆</div>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'TheShoppingCart',
    methods:{
      toPath(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .TheShoppingCart
    width 100%
    height 100%
    
    .ShoppingCart
      position relative
      width 95%
      height 100px
      margin 0 auto
      line-height 100px
      
      .Left
        position absolute
        left 0
        font-size 35px
      
      .Right
        position absolute
        right 0
        color #B4282D
        font-size 30px
    
    .Container
      position relative
      width 100%
      height 100%
      background-color #f4f4f4
      
      .welfare
        width 95%
        height 60px
        margin 0 auto
        line-height 59px
        
        ul
          text-align center
          display flex
          justify-content space-around
          
          li
            display flex
            align-items center
            
            i
              font-size 35px
      
      .shoppingCart
        position absolute
        top 50%
        left 50%
        margin-left -100px
        margin-top -125px
        width 200px
        height 250px
        text-align center
        
        i
          color #b4282d
          font-size 200px
      
      .Login
        position absolute
        bottom 30%
        left 50%
        margin-left -150px
        width 300px
        height 80px
        background-color #b4282d
        
        text-align center
        line-height 80px
        font-size 40px
        color white
</style>
