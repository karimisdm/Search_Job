// jobsStore.js
import { defineStore } from "pinia";
import { ref} from "vue";
import getJobs from '@/api/getJobs.js';
import { useUserStore } from "./user";
import { storeToRefs } from "pinia";

export const useJobsStore = defineStore("jobs", () => {
    const jobs = ref([]);
    const organizationOfJobs = ref(new Set());
    const uniqueJobTypes = ref(new Set());

    const fetchJobsAndStore = async () => {
        const response = await getJobs();
        jobs.value = response;
        jobs.value.forEach(job => {
            organizationOfJobs.value.add(job.organization);
            uniqueJobTypes.value.add(job.jobType);
        });
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
    };

    const filterJobsByType = ()=>{
        const userStore = useUserStore();
        const {selectedTypes} = storeToRefs(userStore);
        if(selectedTypes.value.length === 0){
            return jobs.value;
        }
        return jobs.value.filter(job => selectedTypes.value.includes(job.jobType));
    };


    const filteredJobs = ()=>{
        const userStore = useUserStore();
        const {selectedOrgs, selectedTypes} = storeToRefs(userStore);

        if(selectedOrgs.value.length === 0 && selectedTypes.value.length === 0){
            return jobs.value;
        }

        return jobs.value.filter(job => {
            const orgMatch = selectedOrgs.value.length === 0 || selectedOrgs.value.includes(job.organization);
            const typeMatch = selectedTypes.value.length === 0 || selectedTypes.value.includes(job.jobType);
            return orgMatch && typeMatch;
        });
    };


   



    const getUniqueJobTypes = () => {
        return [...uniqueJobTypes.value];
    };

    return {
        jobs,
        fetchJobsAndStore,
        getOrganizationOfJobs,
        organizationOfJobs,
        filterJobsByOrganization,
        getUniqueJobTypes,
        filterJobsByType,
        filteredJobs
    };
});
