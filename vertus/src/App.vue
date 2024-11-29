<template>
<Header></Header>
<Carrossel></Carrossel>
<Catalogue></Catalogue>
<router-link></router-link>
</template>

<script>

import Header from './components/Header.vue';
import Carrossel from './components/Carrossel.vue';
import Catalogue from './components/Catalogue.vue';

export default {
  name: 'App',
  components: {
    Header,
    Carrossel,
    Catalogue,
  }
}
</script>

<style>

</style>
