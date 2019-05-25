<template>
  <div>
    
    <div class="Login">
      <div class="LoginFrom">
        <div class="logoWrap">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <form action="">
          <span class="authCode">获取验证码</span>
          <div>
            <input
              v-model="phone"
              type="tel"
              maxlength="11"
              placeholder="请输入手机号"
              v-validate="`required|mobile`"
              name="phone"
            />
            <span style="color: red;font-size: 10px ; text-align: center">{{ errors.first('phone') }}</span>
          </div>
          <div>
            <input
              v-model="code"
              type="tel"
              maxlength="6"
              placeholder="请输入验证码"
              v-validate="{required:true,digits:'6'}"
              name="code"
            />
            <span style="color: red;font-size: 10px ; text-align: center">{{ errors.first('code') }}</span>
          </div>
          <div class="issue">
            <div>遇到问题？</div>
            <div>使用密码验证登录</div>
          </div>
        </form>
        <div class="EmailAndAccount">
          <div class="phoneLogin">
            <div><i class="iconfont iconshouji"></i><span>手机号码登陆</span></div>
          </div>
          <div class="EmailLogin">
            <div @click="$router.back()"><span>其它登陆方式</span></div>
          </div>
        </div>
        
        <div class="phone" @click="toPath('/personal/register')"><span>注册账号</span><i
          class="iconfont iconyoujiantou"></i>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'personalPhone',
    data () {
      return{
        phone :'',
        code:'',
      }
    },
    methods: {
      toPath (path) {
        this.$router.push(path)
      }
    }
    // data () {
    //   return {
    //     isShow: false,
    //     isShowPhone: false,
    //     isShowEmail: false,
    //   }
    // },
    // methods: {
    //   isShowphone (PhoneOrEmail) {
    //     if (PhoneOrEmail === 'phone') {
    //       this.$router.push({path: `/personal/?id=${'phone'}`})
    //     } else if (PhoneOrEmail === 'Email') {
    //       this.$router.push({path: `/personal/?id=${'Email'}`})
    //     }
    //   }
    // },
    
  }
</script>

<style lang="stylus" scoped>
  @import "../../../common/stylus/mixin.styl"
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
        height 50%
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
            border 1.5px solid #b4282d
      
      form
        position relative
        width: 100%;
        height: 400px;
        display: block
        
        .authCode
          position absolute
          display inline-block
          top 33.333%
          right 5%
          padding 10px 10px
          border-radius 5px
          border 1.5px solid black
        
        div
          width 90%
          height 25%
          display inline-block
          bottom-border-1px(#f4f4f4)
          
          input
            
            width 100%
            height 100%
            font-size 30px
            outline none
            box-sizing border-box
            background none
            border 0
          input:
          
          :-webkit-input-placeholder {
            color: #C0C0C0;
            font-size: 14px;
          }
        
        .issue
          display inline-block
          
          div
            display inline-block
            width 49%
            height 100%
            line-height 133px
            color: #C0C0C0;
            
            &:nth-child(1)
              text-align left
            
            &:nth-child(2)
              text-align right
</style>

