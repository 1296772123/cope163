<template>
  
  <div class="SellLikeHotCakes">
    <div class="SellLikeTitle">类目热销榜</div>
    <a class="SellLike HotCakes" href="http://localhost:8080/homepage">
      <span>
        <span>
          热销榜
        </span>
      </span>
      <img
        src="https://yanxuan.nosdn.127.net/31dc9401203e8e6f99572abfc4e047a3.png?imageView&quality=65&thumbnail=200x200"
        alt="">
    </a>
    <a class="SellLike Goods" href="http://localhost:8080/homepage">
      <span>
        <span>
          好评榜
        </span>
      </span>
      <img
        src="https://yanxuan.nosdn.127.net/f6116ce57c2173e4775d3c902cfb0d4b.png?imageView&quality=65&thumbnail=200x200"
        alt="">
    </a>
    
    <ul class="RankingList">
      <li class="ListItem">
        <span>居家生活榜</span>
        <a href="http://localhost:8080/homepage"
           style="background-image: url(https://yanxuan.nosdn.127.net/08f6e74986069813ab7dab4c2491cf96.png?imageView&quality=65&thumbnail=200x200)">
        </a>
      </li>
      <li class="ListItem">
        <span>服饰鞋包榜</span>
        <a href="http://localhost:8080/homepage"
           style="background-image: url(https://yanxuan.nosdn.127.net/1770b0b67e511b03c56be97131e18816.png?imageView&quality=65&thumbnail=200x200)">
        
        </a>
      </li>
      <li class="ListItem">
        <span>美食酒水榜</span>
        <a href="http://localhost:8080/homepage"
           style="background-image: url(https://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200)">
        
        </a>
      </li>
      <li class="ListItem">
        <span>个人清护榜</span>
        <a href="http://localhost:8080/homepage"
           style="background-image: url(https://yanxuan.nosdn.127.net/e3a108207eb1c518d84b5f24ff6627a3.png?imageView&quality=65&thumbnail=200x200)">
        
        </a>
      </li>
      <li class="ListItem">
        <span>数码家电榜</span>
        <a href="http://localhost:8080/homepage"
           style="background-image: url(https://yanxuan.nosdn.127.net/e5a7f8681f49a525abd7106fe833c2ce.png?imageView&quality=65&thumbnail=200x200)">
        
        </a>
      </li>
      <li class="ListItem">
        <span>运动旅行榜</span>
        <a href="http://localhost:8080/homepage"
           style="background-image: url(https://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?imageView&quality=65&thumbnail=200x200)">
        
        </a>
      </li>
      <li class="ListItem">
        <span>母婴亲子榜</span>
        <a href="http://localhost:8080/homepage"
           style="background-image: url(https://yanxuan.nosdn.127.net/de44bd49514fcfe4a915cbd901a94016.png?imageView&quality=65&thumbnail=200x200)">
        </a>
      </li>
      <li class="ListItem">
        <span>全球特色榜</span>
        <a href="http://localhost:8080/homepage"
           style="background-image: url(https://yanxuan.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=200x200)">
        
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'SellLikeHotCakes'
  }
</script>

<style lang="stylus" scoped>
  @import '../../../common/stylus/mixin.styl'
  .SellLikeHotCakes
    position relative
    width 95%
    height 555px
    margin 0 auto
    padding 0 15px 15px 15px
    
    .SellLikeTitle
      padding-top 10px
      width 100%
      height 10%
      font-size 30px
      line-height 60px
    .SellLike
      display flex
      align-items center
      box-sizing border-box
      border 5px solid white
      border-radius 5px
      
      span
        
        width 50%
        
        span
          border-bottom 5px solid #000
      
      img
        display inline-block
        width 50%
        height 100%
    
    .HotCakes
      float left
      width 50%
      height 30%
      background-color #F9F3E4
    
    .Goods
      float right
      width 50%
      height 30%
      background-color #EBEFF6
    
    .RankingList
      width 100%
      height 30%
      font-size 0
      
      .ListItem
        position relative
        width 25%
        height 100%
        display inline-block
        box-sizing border-box
        border 5px solid white
        background-color #F5F5F5
        
        span
          position absolute
          text-align center
          top 20px
          left 0
          right 0
          margin 0 auto
          font-size 26px
        
        a
          vertical-align top
          width 100%
          height 100%
          display block
          background-repeat no-repeat
          background-position bottom
          background-size 60% 60%

</style>


