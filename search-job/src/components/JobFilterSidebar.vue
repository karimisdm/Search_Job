<script setup>
import ActionButton from '@/components/ActionButton.vue';
import CollapsibleAccordion from './CollapsibleAccordion.vue';
</script>
<template>
    <div
    class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
    >
    <section class="pb-5">
        <div class="flex flex-row justify-between">
          <h3 class="my-4 text-base font-semibold">What do you want to do? </h3>
          <div class="flex item-center text-sm">
            <action-button text="Clear Filters" type="secondary"/>
          </div>
        </div>
        <collapsible-accordion>
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
    </section>



    </div>
</template>