<script setup>
import { computed } from 'vue';
import CollapsibleAccordion from './CollapsibleAccordion.vue';
import {useJobsStore} from '@/stores/jobs.js';
import {useUserStore} from '@/stores/user.js';
import { storeToRefs } from 'pinia';

const jobsStore = useJobsStore();
const userStore = useUserStore();

const {selectedTypes}= storeToRefs(userStore)
const jobTypes = computed(()=>{
    return jobsStore.getUniqueJobTypes();
});

const handleChanges = ()=>{
    console.log(selectedTypes.value);
}
</script>
<template>
    <CollapsibleAccordion header = "JobTypes">
        <div class="mt-5">
            <fieldset>
                <ul class="flex flex-row flex-wrap">
                    <li v-for="jobType in jobTypes" :key="jobType" class="h-8 w-1/2">
                        <input :id="jobType" type="checkbox" v-model="selectedTypes" :value="jobType" @change="handleChanges" class="mr-3"/>
                        <label :for="jobType">{{ jobType }}</label>
                    </li>
                </ul>

            </fieldset>

        </div> 
    
    </CollapsibleAccordion>

</template>