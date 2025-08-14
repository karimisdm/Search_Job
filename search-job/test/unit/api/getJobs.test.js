import axios from 'axios';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom'
import getJobs from '@/api/getJobs.js'
import { beforeEach } from 'vitest';

vi.mock('axios');
 describe("getJobs", ()=>{
    beforeEach(()=>{
        axios.get.mockResolvedValue({
            data: [
                { id: 1, title: "Software Engineer" }
            ]
        });
    })
    it("fetch jobs successfully", async()=>{
        await getJobs();
        expect(axios.get).toHaveBeenCalledWith('http://fakeapi.com/jobs');
    });
    it("extracts job from response", async()=>{
        const jobs =await getJobs();
        expect(jobs).toEqual([
            {id:1 , title: "Software Engineer"}
        ])
    });
 })
