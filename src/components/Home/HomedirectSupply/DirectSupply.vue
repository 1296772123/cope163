<template>

  <div class="DirectSupply">
    <div class="DireCtTitle">
      <span>品牌制造商直供</span>
      <span>
        更多
        <i class="iconfont iconyoujiantou"></i>
      </span>
    </div>
    <div class="DireCtImage">
      
      <a href="http://localhost:8080/homepage" style="background-image: url(https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)">
      
        <h3>海外制造商</h3>
        <h4>9.9元起步</h4>
        
      </a>
      
      <a href="http://localhost:8080/homepage" style="background-image: url(https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1)">
        <h3>CK制造商</h3>
        <h4>9.9元起步</h4>
      </a>
      
      <a href="http://localhost:8080/homepage" style="background-image: url(https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1)">
        <h3>新秀丽制造商</h3>
        <h4>9.9元起步</h4>
      </a>
      
      <a href="http://localhost:8080/homepage" style="background-image: url(https://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1)">
        <h3>Nine West制造商</h3>
        <h4>9.9元起步</h4>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DirectSupply'
  }
</script>

<style lang="stylus" scoped>
  @import '../../../common/stylus/mixin.styl'
  .DirectSupply
    position relative
    width 95%
    height 555px
    margin 0 auto
    border-radius 10px
    
    box-sizing border-box
    
    .DireCtTitle
      width 100%
      height 80px
      line-height 80px
      
      span
        font-size 30px
        
        &:nth-child(2)
          float right
          font-size 30px
          color #333333
      
      i
        font-size 30px
    
    .DireCtImage
      position absolute
      top 60px
      width 100%
      height 495px
      overflow hidden
      padding  0 15px 20px 10px
      a
        text-align center
        float left
        width 50%
        height 50%
        box-sizing border-box
        border: 10px solid white;
        background-size  95% 95%
        h4
          color gray
</style>
