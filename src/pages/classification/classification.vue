<template>
  <div class="Classification">
    <div class="Search">
      <div class="SearchContent">
        <i class="iconfont iconsousuo"></i>
        <span>搜索商品, 共22655款好物</span>
      </div>
    </div>
    <div class="productList">
      <div class="Productleft">
        <ul class="LeftList">
          <li
            @click="isShowActive(index,categoryL)"
            v-for="(categoryL,index) in categoryL1 "
            :key="index"
            :class="{active:indexs ===index}"
          >
            {{categoryL.name}}
          </li>
        </ul>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  
  export default {
    name: 'classification',
    data () {
      return {
        indexs: 0,
      }
    },
    methods: {
      
      isShowActive (index, categoryL) {
        this.indexs = index
        this.$router.push({path: `/classification/${(categoryL.id)}`})
      },
      
      _initBScroll () {
        this.$nextTick(() => {
          if (!this.Scroll) {
            this.Scroll = new BScroll('.Productleft', {click: true, scrollY: true})
          }
        })
      }
      
    },
    computed: {
      ...mapState({
        categoryL1: state => state.category.categoryL1List
      })
    },
    
    mounted () {
      let ProductList = document.querySelector('.productList')
      let topHeight = document.querySelector('.Search')
      let bottomHeight = document.querySelector('.footer_guide')
      let height = ProductList.clientHeight
      height = window.document.body.clientHeight - (topHeight.clientHeight + bottomHeight.clientHeight)
      ProductList.style.height = height + 'px'
      this._initBScroll()
      
      this.$store.dispatch('getcategoryL1List', () => {
        console.log('测试执行。。。')
        let id = this.categoryL1[0].id
        this._initBScroll()
        this.$router.push(`/classification/${id}`)
      })
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .Classification
    width 100%
    height 100%
    
    .Search
      position relative
      width 100%
      height 120px
      box-sizing border-box
      background-color white
      z-index 99
      
      .SearchContent
        position absolute
        left 0
        top 0
        bottom 0
        right 0
        margin auto
        width 90%
        height 50%
        border-radius 10px
        display flex
        justify-content center
        align-items center
        background-color #ededed;
        
        i
          
          font-size 35px
        
        span
          margin-left 15px
    
    .productList
      position absolute
      top 120px
      width 100%
      height 100%
      
      .Productleft
        float left
        width 20%
        height 100%
        
        ul
          width 100%
          
          li
            
            font-size 28px
            text-align center
            width 100%
            height 70px
            line-height 70px
            box-sizing border-box
            
            &.active
              left-border-px(#ab2b2b)


</style>
