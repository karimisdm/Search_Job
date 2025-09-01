import { describe,it , expect } from "node:test";
import {render, screen} from '@testing-library/vue'
import userEvent from "@testing-library/user-event";
import {useRouter} from 'vue-router';

import JobSearchForm from '@/components/JobSearchForm.vue'


describe("SearchForm", ()=>{
    describe('when user submit form', ()=>{
       it('direct user to job results page', async()=>{
         const push= vi.fn();
         useRouter.mockReturnValue({push});

         render(JobSearchForm, {
            global: {
                stubs: {
                    FontAwesomeIcon: true,
                }
            }
         });
        
         const roleInput = screen.getByRole("textbox", {
            name: /role/i
         });
         await userEvent.type(roleInput, 'Vue Developer');

         const locationInput = screen.getByRole("textbox",{
            name: /location/i
         });
        await userEvent.type(locationInput, "Amsterdam");

        const submitButton = screen.getByRole("button", {
            name: /search/i
        });
        await userEvent.click(submitButton);

        expect(push).toHaveBeenCalledWith({
            name: "JobResults",
            query: {role: "Vue Developer", location: "Amsterdam"},
        });

       })
    })
})