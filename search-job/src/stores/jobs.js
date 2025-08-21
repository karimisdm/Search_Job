// jobsStore.js
import { defineStore } from "pinia";
import { ref } from "vue";
import getJobs from '@/api/getJobs.js';

// export const FETCH_JOBS = async () => {
//     const response = await getJobs();
//     return response;
// };

export const useJobsStore = defineStore("jobs", () => {
    const jobs = ref([]);
    const organizationOfJobs = new Set();

    const fetchJobsAndStore = async () => {
        const response = await getJobs();
        jobs.value = response;
        jobs.value.forEach(job => organizationOfJobs.add(job.organization));
        return jobs.value;
    };

    const getOrganizationOfJobs = () => {
        return organizationOfJobs;
    };

    return {
        jobs,
        fetchJobsAndStore,
        getOrganizationOfJobs
    };
});
