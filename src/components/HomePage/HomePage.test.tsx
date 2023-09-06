import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Tu viaje a Sri Lanka empieza aquí'", () => {
      const expectedHeadingText = "Tu viaje a Sri Lanka empieza aquí";

      render(<HomePage />);

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a button with te text 'Acceder'", () => {
      const expectedButtonText = "Acceder";

      render(<HomePage />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
