<script setup>
import { ref } from 'vue'

defineProps({
  year: String,
})

const count = ref(0)
</script>

<template>
  <footer class="py-1 border-top border-white">
    <div class="row between">
      <span>VueTest</span>
      <span>{{year}}</span>
    </div>
  </footer>
</template>

<style scoped>
</style>
