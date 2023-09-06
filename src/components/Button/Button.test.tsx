import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When is rendered with the text 'Accede", () => {
    test("Then it should show a button with the text 'Accede'", () => {
      const mockFunction = vi.fn();
      const expectedButtonText = "Accede";

      render(
        <Button className="" actionOnClick={mockFunction}>
          {expectedButtonText}
        </Button>,
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
