import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import '@testing-library/jest-dom'
import SpotLight from "@/components/SpotLight.vue";
import axios from "axios"
import { title } from "process";

vi.mock("axios");


describe("SpotLight", ()=>{
    it("fetch title of spotlight", async()=>{
      axios.get.mockResolvedValue({
        data:[
            {
                id:1,
                img:'sample-img.png',
                title:'AI generated',
                description: 'this is a ai generator'
            },
            {
                id:2,
                img:'sample-img2.png',
                title:'ML models',
                description: 'this is a ML model'
            }

        ]
      });
        render(SpotLight, {
           
                slots: {
                    default: `<template #default= "slotProps">
                    
                        <h2>
                        {{slotProps.title}}
                        </h2>

                    </template>`
                
            }

        });
        const title = await screen.findByText('AI generated');
        expect(title).toBeInTheDocument();

    });
    it("fetch image of spotlight", async()=>{
        axios.get.mockResolvedValue({
            data: [
                {
                    id: 1,
                    img: 'spotlight image1',
                    title: 'AI generated',
                    description: 'this is a ai generator'
                },
                {
                    id: 2,
                    img: 'spotlight image2',
                    title: 'ML models',
                    description: 'this is a ML model'
                }
            ]
        });
        render(SpotLight, {
            slots: {
                default: `<template #default="slotProps">
                    <h2>
                    {{slotProps.img}}
                    </h2>
                </template>`
            }
        });
        const image = await screen.findByText('spotlight image1');
        expect(image).toBeInTheDocument();
    });
    it("fetch description of spotlight", async()=>{
        axios.get.mockResolvedValue({
            data: [
                {
                    id: 1,
                    img: 'spotlight image1',
                    title: 'AI generated',
                    description: 'this is a ai generator'
                },
                {
                    id: 2,
                    img: 'spotlight image2',
                    title: 'ML models',
                    description: 'this is a ML model'
                }
            ]
        });
        render(SpotLight, {
            slots: {
                default: `<template #default="slotProps">
                    <h2>
                    {{slotProps.description}}
                    </h2>
                </template>`
            }
        });
        const description = await screen.findByText('this is a ai generator');
        expect(description).toBeInTheDocument();
    });

})