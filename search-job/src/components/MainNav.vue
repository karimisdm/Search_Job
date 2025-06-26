<script setup>
import ActionButton from '@/components/ActionButton.vue'
const companyName = "MyJobMarket"
const url = "http://careers.google.com"
const menuItems = [
  "Teams",
  "Jobs",
  "Locations",
  "Life at MyJobMarket",
  "How we hire",
  "Students",
  "Jobs"
]
</script>

<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="mx-auto flex flex-nowrap h-full border-b border-solid border-gray-300 px-8">
        <a :href="url" class="flex h-full items-center text-xl">
          {{ companyName }}
        </a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="item in menuItems"
              :key="item"
              class="ml-9 h-full first:ml-0"
            >
              <a href="" class="flex h-full items-center py-2.5">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
            <ActionButton/>
        </div>
      </div>
    </div>
  </header>
</template>
