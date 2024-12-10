<template>
    <Carrossel></Carrossel>
    <Catalogue></Catalogue>  
    <FooterComp></FooterComp>
</template>
    
    <script>
    
    import Carrossel from './Carrossel.vue';
    import Catalogue from './Catalogue.vue'
    import FooterComp from './FooterComp.vue'
    export default {
      name: 'HomePage',
      components: {
        Carrossel,
        Catalogue,
        FooterComp
      }
    }
    </script>
    
    <style>
   
    </style>
    