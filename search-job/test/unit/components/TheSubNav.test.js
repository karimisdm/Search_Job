import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
import TheSubNav from "@/components/TheSubNav.vue";

// Mock useRoute for Composition API
vi.mock('vue-router', () => ({
  useRoute: () => ({
    name: 'JobResults'
  }),
  useRouter: () => ({})
}));

describe("TheSubNav", () => {
  it("display job count when on job page", () => {
    render(TheSubNav, {
      global: {
        stubs: {
          'font-awesome-icon': true
        }
      }
    });
    const jobCount = screen.getByText('1459');
    expect(jobCount).toBeInTheDocument();
  });

  it("does not display job count when not on job page", () => {
    // Remock useRoute for 'home'
    vi.mock('vue-router', () => ({
      useRoute: () => ({
        name: 'home'
      }),
      useRouter: () => ({})
    }));

    render(TheSubNav, {
      global: {
        stubs: {
          'font-awesome-icon': true
        }
      }
    });
    const jobCount = screen.queryByText('1459');
    expect(jobCount).not.toBeInTheDocument();
  })
});