import { BrowserRouter } from "react-router-dom";
import Hero from "./Hero";
import { render, screen } from "@testing-library/react";

describe("Given a Hero component", () => {
  describe("When it's rendered with the text 'Tu viaje a Sri Lanka empieza aquí' in the heading", () => {
    test("Then it should show the thext 'Tu viaje a Sri Lanka empieza aquí' in the heading", () => {
      const expectedTextHeading = "Tu viaje a Sri Lanka empieza aquí";

      render(
        <BrowserRouter>
          <Hero
            desktop=""
            alt="Vistas de Sigiriya en el amanecer"
            desktopWebp=""
            fallback=""
            mobile=""
            mobileWebp=""
            title="Tu viaje a Sri Lanka empieza aquí"
          />
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedTextHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
