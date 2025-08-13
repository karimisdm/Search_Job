import { describe,it ,expect, beforeEach } from "vitest";
import '@testing-library/jest-dom';
import { setActivePinia, createPinia } from "pinia";
import {useUserStore} from "@/stores/user";


describe('state', ()=>{
    beforeEach(()=>{
        setActivePinia(createPinia());
    });
    it("when user is not logged in", ()=>{
        const store = useUserStore();
        expect(store.isLoggedIn).toBe(false);
    })
});
describe('action', ()=>{
    beforeEach(()=>{
        setActivePinia(createPinia());

    })
    it("when user log in", ()=>{
        const store = useUserStore();
         store.loginUser();
        expect(store.isLoggedIn).toBe(true);
    })
})

