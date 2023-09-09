import { render, screen } from "@testing-library/react";
import PlacesListPage from "./PlacesListPage";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given a PlacesListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should shouw a heading with the text 'Lugares de interés'", () => {
      const expectedHeadingText = "Lugares de interés";

      render(
        <Provider store={store}>
          <PlacesListPage />
        </Provider>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
