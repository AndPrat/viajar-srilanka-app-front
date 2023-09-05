import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When is rendered with the text 'Accede", () => {
    test("Then it should show a button with the text 'Accede'", () => {
      const expectedButtonText = "Accede";

      render(<Button text={expectedButtonText} className="button" />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
