<script setup>
import { ref, onMounted } from "vue";

const data = ref([])

onMounted(() => {
    // check localStorage first
    let localStorageData = localStorage.getItem('data')
    let localStorageUpdate = localStorage.getItem('update')

    if (localStorageData !== null && localStorageData !== 'null'
        && localStorageUpdate !== null && localStorageUpdate !== 'null'
        && ((new Date() - new Date(localStorageUpdate)) / 1000 / 60 / 60 / 24) < 7) {
        data.value = JSON.parse(localStorageData)
    }

    // call github api to get info about our scripts
    fetch('https://api.github.com/users/ColdIV/repos?type=all&per_page=100&page=1').then(response => response.json()).then(response => {
        // store data in localStorage to avoid too many api calls
        let cleanData = []
        for (let i = 0; i < response.length; ++i) {
            cleanData[i] = {}
            cleanData[i].name = response[i].name
            cleanData[i].description = response[i].description
            cleanData[i].full_name = response[i].full_name
        }
        localStorage.setItem('data', JSON.stringify(cleanData))
        localStorage.setItem('update', new Date())

        data.value = cleanData
    })


})
</script>

<template>
    <h1>GitAPI</h1>
    <p>Test API Request rendered with a for loop.</p>
    <div class="grid">
        <div v-for="(item, i) in data" class="cell-12 md:cell-6 lg:cell-3 bg-green white rounded p-05 text-center relative">
            <div>
                <p><strong>{{ item.name }} - <span class="p-025 border mono border-white">i: {{ i }}</span></strong></p>
                <a :href="'https://github.com/' + item.full_name" class="stretch" target="_blank"
                    aria-label="{{ item.name }}"></a>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
