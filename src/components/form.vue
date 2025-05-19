<template>
    <div class="container-fluid m-5">
        <h2 class="text">Заполни форму и скоро мы добавим этого персонажа на сайт</h2>
        <div class="col-8">
          <label for="validationDefaultUsername" class="form-label mt-4">Твой ник на сайте</label>
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">Ω</span>
            <input type="text" id="validationDefaultUsername" v-model="store.nickname" class="form-control" aria-describedby="inputGroupPrepend2" required />
            </div>
        </div>
        <div class="col-8">
          <label for="validationDefault03" class="form-label mt-3">Какого персонажа не хватает?</label>
          <input type="text" id="validationMsg" v-model="store.msg" class="form-control" required />
        </div>
        <div class="col-12">
          <button type="submit" @:click="store.sendmessage()" class="btn btn-light my-5">Отправить форму</button>
        </div>
    </div>
</template>

<script setup>
  import { PonyStore } from '@/store'
  const store = PonyStore()

</script>