import { defineStore } from "pinia";
import { ref } from "vue";

export const useJobsStore = defineStore("jobs", ()=>{

    const jobs = ref([]);

    return{
        jobs,

    }
})