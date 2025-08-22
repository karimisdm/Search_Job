import {defineStore} from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user',()=>{

    const isLoggedIn = ref(false);
    const selectedOrgs = ref([]);
    
    const loginUser = ()=>{
        isLoggedIn.value = true;
    }
    const AddSelectedOrganization = (organization)=>{
        if(!selectedOrgs.value.includes(organization)){
           selectedOrgs.value.push(organization);
        }
        
    }

    return { isLoggedIn,
         loginUser, 
         selectedOrgs,
        AddSelectedOrganization,
     }
})