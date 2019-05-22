<template>
  <div class="ListGoods">
    <ul>
      <li v-for="(navigation,index) in navigations" :key="index">
        <img :src="navigation.picUrl" alt="">
        <span>{{navigation.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ListGoods',
    props: {
      navigations: Array
    }
  }
</script>

<style lang="stylus">
  .ListGoods
    width 100%
    height 340px
    
    ul
      width 100%
      height 100%
      padding 10px
      box-sizing border-box
      
      li
        float left
        width 20%
        height 50%
        text-align center
        
        img
          margin 0 auto
          margin-bottom 10px
          width 100px
          height 100px
          background blule


</style>
