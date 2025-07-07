import { describe, it , expect } from "node:test";
import { render, screen } from "@testing-library/vue";
import TheHeadLine from "@/components/TheHeadLine.vue";

describe('TheHeadLine', ()=>{
    describe('Vitest playground', ()=>{
        it('tracks whether it has been called', ()=>{
            const mockFn = vi.fn();
            mockFn(1,2,3);
            expect(mockFn).toHaveBeenCalledWith(1,2,3);

        })

    })
})