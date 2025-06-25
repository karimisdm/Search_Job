<script setup>
const companyName = "MyJobMarket"
const url = "http://careers.google.com"
const menuItems = [
  "Teams",
  "Jobs",
  "Locations",
  "Life at MyJobMarket",
  "How we hire",
  "Students"
]
</script>

<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="mx-auto flex items-center h-16 border-b border-solid border-gray-300 px-8">
        <a :href="url" class="flex items-center text-xl">
          {{ companyName }}
        </a>
        <nav class="ml-12">
          <ul class="flex list-none">
            <li
              v-for="item in menuItems"
              :key="item"
              class="ml-9 flex items-center first:ml-0"
            >
              <a href="" class="flex items-center py-2.5">{{ item }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
