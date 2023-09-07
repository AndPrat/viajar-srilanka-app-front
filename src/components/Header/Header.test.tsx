import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Given a Header component", () => {
  describe("When it's rendered with the text 'Viajar a Sri Lanka'", () => {
    test("Then it should show the text 'Viajar a Sri Lanka' in the heading", () => {
      const expectedTextHeading = "Viajar a Sri Lanka";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedTextHeading,
      });

      expect(heading).toBeInTheDocument();
    });

    describe("When it's rendered with an image with alt 'Viajar a Sri Lanka logo' ", () => {
      test("Then it should show a image with alt 'Viajar a Sri Lanka logo'", () => {
        const expectedAltText = "Viajar a Sri Lanka logo";

        render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>,
        );

        const viajarSriLankalogo = screen.getByAltText(expectedAltText);

        expect(viajarSriLankalogo).toBeInTheDocument();
      });
    });
  });
});
