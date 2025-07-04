<script setup>
import {ref} from 'vue'
import {onMounted,onBeforeMount,onBeforeUnmount} from 'vue'

const action = ref('Build');
const actions = ['Build','Create','Design','Code'];
const interval = ref({});

const changedTitle = ()=>{
        interval.value = setInterval(()=>{
        const indexAction = actions.indexOf(action.value);
       const nextIndex  = (indexAction + 1) % actions.length;
       action.value = actions[nextIndex];
    }, 3000); 
}

onBeforeMount(()=>{
     console.log('TheHeadLine component before mount');
})
onMounted(()=>{
    console.log('TheHeadLine component mounted');
    changedTitle();
   
});
onBeforeUnmount(()=>{
    clearInterval(interval.value);
})


</script>
<template>
    <section>
        <h1>
            {{ action }} for everyone
        </h1>
        <h2>
             Find your next job at MyCompany
        </h2>
    </section>
</template>