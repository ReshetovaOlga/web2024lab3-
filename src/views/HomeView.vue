<script setup lang="ts">
import Cover from "@/components/HomePage/Cover.vue";

const covers = [
  {
    id: 1,
    name: 'Мифы Древней Греции',
    picture:'https://i.pinimg.com/736x/cd/e0/af/cde0af9f52462784b00fa79ea597b31c.jpg',
    link: '/readList'
  },
  {
    id: 2,
    name: 'Египетские Мифы',
    picture:'https://i.pinimg.com/736x/95/2d/59/952d5974b5aa537ae7540609d8143aa0.jpg',
    link: '/readList'
  },
  {
    id: 3,
    name: 'Мифы Скандинавии',
    picture:'https://i.pinimg.com/550x/21/e2/8c/21e28c4101bea0b1bcd3ddb1c07cd6e9.jpg',
    link: '/readList'
  },
  {
    id: 4,
    name: 'Мифы Древнего Китая',
    picture:'https://ferrebeekeeper.wordpress.com/wp-content/uploads/2016/04/tumblr_inline_mymnxukf921riq4b1.jpg',
    link: '/readList'
  },
  {
    id: 5,
    name: 'Славянские Мифы',
    picture:'https://i.pinimg.com/736x/35/d4/00/35d40081f637bad5d1e3354d185d8c62.jpg',
    link: '/readList'
  },
  {
    id: 6,
    name: 'Японские Мифы',
    picture:'https://u.livelib.ru/reader/IrinaLeuhina/o/ijik9td3/o-o.jpeg',
    link: '/readList'
  },
  {
    id: 7,
    name: 'Индийские Мифы',
    picture:'https://i.pinimg.com/originals/30/21/2d/30212d4ae6642a408d47ab703766e2c2.jpg',
    link: '/readList'
  },
  {
    id: 8,
    name: 'Африканские Мифы',
    picture:'https://i.pinimg.com/736x/aa/42/e0/aa42e0ba9b34b2a6b541615eec63a4d1--filly-fantasy-creatures.jpg',
    link: '/readList'
  },
  {
    id: 9,
    name: 'Ирландские Мифы ',
    picture:'https://i.pinimg.com/originals/b8/1d/db/b81ddb56740c9023c64ea660e3abc0c8.jpg',
    link: '/readList'
  },
]
</script>

<template>
  <main>
    <div class="container-main">
      <section class="list-product">
        <div class="product-col" v-for="product in covers" :key="product.id">
          <cover :product="product"/>
        </div>
      </section>
    </div>
  </main>
</template>
