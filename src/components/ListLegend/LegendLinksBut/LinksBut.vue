<script setup>
defineProps({
  legend:{}
})
</script>

<template>
  <div class="product-item-but">
    <router-link :to="legend.link"><button class="but-myth"> легенда </button></router-link>
  </div>
</template>

<style scoped>

</style>