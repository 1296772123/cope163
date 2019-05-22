<template>
  <div class="NewArrival">
    <div class="HomeBuyTitle">
      <span>新品首发</span>
      <span>更多<i class="iconfont iconyoujiantou"></i></span>
    </div>
    <ul class="BuyList">
      <li class="BuyItem" v-for="newItem in newitemlist6" :key="newItem.id">
        <a href="">
          <img
            :src="newItem.listPicUrl"
            alt="">
          <div>
            <span>{{newItem.name}}</span>
            <span class="Price">￥{{newItem.counterPrice}}</span>
            <span class="Goods">好货内部价</span>
          </div>
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  
  export default {
    name: 'NewArrival',
    computed: {
      ...mapGetters(['newitemlist6'])
    }
  }
</script>

<style lang="stylus" scoped>
  .NewArrival
    width 95%
    height 650px
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

