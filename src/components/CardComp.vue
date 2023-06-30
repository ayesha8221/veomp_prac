<template>
    <div class="container">
        <div class="card mx-auto my-2">
            <router-link :to="{ name: 'product', params: { id: product.id } }">
                <img :src="product.image" :alt="product.name" />
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
                <button v-on:click="addToCart" class="addbtn">Add to cart</button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  props: ["product"],
};

//         function addToCart(productId) {
//   const product = product.find((product) => product.id === productId);
//   if (product && product.quantity > 0) {
//     cart.push(product);
//     product.quantity--;
//     updateCart();
//   }
//         }
//           function updateCart() {
//             const cartContainer = document.getElementById("cart-body");
//             localStorage.setItem("Products", JSON.stringify(cart));
//             cartContainer.innerHTML = "";
//             cart.forEach((product, index) => {
//               const cartItem = document.createElement("div");
//               cartItem.innerHTML = `
//                   <span>${product.name}</span>
//                   <span>${product.price}</span>
//                   <button onclick="removeFromCart(${index})" class="rembutton"><img class="delete" src="https://i.postimg.cc/4NFKkLG0/3102186.png" alt="delete"></button>
//                   <br>
//                 `;
//               cartContainer.appendChild(cartItem);
//             });
//             calculateTotal();
//           }
</script>
<style>
/* body {
        overflow: hidden;
    } */
</style>
