import { placesMock } from "../../../mocks/placeMock";
import { placesReducer, removePlaceActionCreator } from "../placesSlice";
import { PlacesState } from "../types";

describe("Given a removePlace reducer", () => {
  describe("When it receives a placeState and removePlaces action with 'Sigiriya' and 'Ahas Namaye Palama'", () => {
    test("When it should return a new state with one places 'Sigiriya'", () => {
      const currentPlaceState: PlacesState = {
        places: placesMock,
      };

      const idPlaceDeleted = "64fb42046d0350ec52f38918";

      const removePlaceAction = removePlaceActionCreator(idPlaceDeleted);
      const newPLaceState = placesReducer(currentPlaceState, removePlaceAction);

      expect(newPLaceState.places).not.toContain(placesMock[1]);
    });
  });
});
