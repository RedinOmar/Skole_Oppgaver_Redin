import { describe, expect, test } from "vitest";
import VerticalTabs from "./VerticalTabs.svelte";
import { render, screen } from '@testing-library/svelte';

describe("VerticalTabs Component", () => {
    // Create a new container for the test
    const host = document.createElement('div');

    // Append the new container in the HTML body
    document.body.appendChild(host);

    // Create instance of the vertical tab
    const instance = new VerticalTabs({ target: host });

    // Chech if the instance has value
    expect(instance).toBeTruthy()

    // test if we can find the "First Tab Heading"
    expect(host.innerHTML).toContain("First Tab Heading")
    
    test("should render the component", () => {
        render(VerticalTabs);
        const firstTabNode = screen.getByText(/First tab Heading/i)
        expect(firstTabNode).toBeTruthy()
    });
});