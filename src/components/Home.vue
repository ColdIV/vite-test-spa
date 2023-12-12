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
        <p><strong>{{item.cardTitle}} - {{index}}</strong></p>
        <p>{{item.cardBody}}</p>
        <p>The current value of <strong class="mono black">count</strong> is: <strong class="mono black">{{count}}</strong></p>
        <button 
          type="button"
          @click="count++"
          style="--button-border-color: var(--white);
                --button-background: var(--white);
                --button-color: var(--black);
                --button-hover-color: var(--white);
                --button-hover-background: var(--black);
                --button-hover-border-color: var(--black);
                --button-active-background: var(--black);
                --button-active-border-color: var(--gray);
          ">
          Increase count
        </button>
      </div>
    </div>
  </div>

  <div class="bg-white rounded hover-shadow py-05 px-1 mt-1">
    <p class="m-0 black">See the current value of <strong><router-link :to="{ name: 'count', params: { count: count }}">Count</router-link></strong></p>
  </div>
</template>

<style scoped>

</style>
