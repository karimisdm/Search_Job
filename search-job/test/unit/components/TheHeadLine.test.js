import { describe, it , expect, vi } from "vitest";
import { render, screen } from "@testing-library/vue";
import TheHeadLine from "@/components/TheHeadLine.vue";
import { nextTick } from "vue";
import '@testing-library/jest-dom';

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
    expect(mock).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
   });

   it('swap action verb after interval', async()=>{
    vi.useFakeTimers();
    render(TheHeadLine);
    vi.advanceTimersByTime(3000);

    await nextTick();
    const actionPhrase = screen.getByRole('heading', {
        name: /create for everyone/i
    });
    expect(actionPhrase).toBeInTheDocument();
    vi.useRealTimers();
   });

   it('removes interval on unmount', ()=>{
    vi.useFakeTimers();
    const clearInterval = vi.fn();
    vi.stubGlobal('clearInterval', clearInterval);

    const {unmount} = render(TheHeadLine);
    unmount();
    expect(clearInterval).toHaveBeenCalled();
    vi.useRealTimers();

   })
   
})