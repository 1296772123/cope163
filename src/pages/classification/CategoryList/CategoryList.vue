<template>
  <div class="Container">
    <div class="ProductRight">
      <div class="ContainerImage">
        <img
          src="http://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png"
          alt=""
        >
      </div>
      
      <div class="ContainerList">
        <ul v-if="thisCategory">
          <li v-for="item in thisCategory.subCateList">
            <img
              :src="item.bannerUrl"
              alt="">
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  
  export default {
    name: 'CategoryList',
    data () {
      return {}
    },
    mounted () {
      this.$nextTick(() => {
        if (!this.Scroll) {
          this.Scroll = new BScroll('.Container', {click: true, scrollY: true})
        }
      })
      
    },
    
    computed: {
      getId () {
        return this.$route.params.id
      },
      ...mapState({
        categoryL1: state => state.category.categoryL1List
      }),
      
      thisCategory: {
        get () {
          return this.categoryL1.find(item => {
            return item.id === this.getId * 1
          })
        },
        set (value) {
          console.log(value)
          this.thisCategory = value
        }
      }
      
    },
    
    // watch: {
    //
    //   thisCategory (val) {
    //     this.thisCategory = this.categoryL1.find(item => {
    //       return item.id === this.getId * 1
    //     })
    //   },
    // }
    
  }
</script>

<style lang="stylus" scoped>
  .Container
    float right
    width 80%
    height 100%
    
    .ProductRight
      width 90%
      margin 0 auto
      
      .ContainerImage
        width 100%
        height 230px
        margin-top 30px
        background-color red
        
        img
          width 100%
          height 100%
      
      .ContainerList
        height 100%
        display flex
        
        ul
          float left
          width 100%
          height 100%
          font-size 0
          
          li
            display inline-block
            width 33.333%
            height 250px
            text-align center
            
            img
              width 100%
              height 70%
            
            p
              float left
              width 100%
              height 20%
              font-size 28px
</style>
