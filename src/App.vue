<script setup>
import { ref } from 'vue'
import Footer from './components/Footer.vue'

defineProps({
  msg: String,
  count: Number,
})

const msg = ref("test1234")
const count = ref(0)
</script>

<template>
  <header class="py-1">
    <nav>
      <ul class="unstyled row align-center">
        <li>
          <a href="#" aria-label="Vite Logo"><img src="/vite.svg" alt="Vite Logo"></a>
        </li>
        <li class="ml-1">
          <router-link :to="{ name: 'home', params: { msg: msg }}">Home</router-link><br>
        </li>
        <li class="ml-1">
          <router-link :to="{ name: 'count', params: { count: count }}">Count</router-link>
        </li>
        <li class="ml-1">
          <router-link to="/test">Test</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main class="py-1">
    <router-view></router-view>
  </main>
  <Footer year="2023" />
</template>

<style scoped>
</style>
