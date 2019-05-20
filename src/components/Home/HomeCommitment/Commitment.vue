<template>
  <ul class="Commitment">
    <li v-for="(dataitem,index) in datas" :key="index">
      <img :src="dataitem.icon" alt="loading...">
      <span>{{dataitem.desc}}</span>
    </li>
  </ul>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    name: 'Commitment',
    computed: {
      ...mapState({
        datas: state => state.home.datas
      }),
    },
    
  }
</script>

<style lang="stylus">
  .Commitment
    width 100%
    height 80px
    display flex
    justify-content space-around
    align-items center
    
    li
      display flex
      justify-content space-around
      align-items center
      
      img
        vertical-align middle
        display inline-block
        width 42px
        height 42px
        margin-right 10px
      
      span
        vertical-align middle

</style>
