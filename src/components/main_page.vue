<template>
  <div class="main-content">
    <div class="d-flex justify-content-center">{{ store.name }}</div>
    <ul class="w-75 d-flex justify-content-end">
      <li style="list-style-type: none; " class="list-group list-group-horizontal col-8">
          <div class="list-group-item flex-fill col-4">
            Имя
          </div>
          <div class="list-group-item flex-fill col-4">
            Знак отличия
          </div>
      </li>
    </ul>
    <ul class="w-75" id="list">
      <li v-for="item in store.aradata" style="list-style-type: none; " class="list-group list-group-horizontal col-8 d-flex justify-content-center">
          <div class="list-group-item flex-fill col-4">
            <img :src="item['pony']" alt="Пони" width="50px" height="50px">
            {{ item.name }} 
          </div>
          <div class="list-group-item flex-fill col-4">
            <img :src="item['mark']" alt="Знак отличия пони" width="50px" height="50px">
          </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.main-content{
  margin-top: 20px;
}

#list {
  margin-left: 24.3%;
}
</style>

<script setup>
  import { PonyStore } from '@/store'
  const store = PonyStore()

</script>
