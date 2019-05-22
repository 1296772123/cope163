<template>
  
  <div>
    <div class="content"
         v-for="(categorymodule,index) in categorymodules" :key="index"
    >
      <div class="BetterTop">
        <a :href="categorymodule.titleSchemeUrl">
          <img
            :src="categorymodule.titlePicUrl"
            alt="">
        </a>
      </div>
      <BetterScroll :categorymodule="categorymodule" :index="index"/>
      <Frame/>
    </div>
  </div>

</template>

<script>
  
  import {mapState} from 'vuex'
  import BetterScroll from './betterScroll/betterScroll'
  
  export default {
    name: 'HomeBetterScroll',
    components: {
      BetterScroll
    },
    
    data () {
      return {
        BetterScrollIndex: 0
      }
    },
    
    computed: {
      // listenshowpage1 () {
      //   return this.$store.state.categoryModule
      // },
      ...mapState({
        categorymodules: state => state.home.categoryModule
      })
      
    },
    
    // updated () {
    //
    //   let that = this
    //   this.$nextTick(() => {
    //     if (!this.categorymodules) return
    //     console.log(this.categorymodules)
    //     console.log(this.$refs, 'refs')
    //
    //     //$refs绑定元素
    //     this.categorymodules.forEach((item, index) => {
    //       console.log(item, index, 'index')
    //       new BScroll(this.$refs.test1, {
    //         //开启点击事件 默认为false
    //         click: true,
    //         scrollX: true
    //       })
    //       if (!that.scroll[index]) {
    //         that.scroll[index] = new BScroll(that.$refs.index[index], {
    //           //开启点击事件 默认为false
    //           click: true,
    //           scrollX: true,
    //           scrollY: true
    //         })
    //         // console.log(this.scroll)
    //       } else {
    //         that.scroll[index].refresh()
    //       }
    //     })
    //   })
    //
    // },
    // watch: {
    //   listenshowpage1: (old, newd) => {
    //     console.log(old, newd, '----------')
    //   },
    //   categorymodules (newValue) {
    //
    //   }
    // }
  }
</script>

<style lang="stylus" scoped>
  .content
    width 100%
    height 800px
    
    .BetterTop
      width 100%
      height 350px
      
      a
        width 100%
        height 100%
        display block
        
        img
          width 100%
          height 100%


</style>
