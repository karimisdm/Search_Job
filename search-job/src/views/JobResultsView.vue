<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = ()=>{
    router.push({name:'home'});
}

</script>
<template>
    <h2>
        Job Results Page
    </h2>
    <button @click="goHome">go to home</button>
   
</template>