<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['UpdatedInput']);

const HandleInput = (event)=>{
    emit('UpdatedInput', event.target.value);
};

</script>
<template>
    <input  type="text" @input="HandleInput" class="w-full text-lg font-normal focus:outline-none"/>
     
</template>