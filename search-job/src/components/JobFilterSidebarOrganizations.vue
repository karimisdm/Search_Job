<script setup>
 import CollapsibleAccordion from "@/components/CollapsibleAccordion.vue";
 import {useJobsStore} from "@/stores/jobs.js";
import { computed } from "vue";

 const jobsStore = useJobsStore();
 const Organizations = computed(()=>{
     return jobsStore.getOrganizationOfJobs();
 });

</script>
<template>
    
      <collapsible-accordion header="Organization">
           <div class="mt-5">
             <fieldset>
              <ul class="flex flex-row flex-wrap">
                <li v-for="organization in Organizations" :key="organization" class="h-8 w-1/2">
                  <input :id="organization" type="checkbox" class="mr-3"/>
                  <label :for="organization">{{ organization }}</label>
                </li>
              </ul>
             </fieldset>
           </div>
        </collapsible-accordion>
</template>
