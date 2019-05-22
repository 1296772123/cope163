<template>
  <div class="BetterBottom xxx"  ref="wrapper">
    <ul class="BottomList">
      <li v-for="item in categorymodule.itemList">
        <div class="Position">
          <div>网</div>
          <div>易</div>
          <div>严</div>
          <div>选</div>
          <div>!</div>
        </div>
        <img
          :src="item.scenePicUrl"
          alt="">
        <span class="Left">{{item.name}}</span>
        <span class="center">￥{{item.counterPrice}}</span>
        <del>￥219</del>
        <span class="Right">520特惠</span>
      </li>
    </ul>
  </div>
</template>




<script>
  import BScroll from 'better-scroll'
  
  export default {
    name: 'betterScroll',
    data () {
      return {
        index1: ''
      }
    },
    props: {
      categorymodule: Object,
      index: Number
    },
    mounted () {
      this.$nextTick(() => {
        if (!this.Bscroll) {
          this.BScroll = new BScroll(this.$refs.wrapper, {
            scrollX: true,
            scrollY: false
          })
        } else {
          this.BScroll.refresh()
        }
      })
    },
  }

</script>

<style lang="stylus" scoped>
  .BetterBottom
    display flex
    
    .BottomList
      position relative
      display flex
      box-sizing border-box
      
      .Position
        position absolute
        margin-left 20px
        top 20px
        padding 10px 6px
        font-size 20px
        color #B4A078
        border 1px solid #B4A078
      
      img
        width 200px
        height 200px
        border 15px solid white
        background-color #F4F4F4
      
      span
        margin-left 15px
        font-size 22px
        margin-top 15px
      
      del
        display inline-block
        font-size 24px
        color #A7A7A7
      
      .Left
        display block
      
      .center
        font-size 28px
      
      .Right
        display inline-block
        font-size 20px
        color #B4282D
        border-radius 5px
        padding 0 15px
        box-sizing border-box
        border 1px solid #B4282D
</style>
