<script setup>
import TheHeadLine from './TheHeadLine.vue';
import JobSearchForm from './JobSearchForm.vue';
import SpotLight from './SpotLight.vue';
</script>
<template>
    <main class="flex flex-col h-screen pt-10 pb-20">
        <section class="flex flex-col h-screen pt-10 pb-20">
            <div class="grid grid-cols-12">
                <div class="col-span-1 col-start-1">
                 
                </div>
                <div class="col-span-5 col-start-2">
                    <TheHeadLine/>
                    <JobSearchForm/>
                </div>
                <div class="col-span-5 col-start-7 self-center justify-self-center">
                    <img class="h-80 w-80 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" alt="Logo for company"/>
                </div>
                <div class="col-span-1 col-start-12">
                   
                </div>
            </div>
        </section>
        <spot-light class="flex flex-row justify-center pb-16">
          <template #default="{img, title, description}">
            <RouterLink to="jobs/results" class="mx-5 flex flex-col w-72 h-96 rounded-lg border bg-brand-gray-1">
                <img :src="img" class="object-contain" alt="spotlight image"/>
                <div class="mt-3 h-48 px-6 py-4">

                    <h3 class="text-lg font-medium">
                        {{ title }}
                    </h3>

                    <p class="mt-3 text-sm">
                        {{ description }}
                    </p>
                </div>
                <RouterLink to="jobs/results" class="px-6 pb-4 text-sm text-brand-blue-1">
                    See Jobs
                </RouterLink>

            </RouterLink>

          </template>

        </spot-light>

    </main>
</template>