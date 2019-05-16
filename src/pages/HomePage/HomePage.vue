<template>
  <section class="HomePage">
    
    <div class="HomeHeader">
      <div class="HeaderTop">
        <a class="logo" href="http://localhost:8081/HomePage">
          <img class="logoImag"
               src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
               alt="loading...">
        </a>
        
        <div class="input" type="text">
          <i class="iconfont iconsousuo"></i>
          <span class="placeholder">请搜索商品</span>
        </div>
        <div class="login">登陆</div>
      </div>
    </div>
  
  
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  
  export default {
    name: 'HomePage',
    mounted () {
      new BScroll('.HomePage', {
        click: true
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .HomePage
    width 100%
    height 100%
    
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
          position absolute
          left 16px
          top 8px
          font-size 30px
        
        .logo
          display inline-block
        
        .input
          position relative
          height 50px
          width 50%
          border-radius 10px
          background #ededed;
          border 0
          padding-left 60px
          display flex
          align-items center
          
          .placeholder
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


</style>
