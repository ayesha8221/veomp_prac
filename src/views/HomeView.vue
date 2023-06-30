<template>
  <CarouselComp/>
  <div v-if="products" class="flex-container row row-cols-3">
        <HomeCardComp v-for="category of categories" :key="category.id" :category="category" />
    </div>
    <div v-else>Loading...</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CarouselComp from '@/components/CarouselComp.vue'
import HomeCardComp from '@/components/HomeCardComp.vue';

export default {
  name: 'HomeView',
  computed: {
    categories() {
            return this.$store.state.categories
        }
    },

    mounted() {
        this.$store.dispatch("getCategories")
    },
   components: {
    HelloWorld,
    CarouselComp,
    HomeCardComp
}
  }
  
  

</script>
