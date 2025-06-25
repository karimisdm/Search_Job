<script setup>
const companyName = "MyJobMarket";
const url = "http://careers.google.com";
const menuItems = ["Teams", "Jobs", "Locations", "Life at MyJobMarket", "How we hire", "Students"];
</script>

<template>
    <header class="w-full text-sm">
        <div class="fixed top-0 left-0 h-16 w-full bg-white">
            <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
                <a :href= 'url' class="flex h-full items-center align-middle text-xl">
                    {{companyName}}
                </a>
                <nav class="ml-12 h-full">
                    <ul class="flex h-full list-none">
                        <li v-for="item in menuItems" :key="item.id"  class="ml-9 h-full" >
                            <a href="" class="flex h-full items-center py-2.5 ">
                                {{ item }}
                            </a>
                        </li>
                  
                 
                    </ul>
                </nav>

            </div>
        </div>
    </header>

</template>