<script setup>
import {onMounted,onBeforeMount, onActivated,onBeforeUnmount} from 'vue'

onActivated(()=>{
    console.log('TheHeadLine component activated')
});
onBeforeMount(()=>{
    console.log('TheHeadLine component before mount')
})
onMounted(()=>{
    console.log('TheHeadLine component mounted')
})


</script>
<template>
    <section>
        <h1>
            Build for everyone
        </h1>
        <h2>
             Find your next job at MyCompany
        </h2>
    </section>
</template>