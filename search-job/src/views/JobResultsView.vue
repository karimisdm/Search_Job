<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import JobFilterSidebar from '@/components/JobFilterSidebar.vue'
import JobListings from '@/components/JobListings.vue'

const router = useRouter();

const goHome = ()=>{
    router.push({name:'home'});
}

</script>
<template>
   <div class="flex w-full flex-row flex-nowrap">
    <JobFilterSidebar/>
    <JobListings/>

   </div>
         
   
</template>