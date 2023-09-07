import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";

describe("Given a Homepage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Tu viaje a Sri Lanka empieza aquí'", () => {
      const expectedHeadingText = "Tu viaje a Sri Lanka empieza aquí";

      render(
        <BrowserRouter>
          <Homepage />
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
          <Homepage />
        </BrowserRouter>,
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
