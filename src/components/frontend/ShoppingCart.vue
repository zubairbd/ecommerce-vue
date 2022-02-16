<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="(product,index) in products" :key="index">
       - {{product.title}} - {{product.price}} - {{product.quantity}}
      </li>
    </ul>
    <p>Total: {{total}}</p>
    <p>Item: {{cartItemCount}}</p>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  computed:{
    products(){
      return this.$store.getters.cartProducts
    },
    total(){
      return this.$store.getters.cartTotalPrice
    },
    cartItemCount(){
      return this.$store.getters.cartItemCount;
    },
  }
}
</script>

<style scoped>

</style>