import { render, screen } from "@testing-library/react";
import Contact from "../../Pages/Contact";
import "@testing-library/jest-dom";

describe("For all the contact us page", () => {
  test("Should Render the contact us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should button render on the screen", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should have all the textboxes", () => {
    render(<Contact />);

    const textBoxes = screen.getAllByRole("textbox");

    // Assertion
    textBoxes.forEach((textBox) => {
      expect(textBox).toBeInTheDocument();
    });
  });
});
