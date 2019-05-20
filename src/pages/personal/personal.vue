<template>
  <div>
    <Search/>
    <div class="Login">
      
      <div class="LoginFrom">
        <div class="logoWrap">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        
        <div class="EmailAndAccount">
          <div class="phoneLogin">
            <div><i class="iconfont iconshouji"></i><span>手机号码登陆</span></div>
          </div>
          <div class="EmailLogin">
            <div><i class="iconfont icontubiao209"></i><span>手机号码登陆</span></div>
          </div>
        </div>
        
        <div class="phone"><span>手机号快捷注册</span><i class="iconfont iconyoujiantou"></i></div>
        
        <div class="ThirdPartyLogin"><i class="iconfont iconweixin WeChat"></i><span>微信</span> | <i
          class="iconfont iconqq qq"></i><span>QQ</span> | <i class="iconfont iconweibojierumoban microblog"></i><span>微博</span>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
  export default {
    name: 'personal'
  }
</script>

<style lang="stylus" scoped>
  div
    width 100%
    height 100%
    
    .LoginFrom
      width 100%
      height 50%
      text-align center
      
      .ThirdPartyLogin
        position absolute
        bottom 0
        width 100%
        height 60px
        line-height 60px
        margin-bottom 100px
        
        span
          font-size 28px
          color #7F7F7F
          margin 0 10px
        
        i
          font-size 45px
          color #7F7F7F
          margin 0 10px
        
        .WeChat
          color #24DB5A
        
        .qq
          color #369BCE
        
        .microblog
          color #F43B51
      
      .logoWrap
        position relative
        width 100%
        height 40%
        
        img
          position absolute
          top 0
          left 0
          right 0
          bottom 0
          margin auto
          display inline-block
          width 300px
          height 100px
      
      .phone
        width 100%
        height 60px
        
        span
          
          font-size 30px
          line-height 60px
        
        i
          font-size 30px
      
      .EmailAndAccount
        width 95%
        height 60%
        margin 0 auto
        
        div
          box-sizing border-box
          display flex
          justify-content center
          align-items center
          
          div
            width 100%
            height 50%
            border-radius 20px
          
          i
            font-size 50px
          
          span
            margin-left 20px
        
        .phoneLogin
          width 100%
          height 50%
          
          div
            color white
            background #b4282d
        
        .EmailLogin
          width 100%
          height 50%
          
          div
            color #b4282d
            background white
            border 1px solid #b4282d
</style>
