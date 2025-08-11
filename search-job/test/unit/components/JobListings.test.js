import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import '@testing-library/jest-dom';
import axios from "axios";

let routeQuery = { page: '1' };

vi.mock('vue-router', () => ({
  useRoute: () => ({
    query: routeQuery
  }),
  useRouter: () => ({})
}));

import JobListings from "@/components/JobListings.vue";
vi.mock("axios");

describe("JobListings", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
  });

  it("fetches jobs", () => {
    render(JobListings, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
      },
    });
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("display maximum ten jobs", async () => {
    render(JobListings, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
      },
    });
    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });
});

describe("when params exclude page number", () => {
  it("display page number 1", () => {
    routeQuery = { page: null };
    render(JobListings, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
      },
    });
    expect(screen.getByText("Page 1")).toBeInTheDocument();
  });
});

describe("when params include page number", () => {
  it("display page number from params", () => {
    routeQuery = { page: '4' };
    render(JobListings, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
      },
    });
    expect(screen.getByText("Page 4")).toBeInTheDocument();
  });
});