/** @packages */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

/** @scripts */
import ButtonExample from "../../../src/components/atoms/button-example";

describe("ButtonExample component", () => {
  test('renders a button with the text "Button"', () => {
    render(<ButtonExample />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
  });
});
