import {render, screen} from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';

describe('MainNav', ()=>{
    it('display company name', ()=>{
        render(MainNav);
        const comName = screen.getByText('MyCompany');
        console.log(comName)
        
        expect(comName).toBe('MyCompony');
    
    })
})