<script setup>
import {computed, ref} from 'vue'
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
});
const actionClass = computed(()=>{
    return {
      [action.value.toLowerCase()]: true
    }
});


</script>
<template>
    <section>
        <h1 class="mb-14 text-8xl font-bold tracking-tighter">
           <span :class="actionClass">{{ action }}</span><br/>
             for everyone
        </h1>
        <h2 class="text-3xl font-light">
             Find your next job at MyCompany
        </h2>
    </section>
</template>
<style scoped>
.build {
    color: #1a73e8;
}
.design {
    color: #f9ab00;
}
.create {
    color: #34a853;
}
.code {
    color: #d93025;
}
</style>