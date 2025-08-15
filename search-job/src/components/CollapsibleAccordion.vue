<script setup>
import { ref, computed} from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    header: {
        type: String,
        required: true
    }
})
const isOpen = ref(false);

const open = ()=>{
    isOpen.value = !isOpen.value;
};
const selectIcon = computed(() =>  
    isOpen.value? ["fa", "angle-up"] : ["fa", "angle-down"]
);


</script>

<template>
 <div class="border-b border-solid border-brand-gray-2 py-5">
    <div class="flex cursor-pointer flex-wrap items-center justify-between"
       @click="open" role="button">
        <h3 class="text-base font-semibold">{{ props.header }}</h3>
        <font-awesome-icon :icon="selectIcon"/>
    </div>
    <div v-if="isOpen" class="mt-5 w-full">
        <slot></slot>
    </div>
    
 </div>
</template>