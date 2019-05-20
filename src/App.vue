<template>
  <div class="app">
    <router-view></router-view>
    <FooterNav v-show="$route.meta.isShow"></FooterNav>
  </div>
</template>

<script>
  import FooterNav from './components/Footernavigation/Footernavigation'
  
  export default {
    name: 'App',
    components: {
      FooterNav
    },
    
  }
</script>

<style lang="stylus" scoped>
  .app
    width 100%
    height 100%
</style>
