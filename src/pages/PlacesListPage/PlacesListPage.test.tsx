import { render, screen } from "@testing-library/react";
import PlacesListPage from "./PlacesListPage";
import { setupStore } from "../../store";
import { placesMock } from "../../mocks/placeMock";
import { Provider } from "react-redux";

describe("Given a PlacesListPage component", () => {
  vi.mock("react", () => ({ useEffect: vi.fn() }));

  describe("When it is rendered", () => {
    test("Then it should shouw a heading with the text 'Lugares de interés'", () => {
      const expectedHeadingText = "Lugares de interés";
      const store = setupStore({
        placesState: {
          places: placesMock,
        },
      });

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

  describe("When it is rendered without place card", () => {
    test("Then nit should show a heading with 'No hay ningún lugar guardado' text", () => {
      const expectHeadingText = "No hay ningún lugar guardado";

      const store = setupStore({
        placesState: {
          places: [],
        },
      });

      render(
        <Provider store={store}>
          <PlacesListPage />
        </Provider>,
      );

      const headingText = screen.getByRole("heading", {
        name: expectHeadingText,
      });

      expect(headingText).toBeInTheDocument();
    });
  });
});
