<script setup>
const handleClick = ()=>{
    console.log("Button Clicked!");
};
defineProps(["text"]);
</script>

<template>
  <button class="rounded border-0 bg-brand-blue-1 text-white  px-5 py-3 font-medium hover:shadow-blue ">{{ text }}</button>
</template>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium ;
}
.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white

}


</style>
