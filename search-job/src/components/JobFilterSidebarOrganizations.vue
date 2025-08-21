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
                <li class="h-8 w-1/2">
                  <input id="VueTube" type="checkbox" class="mr-3"/>
                  <label for="VueTube">VueTube</label>
                </li>

                <li class="h-8 w-1/2">
                  <input id="Angular" type="checkbox" class="mr-3"/>
                  <label for="Angular">Angular</label>
                </li>

                <li class="h-8 w-1/2">
                  <input id="Between Vue and me" type="checkbox" class="mr-3"/>
                  <label for="Between Vue and me">Between Vue and me</label>
                </li>
              </ul>
             </fieldset>
           </div>
        </collapsible-accordion>
        {{ Organizations }}
</template>
