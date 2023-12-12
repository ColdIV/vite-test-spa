<script setup>
import { ref } from 'vue'
async function getData () {
  // check localStorage first
  let localStorageData = localStorage.getItem('data')
  let localStorageUpdate = localStorage.getItem('update')

  if (localStorageData !== null && localStorageData !== 'null'
      && localStorageUpdate !== null && localStorageUpdate !== 'null'
      && ((new Date() - new Date(localStorageUpdate)) / 1000 / 60 / 60 / 24) < 7)
  {
      return JSON.parse(localStorageData)
  }

  // call github api to get info about our scripts
  let response = await fetch('https://api.github.com/users/ColdIV/repos?type=all&per_page=100&page=1')
  let data = await response.json()

  // store data in localStorage to avoid too many api calls
  let cleanData = []
  for (let i = 0; i < data.length; ++i) {
      cleanData[i] = {}
      cleanData[i].name = data[i].name
      cleanData[i].description = data[i].description
      cleanData[i].full_name = data[i].full_name
  }
  localStorage.setItem('data', JSON.stringify(cleanData))
  localStorage.setItem('update', new Date())

  return cleanData
}

const data = ref(await getData())
</script>

<template>
  <h1>GitAPI</h1>
  <p>Test API Request rendered with a for loop.</p>
  <p>I am using the <code>&lt;Suspense&gt;</code> tag here, it should usually only wrap the content that is loaded async. It also is an experimental feature, how do you do that properly right now?</p>
  <div class="grid">
    <div v-for="(item, i) in data" class="cell-6 lg:cell-3 bg-green white rounded p-05 text-center relative">
      <div>
        <p><strong>{{ item.name }} - <span class="p-025 border mono border-white">i: {{ i }}</span></strong></p>
        <a :href="'https://github.com/' + item.full_name" class="stretch" target="_blank" aria-label="{{ item.name }}"></a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
