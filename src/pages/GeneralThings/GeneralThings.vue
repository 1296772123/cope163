<template>
  <div class="GeneralThings">
    <div class="ContainerTop">
      <div class="GeneralThingsTitle">
        <div class="TitleContainer">
          
          <div class="left" @click="toPath('/homepage')">
            <i class="iconfont iconxiazai45"></i>
          </div>
          
          <div class="find">
            <a href="">
              <strong>发现</strong>
            </a>
            <a href="">
              甄选家
            </a>
          </div>
          
          <div class="search">
            <a href="">
              <i class="iconfont iconsousuo" @click="toPath('/search')"></i>
            </a>
            <a href="">
              <i class="iconfont icongouwuche2" @click="toPath('/theshoppingcart')"></i>
            </a>
          </div>
        
        </div>
      </div>
      <div class="GoodsListed">
        <ul>
          <li class="active">推荐啊啊啊啊</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
        </ul>
      </div>
    </div>
    
    <div class="GeneralThingsContent">
      <div>
        <div class="CardList">
          <Frame/>
          <div class="CommentOnTheCard">
            
            <div class="Title">
              <img
                src="https://yanxuan.nosdn.127.net/90e5c3caa8890386424716150338b264.png?imageView&quality=65&thumbnail=56y56"
                alt="">
              <span>选妹</span>
            </div>
            <div class="Content">
              一口价！全部只要9.9、19.9……为了帮你省钱，选妹拼了！
            </div>
            <div class="Image">
              <img
                src="https://yanxuan.nosdn.127.net/0629916beb7e66d482d4ce305ce4b215.jpg?imageView&quality=65&thumbnail=690y376"
                alt="">
            </div>
            <div class="ClickRate">
              <div><i class="iconfont iconyan"></i><span>798w人看过</span></div>
            </div>
          </div>
        </div>
        
        <div class="TheSecondCardList">
          <Frame/>
          <div class="CommentOnTheCard">
            <div class="Left">
              <div class="LeftTitle">
                <img
                  src="https://yanxuan.nosdn.127.net/8250694e49e4352264c5b8198e0d9575.jpg?imageView&quality=65&thumbnail=56y56"
                  alt="">
                <span>
              网易味央：小周
            </span>
              </div>
              <div class="LeftContentTop">
                烟台大樱桃熟了，只有这个时令能吃到
              </div>
              <div class="LeftContentBootom">
                烟台大樱桃限时7.1折
              </div>
              
              <div class="ClickRate">
                <div><i class="iconfont iconyan"></i><span>798w人看过</span></div>
              </div>
            </div>
            
            <div class="Right">
              <img
                src="https://yanxuan.nosdn.127.net/0fc8c4646c9bf99eaccdf5c89815e00b.jpg?imageView&quality=65&thumbnail=272y272"
                alt="">
            </div>
          </div>
        </div>
        
        <div class="TheSecondCardList">
          <Frame/>
          <div class="CommentOnTheCard">
            <div class="Left">
              <div class="LeftTitle">
                <img
                  src="https://yanxuan.nosdn.127.net/8250694e49e4352264c5b8198e0d9575.jpg?imageView&quality=65&thumbnail=56y56"
                  alt="">
                <span>
              网易味央：小周
            </span>
              </div>
              <div class="LeftContentTop">
                烟台大樱桃熟了，只有这个时令能吃到
              </div>
              <div class="LeftContentBootom">
                烟台大樱桃限时7.1折
              </div>
              
              <div class="ClickRate">
                <div><i class="iconfont iconyan"></i><span>798w人看过</span></div>
              </div>
            </div>
            
            <div class="Right">
              <img
                src="https://yanxuan.nosdn.127.net/0fc8c4646c9bf99eaccdf5c89815e00b.jpg?imageView&quality=65&thumbnail=272y272"
                alt="">
            </div>
          </div>
        </div>
        <div class="TheSecondCardList">
          <Frame/>
          <div class="CommentOnTheCard">
            <div class="Left">
              <div class="LeftTitle">
                <img
                  src="https://yanxuan.nosdn.127.net/8250694e49e4352264c5b8198e0d9575.jpg?imageView&quality=65&thumbnail=56y56"
                  alt="">
                <span>
              网易味央：小周
            </span>
              </div>
              <div class="LeftContentTop">
                烟台大樱桃熟了，只有这个时令能吃到
              </div>
              <div class="LeftContentBootom">
                烟台大樱桃限时7.1折
              </div>
              
              <div class="ClickRate">
                <div><i class="iconfont iconyan"></i><span>798w人看过</span></div>
              </div>
            </div>
            
            <div class="Right">
              <img
                src="https://yanxuan.nosdn.127.net/0fc8c4646c9bf99eaccdf5c89815e00b.jpg?imageView&quality=65&thumbnail=272y272"
                alt="">
            </div>
          </div>
        </div>
        <div class="TheSecondCardList">
          <Frame/>
          <div class="CommentOnTheCard">
            <div class="Left">
              <div class="LeftTitle">
                <img
                  src="https://yanxuan.nosdn.127.net/8250694e49e4352264c5b8198e0d9575.jpg?imageView&quality=65&thumbnail=56y56"
                  alt="">
                <span>
              网易味央：小周
            </span>
              </div>
              <div class="LeftContentTop">
                烟台大樱桃熟了，只有这个时令能吃到
              </div>
              <div class="LeftContentBootom">
                烟台大樱桃限时7.1折
              </div>
              
              <div class="ClickRate">
                <div><i class="iconfont iconyan"></i><span>798w人看过</span></div>
              </div>
            </div>
            
            <div class="Right">
              <img
                src="https://yanxuan.nosdn.127.net/0fc8c4646c9bf99eaccdf5c89815e00b.jpg?imageView&quality=65&thumbnail=272y272"
                alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  
  export default {
    name: 'GeneralThings',
    methods: {
      toPath (path) {
        this.$router.push(path)
      }
    },
    mounted () {
      let GeneralTop = document.querySelector('.ContainerTop')
      let ProductList = document.querySelector('.GeneralThingsContent')
      let bottomHeight = document.querySelector('.footer_guide')
      let height = ProductList.clientHeight
      height = window.document.body.clientHeight - (bottomHeight.clientHeight + GeneralTop.clientHeight)
      ProductList.style.height = height + 'px'
      
      this.$nextTick(() => {
        this.BSscroll = new BScroll('.GeneralThingsContent', {
          click: true,
          scrollY: true,
          
        })
        new BScroll('.GoodsListed', {
          click: true,
          scrollX: true,
          bounce: false,
        })
      })
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .GeneralThings
    width 100%
    height 100%
    
    .ContainerTop
      .GeneralThingsTitle
        width 100%
        height 100px
        position: relative;
        z-index: 99;
        background: white;
        
        .TitleContainer
          width 90%
          height 100%
          margin 0 auto
          line-height 100px
          display flex
          justify-content space-between
          align-items center
          
          div
            i
              font-size 50px
          
          .find
            display flex
            justify-content space-around
            text-align center
            width 200px
            height 100%
            margin-left 60px
            
            a
              font-size 26px
              
              &:nth-child(1)
                font-size 35px
                color #b4282d
      
      .GoodsListed
        position: relative;
        top -2px
        width 100%
        height 70px
        display flex
        z-index: 99;
        background-color: #fff;
        box-sizing: border-box;
        
        ul
          display flex
          height 100%
          justify-content space-around
          align-items center
          top-border-1px(#7F7F7F)
          bottom-border-1px(#7F7F7F)
          
          box-sizing: border-box
          
          li
            margin 0 20px
            height 70px
            line-height 70px
            text-align: center
            white-space nowrap
            font-size 28px
            color #7F7F7F
            
            &.active
              bottom-border-2px(#b4282d)
    
    
    .CardList
      .CommentOnTheCard
        width 95%
        height 600px
        margin 0 auto
        
        .Title
          width 100%
          height 80px
          line-height 80px
          display flex
          justify-content left
          align-items center
          
          img
            width 60px
            height 60px
            border-radius 50%
          
          span
            font-size 30px
            margin-left 20px
        
        .Content
          width 100%
          height 120px
          font-size 40px
          overflow hidden
        
        .Image
          width 100%
          height 300px
          
          img
            width 100%
            height 100%
        
        .ClickRate
          div
            display flex
            justify-content left
            align-items center
            width 100%
            height 100px
            
            i
              font-size 50px
            
            span
              margin-left 20px
    
    
    .TheSecondCardList
      .CommentOnTheCard
        width 95%
        height 330px
        margin 0 auto
        
        .Left
          float left
          width 60%
          height 100%
          
          div
            margin-top 20px
          
          .LeftTitle
            height 60px
            display flex
            justify-content left
            align-items center
            
            img
              width 50px
              height 50px
              border-radius 50%
            
            span
              margin-left 20px
          
          .LeftContentTop
            font-size 35px
          
          .LeftContentBootom
            color #7f7f7f
            font-size 28px
          
          .ClickRate
            color #7f7f7f
            
            i
              color #7f7f7f
              font-size 28px
        
        .Right
          float right
          width 40%
          height 100%
          box-sizing border-box
          
          img
            margin-top 30px
            width 90%
            height 80%
            border-radius 10px

</style>
