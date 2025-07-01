<script setup>
const handleClick = ()=>{
    console.log("Button Clicked!");
};
defineProps(["text"]);
</script>

<template>
  <button class="rounded border-0 bg-brand-blue-1 px-5 py-3 font-medium text-white hover:shadow-blue">{{ text }}</button>
</template>
