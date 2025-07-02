import { describe, it , expect } from "vitest"
import {render, screen} from '@testing-library/vue'
import '@testing-library/jest-dom'
import ActionButton from '@/components/ActionButton.vue'


describe('ActionButton',()=>{
    it('render text',()=>{
        render(ActionButton, {
            props:{
                text: 'Sign in',
                type:'primary'
            }
        })
        const button = screen.getByRole('button', {
            name:/Sign in/i
        });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('primary')
        
    });

})
