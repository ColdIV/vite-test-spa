<script setup>
import { ref } from 'vue'

const count = ref(0)
const items = ref([{ cardTitle: 'Foo', cardBody: 'Bar' }, { cardTitle: 'Card Title', cardBody: 'Card Body' }, { cardTitle: 'Abc', cardBody: '123' }])
</script>

<template>
  <h1>Home {{ $route.params.msg }}</h1>

  <div class="grid">
    <div v-for="(item, index) in items" class="cell-12 lg:cell-4 hover-lift">
      <div class="card p-1 hover-shadow bg-green rounded">
        <p><strong>{{ item.cardTitle }} - {{ index }}</strong></p>
        <p>{{ item.cardBody }}</p>

      </div>
    </div>
  </div>

  <div class="bg-white rounded hover-shadow py-05 px-1 mt-1">
    <p class="m-0 black">See the current value of <strong><router-link
          :to="{ name: 'count', params: { count: count } }">Count</router-link></strong> (<strong class="mono black">{{
            count }}</strong>)</p>
    <button type="button" @click="count++" class="m-0">
      Increase count
    </button>
  </div>
</template>

<style scoped></style>
