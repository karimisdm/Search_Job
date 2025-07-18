import { describe, it , expect } from "vitest"
import {render, screen} from '@testing-library/vue'
import '@testing-library/jest-dom'
import TheSubNav from '@/components/TheSubNav.vue';

describe('TheSubNav', ()=>{
    describe('when user is on job page',()=>{
        it('display job count', ()=>{
           
            const route = {
                name:'JobResults',
            };

            render(TheSubNav, {
                props:{
                    onJobResultsPage: true
                },
                global: {
                    mocks: {
                        $route: route,
                    },
                    stubs: {
                        'font-awesome-icon': true
                    }
                }
            });
            const jobCount = screen.getByText('1459');
            expect(jobCount).toBeInTheDocument();
        })

    });
    describe('when user is not on job page', ()=>{
          it('does not display job count', ()=>{
            const route = {
                name:'home',
            }
            render(TheSubNav, {
                 props:{
                    onJobResultsPage: false
                },
                global: {
                    mocks:{
                        $route: route,
                    },
                    stubs:{
                        'font-awesome-icon': true
                    }
                }
            });
            const jobCount = screen.queryByText('1359');
            expect(jobCount).not.toBeInTheDocument();
        })

    })
})