<template>
    <div v-if="category" class="category_details" :key="category.id" :category="category">
        <div class="card mx-auto">
            <div class="card text-black border-white border-2 text-center ">
            <img :src="category.image" :alt="category.name"/>
                <div class="card-body m-2">
                    <p>{{ category.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // props: ["id"],

    mounted() 
{
    this.$store.dispatch("getCategory", this.id)
},
    computed: {
        category() {
            return this.$store.state.category
        },
    },
}
</script>
<style>
    
</style>