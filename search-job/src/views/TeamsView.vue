<script setup lang="ts">
import HeaderContainer from '@/components/HeaderContainer.vue';
</script>
<template>
    <header-container>
        <template v-slot:title>
            <h1 class="w-full text-4xl font-normal">Teams</h1>
        </template>
        <template v-slot:subtitle>
            <h2 class="my-4 w-full text-sm font-light">
                Its awesome working here. Why don't you join us?
            </h2>

        </template>
    </header-container>

</template>