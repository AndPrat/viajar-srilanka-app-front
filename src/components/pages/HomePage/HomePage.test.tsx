import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Tu viaje a Sri Lanka empieza aquí'", () => {
      const expectedHeadingText = "Tu viaje a Sri Lanka empieza aquí";

      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Accede'", () => {
      const expectedButtonText = "Accede";

      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>,
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
