<script setup>
import ActionButton from './ActionButton.vue';
import TextInput from '@/components/TextInput.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const role = ref('');
const location = ref('');
const router = useRouter();


const searchJobs = ()=>{
    return router.push({name:'JobResults', query:{role, location}})

}


</script>
<template>
    <form @submit.prevent="searchJobs()" class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3">
        <font-awesome-icon :icon="['fas','search']" class="ml-4 mr-3"/>
        <div class="flex flex-1 h-full flex-nowrap text-base font-light">
            <div class="relative flex flex-1 h-full items-center pr-3">
                <label for="role" class="absolute left-0 -top-10">Role</label>
                <TextInput id="role" v-model="role" placeholder="Enter job title" />
            </div>
            <span class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3">
                in
            </span>
            <div class="relative flex flex-1 h-full items-center pl-3">
                <label for="location" class="absolute left-0 -top-10">Where?</label>
                <TextInput id="location" v-model="location" placeholder="Enter Location"/>
            </div>     
        </div>
        <ActionButton text="Search" type="secondary" class="rounded-r-3xl"/>
        
    </form>
    {{ location }} 
    {{ role }}
</template>