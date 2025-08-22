import {defineStore} from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user',()=>{

    const isLoggedIn = ref(false);
    const selectedOrganizations = ref([]);
    
    const loginUser = ()=>{
        isLoggedIn.value = true;
    }
    const AddSelectedOrganization = (organization)=>{
        if(!selectedOrganizations.value.includes(organization)){
           selectedOrganizations.value.push(organization);
        }
        
    }

    return { isLoggedIn,
         loginUser, 
         selectedOrganizations,
        AddSelectedOrganization,
     }
})