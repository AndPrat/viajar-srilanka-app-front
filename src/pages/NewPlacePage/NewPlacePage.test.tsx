import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewPlacePage from "./NewPlacePage";

describe("Given a NewPlacePage component ", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Añade un lugar'", () => {
      const expectedHeadingText = "Añade un lugar";

      render(
        <BrowserRouter>
          <NewPlacePage />
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
