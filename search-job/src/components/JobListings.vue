<script setup>
import JobListing from '@/components/JobListing.vue'
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';


const url="http://localhost:3000/jobs";
const jobs = ref([]);

const fetchJobs = async()=>{
    const response = await axios.get(url);
    jobs.value = response.data;
    console.log(jobs.value);
};

onMounted(()=>{
    fetchJobs();
});
const displayJobs = computed(()=>{
    return jobs.value.slice(0,10);
});


</script>
<template>
    <main class="flex-auto bg-brand-gray-2 p-8">
        <ol>
          <job-listing v-for="job in displayJobs" :key="job.id" :job="job"/>

        </ol>
    </main>
</template>