import {it, describe, expect} from 'vitest'
import MainNav from '@/components/MainNav.vue'
import {describe , it , expect} from 'vitest'
import {render, screen} from '@testing-library/vue'
import '@testing-library/jest-dom'


describe('MainNav', ()=>{
    it('renders the component', () => {
        render(MainNav)
        expect(screen.getByRole('navigation')).toBeInTheDocument()
    });
    it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("MyJobMarket");
    expect(companyName).toBeInTheDocument();
  });
    
})