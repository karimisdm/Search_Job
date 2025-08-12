<script setup>
import { computed, ref } from 'vue'
import ActionButton from '@/components/ActionButton.vue'
import ProfileImage from '@/components/ProfileImage.vue'
import TheSubNav from '@/components/TheSubNav.vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();


const companyName = "MyJobMarket"

const menuItems = [
  {text: "Teams", url:"/"},
  {text: "Locations", url:"/"},
  {text: "Life at MyJobMarket", url:"/"},
  {text: "How we hire", url:"/"},
  {text: "Students", url:"/"},
  {text: "Jobs", url:"/jobs/results"}
];


const loginUser = ()=>{
    userStore.loginUser();
}
const getHeight = computed(()=>{
   return{
    'h-16': !userStore.isLoggedIn,
    'h-32': userStore.isLoggedIn
   }
}
)
</script>

<template>
  <header :class="['w-full', 'text-sm', getHeight]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="mx-auto flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8">
        <RouterLink :to="{name: 'home'}" class="flex h-full items-center text-xl">
          {{ companyName }}
        </RouterLink>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="item in menuItems"
              :key="item.text"
              class="ml-9 h-full first:ml-0"
            >
              <RouterLink :to="item.url" class="flex h-full items-center py-2.5">{{ item.text }}</RouterLink>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
            <ProfileImage v-if="userStore.isLoggedIn"/>
            <ActionButton v-else text="Sign in"  @click="loginUser()" />
        </div>
      </div>
      <TheSubNav v-if="userStore.isLoggedIn"/>
    </div>
  </header>
</template>
