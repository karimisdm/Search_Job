import {it, describe, expect} from 'vitest'
import MainNav from '@/components/MainNav.vue'
import {describe , it , expect} from 'vitest'
import {render, screen} from '@testing-library/vue'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'


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

  describe('when the user log in',()=>{
    it('display user profile picture',async ()=>{
        render(MainNav);
         let profileImage = screen.queryByRole('img',
            {name:/picture of user/i});
            expect(profileImage).not.toBeInTheDocument();
        const loginButton = screen.getByRole('button', {
            name: /Sign In/i
        }) ;
        await userEvent.click(loginButton);
           profileImage = screen.queryByRole('img',
            {name:/picture of user/i});
            expect(profileImage).toBeInTheDocument();

   })
    })
  })
    