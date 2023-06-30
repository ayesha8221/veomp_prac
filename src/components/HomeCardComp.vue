<template>
<div class="container">
    <!-- <h2 class="text-white text-center display-3">Products: </h2> -->
    <div class="card mx-auto my-2">
            <router-link :to="{name: 'category', params :{id: category.id}}">
                <div class="card">
  <img :src="category.image" class="card-img-top" alt="">
  <div class="card-body">
    <a href="#" class="btn btn-primary">{{ category.name }}</a>
  </div>
</div>
            <!-- <img :src="product.image" :alt="product.name">
       <h3>{{product.name}}</h3>
        <p>{{product.price}}</p>
        <button v-on:click="addToCart" class="addbtn">Add to cart</button> -->
            </router-link>
    </div>
</div>
</template>
<script>
export default {
    props: ["category"]
};



    

</script>
<style>
.card {
    width: 18rem !important;
}
</style>