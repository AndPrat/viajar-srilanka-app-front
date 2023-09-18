import { Provider } from "react-redux";
import { placesMock } from "../../mocks/placeMock";
import { setupStore } from "../../store";
import PlacesList from "./PlacesList";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Given a PlacesList component", () => {
  describe("When it is rendered with 'Sigiriya' and 'Ahas Namaye Palama' places", () => {
    test("Then it should show the places 'Sigiriya' and 'Ahas Namaye Palama' inside headings", () => {
      const store = setupStore({
        placesState: {
          places: placesMock,
        },
      });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PlacesList />
          </Provider>
          ,
        </BrowserRouter>,
      );

      placesMock.forEach(({ name }) => {
        const placeName = `${name}`;
        const expectedPlaceHeading = screen.getByRole("heading", {
          name: placeName,
        });

        expect(expectedPlaceHeading).toBeInTheDocument();
      });
    });
  });
});
