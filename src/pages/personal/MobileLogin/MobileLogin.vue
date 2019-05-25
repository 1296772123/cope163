<template>
  <div v-if="isShow">
    <form action="" v-if="isShowPhone">
      <span class="authCode">获取验证码</span>
      <div><input type="text" placeholder="请输入手机号"/></div>
      <div><input type="text" placeholder="请输入短信验证码"/></div>
      <div class="issue">
        <div>遇到问题？</div>
        <div>使用密码验证登录</div>
      </div>
    </form>
    
    <form action="" v-if="isShowEmail">
      <div><input type="text" placeholder="邮箱账号"/></div>
      <div><input type="text" placeholder="密码"/></div>
      <div class="issue">
        <div>注册账号？</div>
        <div>忘记密码</div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'MobileLogin',
    data () {
      return {
        isShow: false,
        isShowPhone: false,
        isShowEmail: false,
        
      }
    },
    
    methods: {},
    
    computed: {
      getId () {
        return this.$route.query.id
      },
    },
    
    watch: {
      getId: (value) => {
        if (value === 'phone') {
          console.log('phone')
          
        } else if (value === 'Email') {
          console.log('Email')
        }
      },
      
    }
    
  }
</script>

<style lang="stylus" scoped>
  div
    width 100%
    height 50%
    
    form
      position relative
      width: 100%;
      height: 400px;
      display: block
      
      .authCode
        position absolute
        display inline-block
        top 31.5%
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
