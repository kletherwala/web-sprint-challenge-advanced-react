import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstName = screen.getByTestId("firstName");
    userEvent.type(firstName, "kiran");

    const lastName = screen.getByTestId("lastName");
    userEvent.type(lastName, "letherwala");

    const address = screen.getByTestId("address");
    userEvent.type(address, "abc blvd");

    const city = screen.getByTestId("city");
    userEvent.type(city, "houston");

    const state = screen.getByTestId("state");
    userEvent.type(state, "texas");

    const zip = screen.getByTestId("zip");
    userEvent.type(zip, "12345");
    
    const button = screen.getByTestId("button");
    userEvent.click(button);
    
    const successMessage = screen.getByTestId('successMessage');
    expect(successMessage).toBeInTheDocument;
});
