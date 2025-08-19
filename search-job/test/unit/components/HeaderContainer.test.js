import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom"
import HeaderContainer from '@/components/HeaderContainer.vue';

describe('HeaderContainer', ()=>{
    it('showing title and subtitle', ()=>{
        render(HeaderContainer, {
  slots: {
    title: 'this is title',
    subtitle: 'this is subtitle'
  }
});
  const title = screen.getByText(/this is title/i);
  const subtitle = screen.getByText(/this is subtitle/i);
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
    })
})