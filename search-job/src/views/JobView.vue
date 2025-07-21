<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const getJobId = computed(()=>{
    return route.params.id;
})

</script>
<template>
    <div>
    this is  {{ getJobId }}
    </div>
</template>