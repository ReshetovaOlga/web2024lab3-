<script setup>
defineProps({
  product:{}
})
</script>

<template>
  <div class="product-item">
    <img :src="product.picture"/>
    <h3>{{product.name}}</h3>
    <router-link :to="product.link"><button class="but-myth"> легенда </button></router-link>
  </div>

</template>

<style scoped>

</style>