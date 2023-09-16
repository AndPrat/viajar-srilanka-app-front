import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewPlacePage from "./NewPlacePage";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given a NewPlacePage component ", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Añade un lugar'", () => {
      const expectedHeadingText = "Añade un lugar";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewPlacePage />
          </Provider>
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
