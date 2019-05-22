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
        <a :href="kingKongs.targetUrl" v-for="(kingKongs,index) in kingKong" :key="index">
          <div class="ImageBottom">
            <div class="Position">
              <p>{{kingKongs.title}}</p>
              <p>{{kingKongs.subTitle}}</p>
              <p class="TonyHan">{{kingKongs.tag}}</p>
            </div>
            <img
              :src="kingKongs.picUrl"
              alt="">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    name: 'NewExclusive',
    computed: {
      ...mapState({
        kingKong: state => state.home.kingKongList
      })
    }
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
                color #7F7F7F
              }
              &:nth-child(3) {
                font-size 26px
                background-color #CBB693
                color #333333
              }
          
          img
            float right
            height 100%

</style>
