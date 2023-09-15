import { placeMock, placesMock } from "../../../mocks/placeMock";
import { addPlaceActionCreator, placesReducer } from "../placesSlice";
import { PlacesState } from "../types";

describe("Given an addPlace reducer", () => {
  describe("When it receives a placeState and addPlace action with 'Sigiriya'", () => {
    test("Then it should return a new state with 'Sigiriya' placed added", () => {
      const currentPlaceState: PlacesState = {
        places: placesMock,
      };

      const idPlaceAdd = placeMock;

      const addPlacesAction = addPlaceActionCreator(idPlaceAdd);
      const newPLaceState = placesReducer(currentPlaceState, addPlacesAction);

      expect(newPLaceState.places).toContain(idPlaceAdd);
    });
  });
});
