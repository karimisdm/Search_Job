<script setup>


</script>
<template>
    <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3">
        <font-awesome-icon :icon="['fas','search']" class="ml-4 mr-3"/>
        <div class="flex flex-1 h-full flex-nowrap text-base font-light">
            <div class="relative flex flex-1 h-full items-center pr-3">
                <label class="absolute left-0 -top-10">Role</label>
                <input type="text" placeholder="Enter job title" class="w-full text-lg font-normal focus:outline-none"/>

            </div>
            <span class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3">
                in
            </span>
            <div class="relative flex flex-1 h-full items-center pl-3">
                <label class="absolute left-0 -top-10">Where?</label>
                <input type="text" placeholder="Enter location" class="w-full text-lg font-normal focus:outline-none"/>
            </div>
            
        </div>
        
    </form>
</template>