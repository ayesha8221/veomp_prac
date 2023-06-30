<template>
  <NavbarComp/>
  <FooterComp/>
  <CartComp/>
  <router-view/>
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import CartComp from './components/CartComp.vue';

export default {
  components: {
     NavbarComp, FooterComp, CartComp
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
