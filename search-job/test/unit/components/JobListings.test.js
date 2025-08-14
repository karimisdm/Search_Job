import { describe, it, expect} from "vitest";
import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import '@testing-library/jest-dom';
import { createTestingPinia } from "@pinia/testing";
import { useJobsStore } from "@/stores/jobs.js";
let routeQuery = { page: '1' };

vi.mock('vue-router', () => ({
  useRoute: () => ({
    query: routeQuery
  }),
  useRouter: () => ({})
}));

import JobListings from "@/components/JobListings.vue";


describe("JobListings", () => {
 
  it("fetches jobs", () => {
    const pinia = createTestingPinia();
    render(JobListings, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
        plugins: [pinia],
      },
    });


    const jobsStore = useJobsStore();
    expect(jobsStore.fetchJobsAndStore).toHaveBeenCalledWith();
  });

  it("display maximum ten jobs", async () => {
    const pinia = createTestingPinia();
    render(JobListings, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
        plugins: [pinia],
      },
    });
    const jobsStore = useJobsStore();
    jobsStore.jobs = Array(15).fill({});
    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });

  describe("when params exclude page number", () => {
  it("display page number 1", () => {
    const pinia = createTestingPinia();
    routeQuery = { page: null };
    render(JobListings, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
        plugins: [pinia],
      },
    });
    expect(screen.getByText("Page 1")).toBeInTheDocument();
  });
});

describe("when params include page number", () => {
  it("display page number from params", () => {
    const pinia = createTestingPinia();
    routeQuery = { page: '4' };
    render(JobListings, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
        plugins: [pinia],
      },
    });
    expect(screen.getByText("Page 4")).toBeInTheDocument();
  });
});

describe("when user is on first page",()=>{
  it("does not display previous  page link", async()=>{
    const pinia = createTestingPinia();
    routeQuery = {page: '1'};
    render(JobListings, {
      global: {
        stubs:{ RouterLink: RouterLinkStub},
        plugins: [pinia],
      }
    });
    const  jobStore = useJobsStore();
    jobStore.jobs = Array(15).fill({});
    await screen.findAllByRole("listitem");
    const previousLink = screen.queryByRole('link', {name: /Previous/i});
    expect(previousLink).not.toBeInTheDocument();
  })
});
describe("show link to next page", ()=>{
  it("when user is on first page", async()=>{
    const pinia = createTestingPinia();
    routeQuery = {page: '1'};
    render(JobListings, {
      global: {
        stubs:{ RouterLink: RouterLinkStub},
        plugins: [pinia],
      }
    });
    const jobStore = useJobsStore();
    jobStore.jobs = Array(15).fill({});
    await screen.findAllByRole("listitem");
    const nextLink = screen.queryByRole('link', {name: /Next/i});
    expect(nextLink).toBeInTheDocument();
  })
});

describe("when user is on last page", ()=>{
  it("does not show link to next page ", async()=>{
    const pinia = createTestingPinia();
    routeQuery = {page: '2'};
    render(JobListings, {
      global: {
        stubs:{ RouterLink: RouterLinkStub},
        plugins: [pinia],
      }
    });
    const jobStore = useJobsStore();
    jobStore.jobs = Array(15).fill({});
    await screen.findAllByRole("listitem");
    const nextLink = screen.queryByRole('link', {name: /Next/i});
    expect(nextLink).not.toBeInTheDocument();
  });
  it("show link to previous page", async()=>{
    const pinia = createTestingPinia();
    routeQuery = {page:'2'};
    render(JobListings, {
      global: {
        stubs: {RouterLink: RouterLinkStub},
        plugins: [pinia],
      }
    });
    const jobStore = useJobsStore();
    jobStore.jobs = Array(15).fill({});
    await screen.findAllByRole("listitem");
    const previousLink = screen.queryByRole('link', {name: /Previous/i});
    expect(previousLink).toBeInTheDocument();
  })
})

});



