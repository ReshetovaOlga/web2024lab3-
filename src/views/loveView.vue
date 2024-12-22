<script setup>
import Illustration from "@/components/Legend/Illustration.vue";
import LinksBut from "@/components/ListLegend/LegendLinksBut/LinksBut.vue";

const legends = [  {
  id: 1,
  picture:'https://i.pinimg.com/originals/16/51/16/1651169fd238397ffa2668afb4f21c37.jpg'
},]

const buttons =[
  {
    id: 1,
    link:'/legend'
  },
  {
    id: 2,
    link:'/legend'
  },
  {
    id: 3,
    link:'/legend'
  },
  {
    id: 4,
    link:'/legend'
  },
  {
    id: 5,
    link:'/legend'
  },
  {
    id: 6,
    link:'/legend'
  },
  {
    id: 7,
    link:'/legend'
  },
  {
    id: 8,
    link:'/legend'
  },
]
</script>

<template>
  <main>
    <div class="container-main">
      <div v-for="legend in legends" :key="legend.id">
        <Illustration :legend="legend"/>
      </div>
      <section class="list-product">
        <div class="product-col-but" v-for="legend in buttons" :key="legend.id">
          <LinksBut :legend="legend"/>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>

</style>