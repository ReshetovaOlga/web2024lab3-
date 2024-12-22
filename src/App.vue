<script setup lang="ts">
import {ref} from'vue'

const searchResult = ref('')
const isShowSearch = ref(false)

const search = () =>{
  if(searchResult.value.length > 3){
    isShowSearch.value = true
  }else {
    isShowSearch.value = false
  }
}
</script>

<template>
  <header>
    <div class="container">
      <div class="head-picture">
        <img src="@/assets/pictures/pic2.jpg"  width="120" height="84"/>
      </div>
      <div class="head-text">
        <h1>Мифы и легенды</h1>
      </div>
      <nav>
        <div class="head-search">
          <ul>
            <li class="cart">
              <input type="search" v-model="searchResult" @keyup="search">
              <ul class="search-result" v-show="isShowSearch">
                <li>Легенда</li>
                <li>Легенда</li>
                <li>Легенда</li>
              </ul>
            </li>
            <li class="cart">
              <img src="@/assets/pictures/lo.png"/>
            </li>
          </ul>

        </div>
      </nav>
      <nav>
        <ul>
          <li class="cart">
            <router-link to="/login"><img src="@/assets/pictures/aw.png"/></router-link>
          </li>
          <li class="cart">
            <router-link to="/love"><img src="@/assets/pictures/ser.jpg"/></router-link>
          </li>
          <li class="cart">
            <router-link to="/"><img src="@/assets/pictures/home.jpg"/></router-link>
          </li>
        </ul>
      </nav>
    </div>


  </header>
  <RouterView />
  <footer>
    <div>
      ПВ-212 Решетова Ольга
      0-000-000-00-00
    </div>
    <div>
      БГТУ
    </div>

  </footer>

</template>
