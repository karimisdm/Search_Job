import { describe,it ,expect, beforeEach } from "vitest";
import '@testing-library/jest-dom';
import { setActivePinia, createPinia } from "pinia";
import { useJobsStore } from "@/stores/jobs.js";
import axios from 'axios';

vi.mock('axios');

describe("useJobsStore", ()=>{
    beforeEach(()=>{
        setActivePinia(createPinia());
    });
    it("jobs array is empty by default", ()=>{
        const store = useJobsStore();
        expect(store.jobs).toEqual([]);
    });

    describe("fetchJobs", ()=>{
        beforeEach(()=>{
          setActivePinia(createPinia());
        });
        it("fetch jobs from api", async()=>{
            const store = useJobsStore();
            axios.get.mockResolvedValue({
                data: [
                    { id: 1, title: "Software Engineer" }
                ]
            });

            await store.fetchJobsAndStore();

            expect(store.jobs).toEqual([
                { id: 1, title: "Software Engineer" }
            ]);
        })
    })
});
