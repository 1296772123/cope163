<template>
  <div class="HomeNowBuyu">
    <div class="HomeBuyTitle">
      <span>限时购</span>
      <span>更多<i class="iconfont iconyoujiantou"></i></span>
      <span class="Time">00</span> : <span class="Time">00</span> : <span class="Time">00</span>
    </div>
    <ul class="BuyList">
      <li class="BuyItem">
        <a href="">
          <img src="https://yanxuan.nosdn.127.net/35893a4f18ebf7af0f018e2918c1d630.png?imageView&thumbnail=216x216&quality=75" alt="">
          <div>
            <span>￥135</span><del>￥159</del>
          </div>
        </a>
      </li>
      <li class="BuyItem">
        <a href="">
          <img src="https://yanxuan.nosdn.127.net/355e0781cabbdfa084bf947aabceacf0.png?imageView&thumbnail=216x216&quality=75" alt="">
          <div>
            <span>￥135</span><del>￥159</del>
          </div>
        </a>
      </li>
      <li class="BuyItem">
        <a href="">
          <img src="https://yanxuan.nosdn.127.net/b71226b22d365ce2d8a3428a44a31835.png?imageView&thumbnail=216x216&quality=75" alt="">
          <div>
            <span>￥135</span><del>￥159</del>
          </div>
        </a>
      </li>
      <li class="BuyItem">
        <a href="">
          <img src="https://yanxuan.nosdn.127.net/7647f4270436fe0c2dd63866486a55ef.png?imageView&thumbnail=216x216&quality=75" alt="">
          <div>
            <span>￥135</span><del>￥159</del>
          </div>
        </a>
      </li>
      <li class="BuyItem">
        <a href="">
          <img src="https://yanxuan.nosdn.127.net/233d38636a0c203deca09d74f89ae3b2.png?imageView&thumbnail=216x216&quality=75" alt="">
          <div>
            <span>￥135</span><del>￥159</del>
          </div>
        </a>
      </li>
      <li class="BuyItem">
        <a href="">
          <img src="https://yanxuan.nosdn.127.net/6819a1722531841ac809a7dd973956bb.png?imageView&thumbnail=216x216&quality=75" alt="">
          <div>
            <span>￥135</span><del>￥159</del>
          </div>
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'TheHottest'
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
