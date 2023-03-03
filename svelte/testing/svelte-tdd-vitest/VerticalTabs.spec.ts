import VerticalTabs from "./src/VerticalTabs.svelte";
import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from '@testing-library/svelte';

describe("VerticalTabs Component", () => {

    test("Should render the component", () => {

        // lager en konteiner i HTML body
        const host = document.createElement('div');

        //
        document.body.appendChild(host);

        // lager en ny instance som har verdien på objektet, host
        const instance = new VerticalTabs({ target: host });

        // skjekker om objektet (instance) har en verdi
        expect(instance).toBeTruthy()

        // tester om den finner "First Tab heading"
        expect(host.innerHTML).toContain("First Tab Heading")

        render(VerticalTabs);

        // getbytext returnerer instance av et gitt text (verdi)
        const firstTabNode= screen.getByText(/First Tab Heading/i)
        expect(firstTabNode).toBeTruthy()
    });

    test("Should switch tabs", async () => {
        render(VerticalTabs);

        const secondTabElement = screen.getByText(/Second Tab/i);
        
        // fireEvent simulerer en click element
        fireEvent.click(secondTabElement)

        await screen.findByText(/Second tab Heading/i);
    });
})