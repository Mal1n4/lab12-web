<template>
  <div class="main-content">
    <h1 class="name text-center"> {{ store.aradata[0].engname }} </h1>
    <h3 class="text-center mt-5">Тип персонажа </h3>
    <li v-for="item in store.aradata[0].kind" style="list-style-type: none; " class="d-flex justify-content-center">
          <div>
            <p> {{item }}</p>
          </div>
    </li>
    <h3 class="text-center mt-5">Дом</h3>
    <p class="text-center">{{ store.aradata[0].residence }}</p>
    <h3 class="text-center mt-5">Деятельность</h3>
    <p class="text-center">{{ store.aradata[0].occupation }}</p>
    <h3 class="text-center mt-5">Страница Wiki</h3>
    <p class="d-flex justify-content-center">{{ store.aradata[0].wiki }}</p>
    <h3 class="text-center mt-5">Галерея</h3>
    <li v-for="item in store.aradata[0].image" style="list-style-type: none; " class="d-flex justify-content-center">
          <div>
            <img :src="item" alt="Пони" class="m-5">
          </div>
    </li>

  </div>
</template>

<style scoped>
.main-content{
  margin-top: 50px;
  margin-bottom: 50px;
}

#list {
  margin-left: 24.3%;
}

.router-link-exact-active,
.router-link-active {
  color: inherit; 
  text-decoration: none; 
}

a {
  color: inherit; 
  text-decoration: none; 
}
</style>

<script setup>
  import { PonyStore } from '@/store'
  const store = PonyStore()
  store.getApidata()
  const link  = store.aradata[0].wiki;
</script>
