<template>
  <div class="HomeTheHottest">
    <div class="TheHottestTitle">
      <span>人气推荐</span>
      <span>更多<i class="iconfont iconyoujiantou"></i></span>
    </div>
    
    <a
      v-for="(popularItem,index) in popularItem2"
      :key="index"
      class="TheHottestA" href="http://localhost:8080/homepage"
    >
      <div class="TheHottest">
        <img
          :src="popularItem.listPicUrl"
          alt="">
        <div>
          <p>520特惠</p>
          <p>{{popularItem.name}}</p>
          <p>{{popularItem.simpleDesc}}</p>
          <p>￥{{popularItem.counterPrice}}</p>
        </div>
      </div>
    </a>
    <ul class="ThehottestB">
      <li v-for="(popular) in popularItem1">
        <a href="http://localhost:8080/homepage">
          <img
            :src="popular.listPicUrl"
            alt="">
          <span>{{popular.name}}</span>
          <span>￥{{popular.counterPrice}}</span>
          <span>{{popular.itemTagList[0].name}}</span>
        </a>
      </li>
      <!--<li>
        <a href="http://localhost:8080/homepage">
          <img
            src="https://yanxuan.nosdn.127.net/dccb1e4c4bdc95788bfc458dcc5b7d44.png?imageView&quality=65&thumbnail=330x330"
            alt="">
          <span>浓缩即食燕窝 70克*3瓶...</span>
          <span>￥288</span>
          <span>限时购</span>
        </a>
      </li>
      <li>
        <a href="http://localhost:8080/homepage">
          <img
            src="https://yanxuan.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png?imageView&quality=65&thumbnail=330x330"
            alt="">
          <span>浓缩即食燕窝 70克*3瓶...</span>
          <span>￥288</span>
          <span>限时购</span>
          <span>超级闪购</span>
        </a>
      </li>-->
    </ul>
  </div>

</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  
  export default {
    name: 'TheHottest',
    computed: {
      ...mapGetters(['popularItem1', 'popularItem2'])
      
    }
    
  }
</script>

<style lang="stylus" scoped>
  .HomeTheHottest
    width 100%
    height 600px
    
    .TheHottestTitle
      width 95%
      height 80px
      line-height 80px
      margin 0 auto
      
      span
        &:nth-child(1)
          float left
          font-size 30px
        
        &:nth-child(2)
          float right
          font-size 30px
      
      i
        font-size 30px
    
    .TheHottestA
      display block
      width 95%
      height 250px
      margin 0 auto
      background-color #FEF0DF
      
      .TheHottest
        width 100%
        height 100%
        
        img
          width 35%
          height 100%
          float left
        
        div
          float right
          width 65%
          height 100%
          padding-top 60px
          padding-left 50px
          box-sizing border-box
          
          p
            font-size 24px
            margin 5px 0
            
            &:nth-child(1)
              color #B4282D
              border-radius 2px
              display inline-block
              border 1px solid #B4282D
            
            &:nth-child(2)
              color #7F7F7F
            
            &:nth-child(4)
              color #B4282D
    
    
    .ThehottestB
      width 95%
      height 270px
      margin 0 auto
      font-size 0
      display flex
      
      li
        width 33.333%
        height 100%
        box-sizing border-box
        border 5px solid white
        background-color #F5F5F5
        
        a
          display block
          width 100%
          height 100%
          
          img
            margin 0 auto
            width 85%
            height 170px
          
          span
            display block
            font-size 20px
            border-radius 5px
            
            &:nth-child(3)
              color #B4282D
              border-radius 2px
              display block
            
            &:nth-child(4)
              color #B4282D
              border-radius 2px
              display inline-block
              border 1px solid #B4282D
            
            &:nth-child(5)
              margin-left 10px
              color #B4282D
              border-radius 2px
              display inline-block
              border 1px solid #B4282D
</style>
