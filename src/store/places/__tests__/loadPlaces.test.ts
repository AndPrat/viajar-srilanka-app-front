import { placesMock } from "../../../mocks/placeMock";
import { Place } from "../../../types";
import { loadPlacesActionCreator, placesReducer } from "../placesSlice";
import { PlacesState } from "../types";

describe("Given a loadPlaces reducer", () => {
  describe("When it receives a placeState and loadPlaces action with 'Sigiriya' and 'Ahas Namaye Palama'", () => {
    test("Then it should return a new state with two places 'Sigiriya' and 'Ahas Namaye Palama'", () => {
      const currentPlaceState: PlacesState = {
        places: [],
      };

      const places: Place[] = placesMock;

      const loadPlacesAction = loadPlacesActionCreator(places);
      const newPLaceState = placesReducer(currentPlaceState, loadPlacesAction);

      expect(newPLaceState).toHaveProperty("places", places);
    });
  });
});
