<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import JobFilterSidebar from '@/components/JobFilterSidebar.vue'
import JobListing from '@/components/JobListing.vue'

const router = useRouter();

const goHome = ()=>{
    router.push({name:'home'});
}

</script>
<template>
    <h2>
        <JobFilterSidebar/>
        <JobListing/>
    </h2>
    
   
</template>