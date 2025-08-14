import { describe,it ,expect, beforeEach } from "vitest";
import '@testing-library/jest-dom';
import { setActivePinia, createPinia } from "pinia";
import { useJobsStore } from "@/stores/jobs.js";

describe("useJobsStore", ()=>{
    beforeEach(()=>{
        setActivePinia(createPinia());
    });
    it("jobs array is empty by default", ()=>{
        const store = useJobsStore();
        expect(store.jobs).toEqual([]);
    })
})
