<script setup>
import { defineProps } from 'vue';


const props = defineProps({
  job: {
    type: Object,
    required: true,
  }
});


</script>
<template>
    <li class="mb-7">
    <router-link
      :to="`/jobs/results/${job.id}`"
      class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white hover:shadow-gray"
    >
      <div class="mx-8 border-b border-solid border-brand-gray-2 pb-2 pt-5">
        <h2 class="mb-2 text-2xl">
          {{ job.title }}
        </h2>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>

          <div>
            <ul>
              <li v-for="location in job.location" :key="location" class="inline-block mr-5">
                <span>
                     {{ location }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div>
          <h3 class="mb-2 mt-1">Qualifications:</h3>
          <div>
            <ul class="list-disc pl-8">
              <li v-for="qualification in job.minimumQualifications" :key="qualification">
                 {{ qualification }}
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-2 text-center">
          <router-link :to="`/jobs/results/${job.id}`" class="text-brand-blue-1"
            >
            Expand
          </router-link>
          
        </div>
      </div>
    </router-link>
  </li>
</template>