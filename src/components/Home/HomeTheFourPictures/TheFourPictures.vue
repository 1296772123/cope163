<template>
  <div class="TheFourPictures">
    <a href="">
      <div>
        <span class="SpanLeft">性价比之王</span>
        <span class="SpanRight">品质惊人的良心替代</span>
      </div>
      <img src="https://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75" alt="">
      <img src="https://yanxuan.nosdn.127.net/b093cd15ca7de193d46f0ac44dde71da.png?imageView&thumbnail=150x150&quality=75" alt="">
    </a>
    <a href="">
      <div>
        <span class="SpanLeft">无限回购榜单</span>
        <span class="SpanRight">快消日用 超值5.9元起</span>
      </div>
      <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
      <img src="https://yanxuan.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png?imageView&thumbnail=150x150&quality=75" alt="">
    </a>
    <a href="">
      <div>
        <span class="SpanLeft">断货补单王</span>
        <span class="SpanRight">严选必买爆款</span>
      </div>
      <img src="https://yanxuan.nosdn.127.net/d335c626a3ca7459739f668e1ef9478b.png?imageView&thumbnail=150x150&quality=75" alt="">
      <img src="https://yanxuan.nosdn.127.net/6463c70f8b50bd14fd49d1f5903c06ec.png?imageView&thumbnail=150x150&quality=75" alt="">
    </a>
    <a href="">
      <div>
        <span class="SpanLeft">双料口碑爆品榜</span>
        <span class="SpanRight">高销量高好评好物</span>
      </div>
      <img src="https://yanxuan.nosdn.127.net/bbdbfc9d084e0188af383ff9255a4cc1.png?imageView&thumbnail=150x150&quality=75" alt="">
      <img src="https://yanxuan.nosdn.127.net/b2a64915d5a9ae04964de87901f284eb.png?imageView&thumbnail=150x150&quality=75" alt="">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'TheFourPictures'
  }
</script>

<style lang="stylus" scoped>
  .TheFourPictures
    width 95%
    height 600px
    margin 0 auto
    
    a
      float left
      width 50%
      height 50%
      font-size 0
      border 15px solid white
      box-sizing border-box
      background-color #F5F5F5
      div
        width 100%
        height 50%
        text-align center
        span
          padding-top 20px
          display block
        .SpanLeft
          font-size 30px
        .SpanRight
          color #7f7f7f
          font-size 25px
      img
        vertical-align top
        display inline-block
        width 50%
        height 50%

</style>
