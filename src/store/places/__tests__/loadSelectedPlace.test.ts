import { placeMock, placesMock } from "../../../mocks/placeMock";
import { Place } from "../../../types";
import { loadSelectedPlaceActionCreator, placesReducer } from "../placesSlice";
import { PlacesState } from "../types";

describe("Given a loadSelectedPlace reducer", () => {
  describe("When it receives a placeState and loadSelectedPlace action with 'Sigiriya'", () => {
    test("Then it should return a new state with 'Sigiriya' place", () => {
      const currentPlaceState: PlacesState = {
        places: placesMock,
      };

      const selectedPlace: Place = placeMock;

      const loadSelectedPlaceAction =
        loadSelectedPlaceActionCreator(selectedPlace);
      const newPLaceState = placesReducer(
        currentPlaceState,
        loadSelectedPlaceAction,
      );

      expect(newPLaceState.selectedPlace).toStrictEqual(selectedPlace);
    });
  });
});
