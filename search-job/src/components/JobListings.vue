<script setup>
import JobListing from '@/components/JobListing.vue'
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const url="http://localhost:3000/jobs";
const jobs = ref([]);
const route = useRoute();

const fetchJobs = async()=>{
    const response = await axios.get(url);
    jobs.value = response.data;
    console.log(jobs.value);
};

onMounted(()=>{
    fetchJobs();
});

const currentPage = computed(()=>{
    return route.query.page ? Number(route.query.page): 1;
})


const displayJobs = computed(()=>{
    const numberOfPages = route.query.page ? Number(route.query.page):1;
    const startIndex = (numberOfPages-1)*10;
    const endIndex = numberOfPages * 10;
    if(startIndex >= jobs.value.length){
      return [];
    }
    return jobs.value.slice(startIndex, endIndex);
});


</script>
<template>
    <main class="flex-auto bg-brand-gray-2 p-8">
        <ol>
          <job-listing v-for="job in displayJobs" :key="job.id" :job="job"/>

        </ol>
        <div class="mx-auto mt-8">
            <div class="flex flex-row flex-nowrap">
                <p class="flex-grow text-sm">Page {{ currentPage }}</p>
            </div>
        </div>
    </main>
</template>