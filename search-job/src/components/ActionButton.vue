<script setup>
const handleClick = ()=>{
    console.log("Button Clicked!");
};
defineProps(["text","type"]);
</script>

<template>
  <button :class="{secondary:!type, primary:type}">{{ text }}</button>
</template>

<style>
button {
  font-size: medium;
  padding: 7px 14px;
  border-radius: 5px;
  background-color: #1967d2;
  color: white;

}
.primary {
  border: 0;
  background-color: #1967d2;
  color: white;
}
.primary:hover {
  box-shadow: 0 0 3px 3px #4285f4;
}
.secondary {
  background-color: transparent;
  color: #1967d2;
}
.secondary:hover {
  background-color: #4285f4;
  color: white;
}



/* .primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white
}
button {
  @apply rounded px-5 py-3 font-medium;
} */


</style>
