import { describe, it , expect } from "node:test";
import { render, screen } from "@testing-library/vue";
import TheHeadLine from "@/components/TheHeadLine.vue";
import '@testing-library/jest-dom';
import { vi } from "vitest";

describe('TheHeadLine', ()=>{
   it('display introductory action verb', ()=>{
    vi.useFakeTimers();
    render(TheHeadLine);

    const actionPhrase = screen.getByRole('heading', {
        name: /build for everyone/i
    });
    expect(actionPhrase).toBeInTheDocument();
    vi.useRealTimers();
   });

   it('changes action verb at a interval', ()=>{

    vi.useFakeTimers();
    const mock = vi.fn();
    vi.stubGlobal('setInterval', mock);
    render(TheHeadLine);
    expect(mock).toHaveBeenCalledTimes();
   })
   
})