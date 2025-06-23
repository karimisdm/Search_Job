import {describe, it, expect} from 'vitest';
import {evenOrOdd} from '@/playground.js';

describe("basic math", ()=>{
    it("add two numbers", ()=>{
        expect(1+1).toBe(2);
    })
});

describe("evenOrOdd", ()=>{
    it("indicates the number is even or odd", ()=>{
        expect(evenOrOdd(3)).toBe("Odd");
    })
})