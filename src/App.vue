<template>
<Header></Header>
<router-view></router-view>
<FooterComp></FooterComp>
</template>

<script>

import FooterComp from './components/FooterComp.vue';
import Header from './components/Header.vue';


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
