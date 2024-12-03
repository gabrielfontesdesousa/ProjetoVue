<template>
<Header></Header>
<router-view></router-view>
<FooterComp></FooterComp>
</template>

<script>

import Header from './components/Header.vue';
import FooterComp from './components/FooterComp.vue'
export default {
  name: 'App',
  components: {
    Header,
    FooterComp
  }
}
</script>

<style>
  
</style>
