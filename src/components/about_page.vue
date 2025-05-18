<template>
  <div class="main-content">
    <h1 class="name text-center"> {{ store.aradata[0].engname }} </h1>
    <p class="text-center">Тип пони: {{ store.aradata[0].kind }}</p>
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

</script>
