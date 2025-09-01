import { it, describe, expect } from 'vitest';
import MainNav from '@/components/MainNav.vue';
import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { RouterLinkStub } from '@vue/test-utils';
import {createTestingPinia} from '@pinia/testing';

// Mock useRoute for Composition API
vi.mock('vue-router', () => ({
  useRoute: () => ({
    name: 'home'
  }),
  useRouter: () => ({})
}));

describe('MainNav', () => {
  const renderMainNav = () => {
    const pinia = createTestingPinia({stubActions: false});
    render(MainNav, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

  it('renders the component', () => {
    renderMainNav();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it("displays company name", () => {
    renderMainNav();
    const companyName = screen.getByText("MyJobMarket");
    expect(companyName).toBeInTheDocument();
  });

  describe('when the user log in', () => {
    it('display user profile picture', async () => {
      renderMainNav();
      let profileImage = screen.queryByRole('img', { name: /picture of user/i });
      expect(profileImage).not.toBeInTheDocument();
      const loginButton = screen.getByRole('button', { name: /Sign In/i });
      await userEvent.click(loginButton);
      profileImage = screen.queryByRole('img', { name: /picture of user/i });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
