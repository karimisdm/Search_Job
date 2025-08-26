// jobsStore.js
import { defineStore } from "pinia";
import { ref} from "vue";
import getJobs from '@/api/getJobs.js';


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

    return {
        jobs,
        fetchJobsAndStore,
        getOrganizationOfJobs,
        organizationOfJobs
    };
});
