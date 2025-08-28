<script setup>
import { computed} from 'vue';
import { useRoute } from 'vue-router';
import { useJobsStore } from '@/stores/jobs.js';

const route = useRoute();
const jobsStore = useJobsStore();

const onJobResultsPage = computed( ()=>{
  return route.name === 'JobResults';
});

const getCountOfJobs = computed(()=>{
    return jobsStore.filteredJobs();
})
</script>
<template>
    <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
        <div class="flex h-full items-center px-8">
              <div v-if="onJobResultsPage">
                <font-awesome-icon :icon="['fas','search']" class="mr-3"/>
                <span><span class="text-brand-green-1"> {{ getCountOfJobs.length }} </span> jobs matched</span>

              </div>
        </div>
        
    </div>
</template>