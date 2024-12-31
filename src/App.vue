<template>
<Header></Header>
<router-view></router-view>
<Main></Main>
<FooterComp></FooterComp>
</template>

<script>

import Header from './components/Header.vue';
import FooterComp from './components/FooterComp.vue'
import Main from './components/Main.vue'
export default {
  name: 'App',
  components: {
    Header,
    Main,
    FooterComp   
  }
}
</script>

<style>
   
</style>
