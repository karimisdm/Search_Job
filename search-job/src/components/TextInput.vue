<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
})

const HandleInput = (event)=>{
    emit('update:modelValue', event.target.value);
};

</script>
<template>
    <input  type="text" :value="modelValue" @input="HandleInput" class="w-full text-lg font-normal focus:outline-none"/>
     
</template>