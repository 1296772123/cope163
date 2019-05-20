<template>
  <div class="Classification">
    <div class="Search">
      <div class="SearchContent">
        <i class="iconfont iconsousuo"></i>
        <span>搜索商品, 共22655款好物</span>
      </div>
    </div>
    <div class="productList">
      <div class="Productleft">
        <ul class="LeftList">
          <li class="active">推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
        </ul>
      </div>
      <div class="Container">
        <div class="ProductRight">
          <div class="ContainerImage">
            <img
              src="https://yanxuan.nosdn.127.net/ac28c333645667553b74545c46ba5e7b.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          
          <div class="ContainerList">
            <ul>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>520告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
              <li>
                <img
                  src="https://yanxuan.nosdn.127.net/1f128ac543d11b2e7a15022f6e1b52d3.png?imageView&quality=85&thumbnail=144x144"
                  alt="">
                <p>告白神器</p>
              </li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  
  export default {
    name: 'classification',
    
    mounted () {
      let ProductList = document.querySelector('.productList')
      let topHeight = document.querySelector('.Search')
      let bottomHeight = document.querySelector('.footer_guide')
      let height = ProductList.clientHeight
      height = window.document.body.clientHeight - (topHeight.clientHeight + bottomHeight.clientHeight)
      ProductList.style.height = height + 'px'
      
      this.$nextTick(() => {
        new BScroll('.Productleft', {click: true, scrollY: true})
        new BScroll('.Container', {click: true, scrollY: true})
      })
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .Classification
    width 100%
    height 100%
    
    .Search
      position relative
      width 100%
      height 120px
      box-sizing border-box
      background-color white
      z-index 99
      
      .SearchContent
        position absolute
        left 0
        top 0
        bottom 0
        right 0
        margin auto
        width 90%
        height 50%
        border-radius 10px
        display flex
        justify-content center
        align-items center
        background-color #ededed;
        
        i
          
          font-size 35px
        
        span
          margin-left 15px
    
    .productList
      position absolute
      top 120px
      width 100%
      height 100%
      
      .Productleft
        float left
        width 20%
        height 100%
        
        ul
          width 100%
          li
            
            font-size 28px
            text-align center
            width 100%
            height 70px
            line-height 70px
            box-sizing border-box
            
            &.active
              left-border-px(#ab2b2b)
      
      .Container
        float right
        width 80%
        height 100%
        .ProductRight
          width 90%
          margin 0 auto
          .ContainerImage
            width 100%
            height 230px
            margin-top 30px
            background-color red
            
            img
              width 100%
              height 100%
          
          .ContainerList
            height 100%
            display flex
            
            ul
              float left
              width 100%
              height 100%
              font-size 0
              
              li
                display inline-block
                width 33.333%
                height 250px
                text-align center
                
                img
                  width 100%
                  height 70%
                
                p
                  float left
                  width 100%
                  height 20%
                  font-size 28px
</style>
