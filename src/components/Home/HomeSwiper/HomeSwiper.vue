<template>
  <div class="swiper-container HomeSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          src="https://yanxuan.nosdn.127.net/ac28c333645667553b74545c46ba5e7b.jpg?imageView&quality=75&thumbnail=750x0"
          alt="">
      </div>
      <div class="swiper-slide">
        <img
          src="https://yanxuan.nosdn.127.net/3f6db7a6a0b24bc30807c806507b81e0.jpg?imageView&quality=75&thumbnail=750x0"
          alt="">
      </div>
      <div class="swiper-slide">
        <img
          src="https://yanxuan.nosdn.127.net/a45c727b09ded1e0554df1fac12b94b1.jpg?imageView&quality=75&thumbnail=750x0"
          alt="">
      </div>
      <div class="swiper-slide">
        <img
          src="https://yanxuan.nosdn.127.net/8db54c351c497620aff3b0e65dd5f95c.jpg?imageView&quality=75&thumbnail=750x0"
          alt="">
      </div>
      <div class="swiper-slide">
        <img
          src="https://yanxuan.nosdn.127.net/a7b08e3aed13787da15c58879963be01.jpg?imageView&quality=75&thumbnail=750x0"
          alt="">
      </div>
      <div class="swiper-slide">
        <img
          src="https://yanxuan.nosdn.127.net/fdf6de9f80d2200d8fe6d267dff99151.jpg?imageView&quality=75&thumbnail=750x0"
          alt="">
      </div>
      <div class="swiper-slide">
        <img
          src="https://yanxuan.nosdn.127.net/931e7f847284a387d4725c9409383814.jpg?imageView&quality=75&thumbnail=750x0"
          alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!--&lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
    <!--<div class="swiper-button-prev"></div>-->
    <!--<div class="swiper-button-next"></div>-->
    <!---->
    <!--&lt;!&ndash; 如果需要滚动条 &ndash;&gt;-->
    <!--<div class="swiper-scrollbar"></div>-->
  </div>
</template>

<script>
  import SWiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  
  export default {
    name: 'HomeSwiper',
    mounted () {
      new SWiper('.swiper-container', {
        scrollY: true,
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
      })
    }
  }
</script>

<style lang="stylus">
  .HomeSwiper
    width 100%
    .swiper-pagination
      span
        background white
        width 50px
        height 5px
        border-radius 0
    img
      width 100%
</style>
