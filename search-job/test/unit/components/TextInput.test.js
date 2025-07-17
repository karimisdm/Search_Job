import TextInput from '@/components/TextInput.vue'
import { it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

describe('TextInput', ()=>{
    it ('communicates that user has entered character', async()=>{
        const {emitted} =  render(TextInput, {
            props: {
                modelValue:''
            }
        });
        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'NYC');
        const message = emitted(['update:modelValue'])
        expect(message).toEqual([['N'], ['NY'], ['NYC']]);

    })
})

