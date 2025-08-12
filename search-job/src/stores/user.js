import {defineStore} from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user',()=>{

    const isLoggedIn = ref(false);
    
    const loginUser = ()=>{
        isLoggedIn.value = true;
    }

    return { isLoggedIn, loginUser }
})