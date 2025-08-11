import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import axios from "axios";

// Mock useRoute for Composition API
vi.mock('vue-router', () => ({
  useRoute: (queryParam) => ({
    query: { page: '1' , ...queryParam}
  }),
  useRouter: () => ({})
}));

import JobListings from "@/components/JobListings.vue";

vi.mock("axios");

describe("JobListings", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    render(JobListings, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("display maximum ten jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    render(JobListings, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });
});
