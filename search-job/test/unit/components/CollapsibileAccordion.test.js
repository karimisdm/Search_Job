import { describe, it, expect, expect } from "vitest";
import {render, screen} from "@testing-library/vue"
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import CollapsibleAccordion from "@/components/CollapsibleAccordion.vue";


describe("CollapsibleAccordion", ()=>{
    it("render the child component", async()=>{
       render(CollapsibleAccordion, {
    global: {
        stubs: {
            FontAwesomeIcon: true
        }
    },
    props: {
        header: "my category"
    },
    slots: {
        default: "This is child"
    }
});
        const child = screen.queryByText("This is child");
        expect(child).not.toBeInTheDocument();
        const button = screen.getByRole("button", {name: /my category/i});
        await userEvent.click(button);
        expect(screen.getByText("This is child")).toBeInTheDocument();
    })
})