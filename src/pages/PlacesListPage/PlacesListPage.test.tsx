import { render, screen } from "@testing-library/react";
import PlacesListPage from "./PlacesListPage";
import { setupStore } from "../../store";
import { placesMock } from "../../mocks/placeMock";
import { Provider } from "react-redux";
import { Auth } from "firebase-admin/auth";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Given a PlacesListPage component", () => {
  vi.mock("react", async () => {
    const actual: Auth = await vi.importActual("react");
    return {
      ...actual,
      useEffect: vi.fn(),
    };
  });

  describe("When it is rendered", () => {
    test("Then it should shouw a heading with the text 'Lugares de interés'", () => {
      const expectedHeadingText = "Lugares de interés";
      const store = setupStore({
        placesState: {
          places: placesMock,
        },
      });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <React.Suspense>
              <React.Suspense>
                <PlacesListPage />
              </React.Suspense>
            </React.Suspense>
          </Provider>
          ,
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered without place card", () => {
    test("Then nit should show a heading with 'No hay ningún lugar guardado' text", async () => {
      const expectHeadingText = "No hay ningún lugar guardado";

      const store = setupStore({
        placesState: {
          places: [],
        },
      });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PlacesListPage />
          </Provider>
          ,
        </BrowserRouter>,
      );

      const headingText = await screen.findByRole("heading", {
        name: expectHeadingText,
      });

      expect(headingText).toBeInTheDocument();
    });
  });
});
