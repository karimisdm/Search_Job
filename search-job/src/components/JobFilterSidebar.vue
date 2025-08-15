<script setup>
import ActionButton from '@/components/ActionButton.vue';
import CollapsibleAccordion from './CollapsibleAccordion.vue';
import JobFilterSidebarOrganizations from './JobFilterSidebarOrganizations.vue';
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
        <collapsible-accordion header="Types"/>
        <job-filter-sidebar-organizations />
    </section>



    </div>
</template>