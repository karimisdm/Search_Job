// jobsStore.js
import { defineStore } from "pinia";
import { ref } from "vue";
import getJobs from '@/api/getJobs.js';

export const FETCH_JOBS = async () => {
    const response = await getJobs();
    return response;
};

export const useJobsStore = defineStore("jobs", () => {
    const jobs = ref([]);

    const fetchJobsAndStore = async () => {
        jobs.value = await FETCH_JOBS();
        return jobs.value;
    };

    return {
        jobs,
        fetchJobsAndStore
    };
});
