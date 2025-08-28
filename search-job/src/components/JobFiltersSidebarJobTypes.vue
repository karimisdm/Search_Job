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
                <ul>
                    <li v-for="jobType in jobTypes" :key="jobType">
                        <input :id="jobType" type="checkbox" v-model="selectedTypes" :value="jobType" @change="handleChanges"/>
                        <label :for="jobType">{{ jobType }}</label>
                    </li>
                </ul>

            </fieldset>

        </div> 
    
    </CollapsibleAccordion>

</template>