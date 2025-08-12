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

describe("when user is on first page",()=>{
  it("does not display previous  page link", async()=>{
    routeQuery = {page: '1'};
    render(JobListings, {
      global: {
        stubs:{ RouterLink: RouterLinkStub},     
      }
    });
    await screen.findAllByRole("listitem");
    const previousLink = screen.queryByRole('link', {name: /Previous/i});
    expect(previousLink).not.toBeInTheDocument();
  })
});
describe("show link to next page", ()=>{
  it("when user is on first page", async()=>{
    routeQuery = {page: '1'};
    render(JobListings, {
      global: {
        stubs:{ RouterLink: RouterLinkStub},     
      }
    });
    await screen.findAllByRole("listitem");
    const nextLink = screen.queryByRole('link', {name: /Next/i});
    expect(nextLink).toBeInTheDocument();
  })
});

describe("when user is on last page", ()=>{
  it("does not show link to next page ", async()=>{
    routeQuery = {page: '2'};
    render(JobListings, {
      global: {
        stubs:{ RouterLink: RouterLinkStub},     
      }
    });
    await screen.findAllByRole("listitem");
    const nextLink = screen.queryByRole('link', {name: /Next/i});
    expect(nextLink).not.toBeInTheDocument();
  });
  it("show link to previous page", async()=>{
    routeQuery = {page:'2'};
    render(JobListings, {
      global: {
        stubs: {RouterLink: RouterLinkStub}
      }
    });
    await screen.findAllByRole("listitem");
    const previousLink = screen.queryByRole('link', {name: /Previous/i});
    expect(previousLink).toBeInTheDocument();
  });
});

});



