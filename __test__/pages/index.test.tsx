/** @packages */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

/** @scripts */
import HomePage from "../../src/pages";

describe("Describe index page", () => {
  it("should render the Home Page", () => {
    render(<HomePage />);
    const header = screen.getByRole("heading");
    const headerText = "Pwa project";

    expect(header).toHaveTextContent(headerText);
  });
});
