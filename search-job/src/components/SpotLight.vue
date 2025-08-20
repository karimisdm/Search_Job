<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const baseUrl = import.meta.env.VITE_APP_API_URL;
const url = `${baseUrl}/spotlights`;
const spotLights = ref([]);

const fetchSpots = async()=>{
    const response = await axios.get(url);
    spotLights.value = response.data;
    return spotLights.value;
}

onMounted(()=>{
    fetchSpots();
})

</script>
<template>
        <ul>
            <li v-for="spotlight in spotLights" :key="spotlight.id">
                <slot :img="spotlight.img" :title="spotlight.title" :description="spotlight.description"></slot>
            </li>
        </ul>

</template>