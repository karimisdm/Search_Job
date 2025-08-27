// jobsStore.js
import { defineStore } from "pinia";
import { ref} from "vue";
import getJobs from '@/api/getJobs.js';
import { useUserStore } from "./user";
import { storeToRefs } from "pinia";

export const useJobsStore = defineStore("jobs", () => {
    const jobs = ref([]);
    const organizationOfJobs = ref(new Set());

    const fetchJobsAndStore = async () => {
        const response = await getJobs();
        jobs.value = response;
        jobs.value.forEach(job => organizationOfJobs.value.add(job.organization));
        return jobs.value;
    };

    const getOrganizationOfJobs = () => {
        return [...organizationOfJobs.value];
    };

    const filterJobsByOrganization = ()=>{
        const userStore = useUserStore();
         const {selectedOrgs} = storeToRefs(userStore);
         if(selectedOrgs.value.length === 0){
             return jobs.value;
         }

         return jobs.value.filter(job => selectedOrgs.value.includes(job.organization));
    }




    return {
        jobs,
        fetchJobsAndStore,
        getOrganizationOfJobs,
        organizationOfJobs,
        filterJobsByOrganization
    };
});
