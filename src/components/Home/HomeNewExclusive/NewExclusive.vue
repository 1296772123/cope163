<template>
  <div class="NewExclusive">
    <div class="NewExclusiveTitle">
      <span>-</span>
      <span>新人专享礼</span>
      <span>-</span>
    </div>
    
    <div class="NewExclusiveCoutainer">
      <div class="LeftImage">
        <span>新人专享礼包</span>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
      </div>
      <div class="RightImage">
        <a href="http://localhost:8080/homepage">
          <div class="ImageTop">
            <div class="Position">
              <p>福利社</p>
              <p>今日特价</p>
            </div>
            <img
              src="https://yanxuan.nosdn.127.net/e75693a49d0f2645513d5ef9489c5ecc.png?imageView&thumbnail=200x200&quality=75"
              alt="">
          </div>
        </a>
        <a href="http://localhost:8080/homepage">
          <div class="ImageBottom">
            <div class="Position">
              <p>新人拼团</p>
              <p>1元起包邮</p>
            </div>
            <img
              src="https://yanxuan.nosdn.127.net/9dda6ba19c27f7403acda49f610ff03c.png?imageView&thumbnail=200x200&quality=75"
              alt="">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewExclusive'
  }
</script>

<style lang="stylus">
  .NewExclusive
    width 100%
    height 555px
    
    .NewExclusiveTitle
      width 100%
      height 80px
      text-align center
      line-height 80px
      font-size 28px
    
    .NewExclusiveCoutainer
      
      width 95%
      height 85%
      margin 0 auto
      box-sizing border-box
      
      .LeftImage
        width 50%
        height 100%
        background #F9E9CF
        box-sizing border-box
        float left
        text-align center
        padding 50px
        font-size 35px
        border 5px solid white
        border-radius 15px
        
        img
          margin-top 50px
          width 100%
          height 60%
      
      a
        width 50%
        height 50%
      
      .RightImage
        float right
        width 50%
        height 100%
        box-sizing border-box
        
        .ImageTop
          width 100%
          height 50%
          background-color #FBE2D3
          padding 30px
          box-sizing border-box
          border 5px solid #fff
          border-radius 15px
          
          .Position
            position: absolute;
            
            p
              font-size 30px
              
              &:nth-child(1) {
                font-size 32px
                color black
              }
              
              &:nth-child(2) {
                color #333333
              }
          
          img
            float right
            height 100%
        
        .ImageBottom
          width 100%
          height 50%
          background #FFECC2
          padding 30px
          box-sizing border-box
          border 5px solid white
          border-radius 15px
          
          .Position
            position: absolute;
            
            p
              font-size 30px
              
              &:nth-child(1) {
                font-size 32px
                color black
              }
              
              &:nth-child(2) {
                font-size 26px
                background-color #CBB693
                color #333333
              }
          
          img
            float right
            height 100%

</style>
