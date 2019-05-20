<template>
  <div class="NewArrival">
    <div class="HomeBuyTitle">
      <span>新品首发</span>
      <span>更多<i class="iconfont iconyoujiantou"></i></span>
    </div>
    <ul class="BuyList">
      <li class="BuyItem">
        <a href="">
          <img src="https://yanxuan.nosdn.127.net/35893a4f18ebf7af0f018e2918c1d630.png?imageView&thumbnail=216x216&quality=75" alt="">
          <div>
            <span>烟台美早大樱桃 2斤装</span>
            <span class="Price">￥135</span>
            <span class="Goods">好货内部价</span>
          </div>
        </a>
      </li>
      <li class="BuyItem">
        <a href="">
          <img src="https://yanxuan.nosdn.127.net/355e0781cabbdfa084bf947aabceacf0.png?imageView&thumbnail=216x216&quality=75" alt="">
          <div>
            <span>烟台美早大樱桃 2斤装</span>
            <span class="Price">￥135</span>
            <span class="Goods">520特惠</span>
          </div>
        </a>
      </li>
      <li class="BuyItem">
        <a href="">
          <img src="https://yanxuan.nosdn.127.net/b71226b22d365ce2d8a3428a44a31835.png?imageView&thumbnail=216x216&quality=75" alt="">
          <div>
            <span>烟台美早大樱桃 2斤装</span>
            <span class="Price">￥135</span>
            <span class="Goods">每满199减30券</span>
          </div>
        </a>
      </li>
      <li class="BuyItem">
        <a href="">
          <img src="https://yanxuan.nosdn.127.net/7647f4270436fe0c2dd63866486a55ef.png?imageView&thumbnail=216x216&quality=75" alt="">
          <div>
            <span>烟台美早大樱桃 2斤装</span>
            <span class="Price">￥135</span>
            <span class="Goods">好货内部价</span>
          </div>
        </a>
      </li>
      <li class="BuyItem">
        <a href="">
          <img src="https://yanxuan.nosdn.127.net/233d38636a0c203deca09d74f89ae3b2.png?imageView&thumbnail=216x216&quality=75" alt="">
          <div>
            <span>烟台美早大樱桃 2斤装</span>
            <span class="Price">￥135</span>
            <span class="Goods">好货内部价</span>
          </div>
        </a>
      </li>
      <li class="BuyItem">
        <a href="">
          <img src="https://yanxuan.nosdn.127.net/6819a1722531841ac809a7dd973956bb.png?imageView&thumbnail=216x216&quality=75" alt="">
          <div>
            <span>烟台美早大樱桃 2斤装</span>
            <span class="Price">￥135</span>
            <span class="Goods">好货内部价</span>
          </div>
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'NewArrival'
  }
</script>

<style lang="stylus" scoped>
  .NewArrival
    width 95%
    height 630px
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
        height 55%
        
        a
          width 100%
          height 100%
          display inline-block
          img
            background-color #F5F5F5
            margin 0 auto
            width 80%
            height 55%
          div
            width 80%
            height 45%
            margin 0 auto
            span
              font-size 22px
            .Price
              color #B4282D
              font-size 22px
            .Goods
              text-align center
              display block
              color #B4282D
              font-size 22px
              border-radius 5px
              border 1px solid #B4282D
</style>

