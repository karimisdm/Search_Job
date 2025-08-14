import axios from 'axios';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom'
import getJobs from '@/api/getJobs.js'

vi.mock('axios');
 describe("getJobs", ()=>{
    it("fetch jobs successfully", async()=>{
        await getJobs();
        expect(axios.get).toHaveBeenCalledWith('http://fakeapi.com/jobs');
    })
 })
