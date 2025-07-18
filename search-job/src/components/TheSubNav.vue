<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const onJobResultsPage = computed( ()=>{
  return route.name === 'JobResults';
});
</script>
<template>
    <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
        <div class="flex h-full items-center px-8">
              <div v-if="onJobResultsPage">
                <font-awesome-icon :icon="['fas','search']" class="mr-3"/>
                <span><span class="text-brand-green-1"> 1459 </span> jobs matched</span>

              </div>
        </div>
        
    </div>
</template>