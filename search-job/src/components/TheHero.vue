<script setup>
import TheHeadLine from './TheHeadLine.vue';
</script>
<template>
    <main>
        <section class="flex flex-col h-screen bg-yellow-200 pt-10 pb-20">
            <div class="grid grid-cols-12">
                <div class="col-span-1 col-start-1 border border-blue-400">
                  col 1
                </div>
                <div class="col-span-5 col-start-2 border border-blue-400">
                    <TheHeadLine/>

                </div>
                <div class="col-span-5 col-start-7 border border-blue-400">
                    col 5

                </div>
                <div class="col-span-1 col-start-12 border border-blue-400">
                    col 1
                </div>
            </div>
        </section>
    </main>
</template>