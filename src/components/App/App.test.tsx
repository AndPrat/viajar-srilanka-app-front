import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Viajar a Sri Lanka' in the heading", () => {
      const expectedTextHeading = "Viajar a Sri Lanka";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );

      const header = screen.getByRole("heading", {
        name: expectedTextHeading,
      });

      expect(header).toBeInTheDocument();
    });

    test("Then it should show an image with alt 'Viajar a Sri Lanka logo'", () => {
      const expectedAltText = "Viajar a Sri Lanka logo";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );

      const viajarSriLankalogo = screen.getByAltText(expectedAltText);

      expect(viajarSriLankalogo).toBeInTheDocument();
    });
  });
});
