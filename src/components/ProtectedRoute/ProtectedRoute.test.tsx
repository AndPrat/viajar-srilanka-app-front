import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import paths from "../../routers/paths/paths";
import App from "../App/App";

describe("Given a ProtectedRoute component", () => {
  describe("When is rendered and the user isn't logged and try to enter to '/lugares' page", () => {
    test("Then it should show the '/home' page with the 'Tu viaje a Sri Lanka empieza aquí' heading", () => {
      const placesPath = paths.places;
      const expectedHeadingText = "Tu viaje a Sri Lanka empieza aquí";

      render(
        <MemoryRouter initialEntries={[placesPath]}>
          <App />
        </MemoryRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
