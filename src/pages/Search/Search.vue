<template>
  <div class="Search">
    <div class="SearchContainer">
      <i class="iconfont iconsousuo"></i>
      <input type="text" placeholder="瑞士制造 玫瑰腕表上新疯抢"/>
      <div @click="toPath('/personal')"><span>取消</span></div>
    
    </div>
    <div class="history">
      <div class="historyAndDelete">
        <span>历史记录</span>
        <span><i class="iconfont iconshanchu"></i></span>
      </div>
      <div class="historyList">
        <ul>
          <li>啊啊啊</li>
          <li>啊啊啊</li>
          <li>啊啊啊</li>
          <li>啊啊啊</li>
          <li>啊啊啊</li>
          <li>啊啊啊</li>
        </ul>
      </div>
    </div>
    <Frame/>
    <div class="HotSearchTop">
      <span>热门搜索</span>
    </div>
    <div class="HotSearch">
      
      <ul>
        <li>9.9元爆品超值购</li>
        <li>9.9元爆品超值购</li>
        <li>9.9元爆品超值购</li>
        <li>9.9元爆品超值购</li>
        <li>9.9元爆品超值购</li>
        <li>9.超值购</li>
        <li>9.9品超值购</li>
        <li>9.9元元爆品超值购</li>
        <li>9.9元爆超值购</li><li>9.9元爆超值购</li>
        <li>9.9值购</li>
        <li>9.9值购</li><li>9.9值购</li><li>9.9值购</li><li>9.9值购</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    methods: {
      toPath (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .Search
    position relative
    width 100%
    height 100%
    
    .SearchContainer
      width 100%
      height 80px
      margin 0 auto
      display flex
      justify-content center
      align-items center
      
      input
        position absolute
        left 65px
        width 500px
        height 50px
        font-size 32px
        padding-left 70px
        outline: none
        background-color #F4F4F4
        border 0px
      i
        position absolute
        left 90px
        z-index 99
        font-size 35px
      
      div
        position absolute
        right 30px
        width 10%
        height 70px
        line-height 70px
        text-align center
        font-size 0
        
        span
          font-size 30px
    
    .history
      width 95%
      height 200px
      margin 0 auto
      
      .historyAndDelete
        width 100%
        height 50%
        line-height 100px
        
        span
          color #999
          font-size 30px
          
          &:nth-child(1)
            float left
          
          &:nth-child(2)
            float right
            
            i
              font-size 35px
      
      .historyList
        width 100%
        height 50%
        display flex
        ul
          li
            float left
            border 0.5px solid #999
            padding 5px 10px
            margin 10px
            white-space nowrap
  
    .HotSearchTop
      width 95%
      margin 0 auto
      height 50px
      line-height 50px
      span
        font-size 28px
        color #999
      
    .HotSearch
      width 100%
      height 100%
      display flex
      
      ul
        width 95%
        margin 0 auto
        li
          float left
          border 0.5px solid #999
          padding 5px 10px
          margin 10px
          white-space nowrap
</style>
