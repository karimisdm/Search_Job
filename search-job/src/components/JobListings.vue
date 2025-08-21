<script setup>
import JobListing from '@/components/JobListing.vue'
import { computed, onMounted} from 'vue';
import { useRoute} from 'vue-router';
import {useJobsStore} from '@/stores/jobs.js';
import { storeToRefs } from 'pinia';


const jobsStore = useJobsStore();
const {jobs} = storeToRefs(jobsStore);
const route = useRoute();

const fetchJobs = async()=>{
    await jobsStore.fetchJobsAndStore();
    // console.log(jobs.value);
};

onMounted(()=>{
    fetchJobs();
});

const currentPage = computed(()=>{
    return route.query.page ? Number(route.query.page): 1;
});
const previousPage = computed(()=>{
    return currentPage.value > 1 ? currentPage.value - 1 :null;
});
const nextPage = computed(()=>{
    return currentPage.value < Math.ceil(jobs.value.length / 10)? currentPage.value + 1 : null;
});


const displayJobs = computed(()=>{
    const numberOfPages = currentPage.value;
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
                <div class="flex items-center justify-center">
                    <router-link v-if="previousPage" :to="{name: 'JobResults', query: {page: previousPage}}"
                     class="mx-3 text-sm font-semibold text-brand-blue-1" role="link">
                        Previous
                    </router-link>
                </div>
                <div>
                    <router-link v-if="nextPage" :to="{name: 'JobResults', query: {page: nextPage}}"
                     class="mx-3 text-sm font-semibold text-brand-blue-1" role="link">
                        Next
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>