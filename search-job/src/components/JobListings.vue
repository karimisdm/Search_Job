<script setup>
import JobListing from '@/components/JobListing.vue'
import axios from 'axios';
import { onMounted } from 'vue';

const url="http://localhost:3000/jobs"

const fetchJobs = async()=>{
    const response = await axios.get(url);
    console.log(response.data);
};

onMounted(()=>{
    fetchJobs();
});


</script>
<template>
    <main class="flex-auto bg-brand-gray-2 p-8">
        <ol>
          <job-listing/>
          <job-listing/>
          <job-listing/>
        </ol>
    </main>
</template>